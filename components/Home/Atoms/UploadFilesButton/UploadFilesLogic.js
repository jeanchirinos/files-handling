import { useRouter } from 'next/router';
import useSettings from '@/hooks/settingsSlice';
import usePlantillas from '@/hooks/plantillasSlice';
import useEmails from '@/hooks/emailsSlice';
import useEmailTemplate from '@/hooks/emailTemplateSlice';
import { alertUser } from '../../functions';
import { MAX_FILE_SIZE } from 'src/data';

export default function UploadFilesLogic() {
  const router = useRouter();
  const { _manualMode, __toggleManualMode } = useSettings();
  const { __addToPlantillasStack, _plantillasStack, __resetPlantillasStack } =
    usePlantillas();
  const { __setEmails, __setPriority, __setCurrentEmailIndex } = useEmails();
  const { __resetSubject } = useEmailTemplate();

  function openFileExplorer() {
    document.getElementById('inputFile').click();
  }

  const validationsToUpload = selectedFiles => {
    if (!selectedFiles.length) return;

    const isAPdf = selectedFiles.every(file => {
      const { name, type } = file;

      if (type === 'application/pdf') return true;

      alertUser('no es un pdf', name);
      return;
    });

    if (!isAPdf) return;

    const fileWeightIsCorrect = selectedFiles.every(file => {
      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      if (fileSizeInMb >= MAX_FILE_SIZE)
        alertUser('el peso excede el límite', file.name);

      return fileSizeInMb < MAX_FILE_SIZE;
    });

    if (!fileWeightIsCorrect) return;

    return true;
  };

  const renamePlantillaIfIncorrect = plantilla => {
    const correctCharacters = ['P90', 'VA0', 'BO0', 'BM0', 'PL0'];

    const threeFirstCharactersOfPlantilla =
      plantilla[0] + plantilla[1] + plantilla[2];

    if (correctCharacters.includes(threeFirstCharactersOfPlantilla))
      return plantilla.substring(0, 11);

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

    const filteredFiles = selectedFiles.filter(file =>
      renamePlantillaIfIncorrect(file.name)
    );

    const allFiles = filteredFiles.map(file => {
      const fileName = renamePlantillaIfIncorrect(file.name);

      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      let NSTDNumber;
      if (fileName[0] !== 'B' && fileName[10] !== 'A') {
        NSTDNumber = fileName.substring(3, 11);

        return {
          name: fileName,
          size: fileSizeInMb,
          NSTDNumber,
        };
      }

      return {
        name: fileName,
        size: fileSizeInMb,
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
    let accumulator = 0;
    const auxAllFiles = [...allFiles];

    // emailsWOP = emailsWithOrderPriority
    const emailsWOP = [[]];
    const currentIndex2 = 0;
    let accumulator2 = 0;

    const removeElementFromAuxArray = file => {
      const indexToRemove = auxAllFiles.indexOf(file);
      auxAllFiles.splice(indexToRemove, 1);
    };

    const addItem = (file, priority) => {
      if (priority === 'quantity') {
        emailsWQP[currentIndex].push(file);
        accumulator += file.size;
      }

      if (priority === 'order') {
        emailsWOP[currentIndex2].push(file);
        accumulator2 += file.size;
      }
    };

    // emailsWithQuantityPriority
    allFiles.forEach(file => {
      if (!auxAllFiles.includes(file)) return;

      if (accumulator + file.size < MAX_FILE_SIZE) {
        addItem(file, 'quantity');
      } else {
        auxAllFiles.forEach(file => {
          if (file.size + accumulator < MAX_FILE_SIZE) {
            addItem(file, 'quantity');
            removeElementFromAuxArray(file);
          }
        });

        currentIndex++;
        emailsWQP[currentIndex] = [];
        accumulator = 0;
        addItem(file, 'quantity');
      }

      removeElementFromAuxArray(file);
    });

    // emailsWithOrderPriority
    allFiles.forEach(file => {
      if (accumulator2 + file.size < MAX_FILE_SIZE) {
        addItem(file, 'order');
      } else {
        currentIndex2++;
        emailsWOP[currentIndex2] = [];
        accumulator2 = 0;
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
    // __resetSubject();

    router.push('/emails');
  }

  return { openFileExplorer, uploadFiles, groupEmails };
}
