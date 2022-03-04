import { useRouter } from 'next/router';
import useSettings from '@/hooks/useSettings';
import usePlantillas from '@/hooks/usePlantillas';
import useEmails from '@/hooks/useEmails';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import { alertUser } from '../../functions';

export default function UploadFilesLogic() {
  const router = useRouter();
  const { _manualMode, __toggleManualMode } = useSettings();
  const { __addToPlantillasStack, _plantillasStack, __resetPlantillasStack } =
    usePlantillas();
  const { __setEmails, __setPriority, __setCurrentEmailIndex } = useEmails();
  const { __resetSubjectType } = useEmailTemplate();

  function openFileExplorer() {
    document.getElementById('inputFile').click();
  }

  const validationsToUpload = (selectedFiles) => {
    if (!selectedFiles.length) {
      // console.log('No se ha seleccionado ningun archivo');
      return;
    }

    const isAPdf = selectedFiles.every((file) => {
      const fileExtension = file.name.substring(
        file.name.length - 4,
        file.name.length
      );

      if (fileExtension.toUpperCase() !== '.PDF') {
        alertUser('no es un pdf', file.name);
      }

      return fileExtension.toUpperCase() === '.PDF';
    });

    if (!isAPdf) {
      return;
    }

    const fileWeightIsCorrect = selectedFiles.every((file) => {
      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      if (fileSizeInMb >= 24.9) {
        alertUser('el peso excede el límite', file.name);
      }

      return fileSizeInMb < 24.9;
    });

    if (!fileWeightIsCorrect) {
      return;
    }

    return true;
  };

  const renamePlantillaIfIncorrect = (plantilla) => {
    const correctCharacters = ['P90', 'VA0', 'BO0', 'PL0'];

    const threeFirstCharactersOfPlantilla =
      plantilla[0] + plantilla[1] + plantilla[2];

    if (correctCharacters.includes(threeFirstCharactersOfPlantilla)) {
      return plantilla.substring(0, 11);
    }

    for (let i = 0; i < plantilla.length; i++) {
      const threeCharacters =
        plantilla[i] + plantilla[i + 1] + plantilla[i + 2];

      if (correctCharacters.includes(threeCharacters)) {
        const correctNameOfPlantilla = plantilla.substring(i, i + 11);

        return correctNameOfPlantilla;
      }
    }

    alertUser('el nombre no es correcto', plantilla);
  };

  function uploadFiles(e) {
    const files = e.target.files || e.dataTransfer.files;
    const selectedFiles = Array.from(files);

    const validations = validationsToUpload(selectedFiles);
    if (!validations) return;

    const filteredFiles = selectedFiles.filter((file) =>
      renamePlantillaIfIncorrect(file.name)
    );

    const allFiles = filteredFiles.map((file) => {
      const fileName = renamePlantillaIfIncorrect(file.name);

      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      let NSTDNumber;
      if (fileName[0] !== 'B' && fileName[10] !== 'A') {
        NSTDNumber = fileName.substring(3, 11);
      }

      return {
        name: fileName,
        size: fileSizeInMb,
        NSTDNumber,
      };
    });

    if (!allFiles.length) return;

    _manualMode && __addToPlantillasStack(allFiles);

    !_manualMode && groupEmails(allFiles);
  }

  //
  function groupEmails(allFiles) {
    // emailsWQP = emailsWithQuantityPriority
    const emailsWQP = [[]];
    const currentIndex = 0;
    let acumulator = 0;
    const auxAllFiles = [...allFiles];

    // emailsWOP = emailsWithOrderPriority
    const emailsWOP = [[]];
    const currentIndex2 = 0;
    let acumulator2 = 0;

    const removeElementFromAuxArray = (file) => {
      const indexToRemove = auxAllFiles.indexOf(file);
      auxAllFiles.splice(indexToRemove, 1);
    };

    const addItem = (file, priority) => {
      if (priority === 'quantity') {
        emailsWQP[currentIndex].push(file);
        acumulator += file.size;
      }

      if (priority === 'order') {
        emailsWOP[currentIndex2].push(file);
        acumulator2 += file.size;
      }
    };

    // emailsWithQuantityPriority
    allFiles.forEach((file) => {
      if (!auxAllFiles.includes(file)) return;

      if (acumulator + file.size < 24.9) {
        addItem(file, 'quantity');
      } else {
        auxAllFiles.forEach((file) => {
          if (file.size + acumulator < 24.9) {
            addItem(file, 'quantity');
            removeElementFromAuxArray(file);
          }
        });

        currentIndex++;
        emailsWQP[currentIndex] = [];
        acumulator = 0;
        addItem(file, 'quantity');
      }

      removeElementFromAuxArray(file);
    });

    // emailsWithOrderPriority
    allFiles.forEach((file) => {
      if (acumulator2 + file.size < 24.9) {
        addItem(file, 'order');
      } else {
        currentIndex2++;
        emailsWOP[currentIndex2] = [];
        acumulator2 = 0;
        addItem(file, 'order');
      }
    });

    if (emailsWOP.length <= emailsWQP.length) {
      __setEmails(emailsWOP);
      __setPriority('order');
    } else {
      __setEmails(emailsWQP);
      __setPriority('quantity');
    }

    _manualMode && __toggleManualMode();
    _plantillasStack.length && __resetPlantillasStack([]);

    __setCurrentEmailIndex(0);
    __resetSubjectType();

    router.push('/emails');
  }

  return { openFileExplorer, uploadFiles, groupEmails };
}
