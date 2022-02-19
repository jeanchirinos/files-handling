import { useRouter } from 'next/router';
import usePlantillas from '../../hooks/usePlantillas';
import useSettings from '../../hooks/useSettings';

export default function UploadFilesButton() {
  const router = useRouter();
  const {
    setEmails,
    cumulativePlantillas,
    setCumulativePlantillas,
    setPriority,
  } = usePlantillas();
  const { manualMode, toggleManualMode } = useSettings();

  function openFileExplorer() {
    document.getElementById('inputFile').click();
  }

  const validationsToUpload = (selectedFiles) => {
    if (!selectedFiles.length) {
      console.log('No se ha seleccionado ningun archivo');
      return;
    }

    const isAPdf = selectedFiles.every((file) => {
      const fileExtension = file.name.substring(
        file.name.length - 4,
        file.name.length
      );
      return fileExtension.toUpperCase() === '.PDF';
    });

    if (!isAPdf) {
      console.log('El archivo seleccionado no es un pdf');
    }

    const fileWeightIsCorrect = selectedFiles.every((file) => {
      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      return fileSizeInMb < 25;
    });

    if (!fileWeightIsCorrect) {
      console.log('El peso del archivo seleccionado es mayor a 25MB');
      return;
    }

    return true;
  };

  const renamePlantillaIfIncorrect = (plantilla) => {
    const correctCharacters = ['P90', 'VA0', 'BO0', 'PL0'];

    const threeFirstCharactersOfPlantilla =
      plantilla[0] + plantilla[1] + plantilla[2];

    if (correctCharacters.includes(threeFirstCharactersOfPlantilla)) {
      return plantilla;
    } else {
      for (let i = 0; i < plantilla.length; i++) {
        const threeCharacters =
          plantilla[i] + plantilla[i + 1] + plantilla[i + 2];

        if (correctCharacters.includes(threeCharacters)) {
          const correctNameOfPlantilla = plantilla.substring(i);

          return correctNameOfPlantilla;
        }
      }
    }
  };

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
      const elementToRemove = auxAllFiles.indexOf(file);
      auxAllFiles.splice(elementToRemove, 1);
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

    allFiles.forEach((file) => {
      if (!auxAllFiles.includes(file)) return;

      if (acumulator + file.size < 25) {
        addItem(file, 'quantity');
      } else {
        auxAllFiles.forEach((file) => {
          if (file.size + acumulator < 25) {
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

    allFiles.forEach((file) => {
      if (acumulator2 + file.size < 25) {
        addItem(file, 'order');
      } else {
        currentIndex2++;
        emailsWOP[currentIndex2] = [];
        acumulator2 = 0;
        addItem(file, 'order');
      }
    });

    let emailsWithPriority = [];

    if (emailsWOP.length <= emailsWQP.length) {
      emailsWithPriority = emailsWOP;
      setPriority('order');
    } else {
      emailsWithPriority = emailsWQP;
      setPriority('quantity');
    }

    setEmails(emailsWithPriority);

    if (manualMode) {
      toggleManualMode();
      setCumulativePlantillas([]);
    }

    router.push('/emails');
  }

  function uploadFiles(e) {
    const selectedFiles = Array.from(e.target.files);

    const validations = validationsToUpload(selectedFiles);
    if (!validations) return;

    const allFiles = selectedFiles.map((file) => {
      const fileNameCorrected = renamePlantillaIfIncorrect(file.name);

      const fileName = fileNameCorrected.substring(0, 11);

      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      let NSTDNumber;
      if (fileName[10] !== 'A' && fileName[0] !== 'B') {
        NSTDNumber = fileName.slice(3, 11);
      }

      return {
        name: fileName,
        size: fileSizeInMb,
        NSTDNumber,
      };
    });

    if (manualMode) {
      setCumulativePlantillas([...cumulativePlantillas, ...allFiles]);
    } else {
      groupEmails(allFiles);
    }
  }
  return (
    <>
      <button onClick={() => openFileExplorer()}>
        <p className="colored">Sube tus archivos</p>
      </button>

      <input
        type="file"
        id="inputFile"
        hidden
        multiple
        onChange={(e) => uploadFiles(e)}
      />

      <button
        id="activator"
        hidden
        onClick={() => groupEmails(cumulativePlantillas)}
      ></button>
    </>
  );
}
