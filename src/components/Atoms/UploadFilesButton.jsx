import { useRouter } from 'next/router';

export default function UploadFilesButton() {
  const router = useRouter();

  function openFileExplorer() {
    document.getElementById('inputFile').click();
  }

  const validationsToUpload = (selectedFiles) => {
    if (!selectedFiles.length) return;

    const isAPdf = selectedFiles.every(
      (file) => file.name.substring(11, 15) === '.pdf'
    );

    if (!isAPdf) return;

    const correctCharacters = ['P90', 'VA0', 'BO0', 'PL0'];

    const fileNameIsCorrect = selectedFiles.every((file) =>
      correctCharacters.includes(file.name.substring(0, 3))
    );

    if (!fileNameIsCorrect) return;

    const fileWeightIsCorrect = selectedFiles.every((file) => {
      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      return fileSizeInMb < 25;
    });

    if (!fileWeightIsCorrect) return;

    return true;
  };

  function uploadFiles(e) {
    const selectedFiles = Array.from(e.target.files);

    const validations = validationsToUpload(selectedFiles);
    if (!validations) return;

    const allFiles = selectedFiles.map((file) => {
      const fileName = file.name.substring(0, 11);

      const fileSizeInMb = parseFloat(
        (file.size * 0.000000953674316).toFixed(2)
      );

      return {
        name: fileName,
        size: fileSizeInMb,
      };
    });

    const emails = [[]];
    const currentIndex = 0;

    let acumulator = 0;

    const auxAllFiles = [...allFiles];

    allFiles.forEach((file) => {
      if (auxAllFiles.includes(file)) {
        if (acumulator + file.size < 25) {
          emails[currentIndex].push(file);
          acumulator += file.size;
        } else {
          auxAllFiles.forEach((file) => {
            if (file.size + acumulator < 25) {
              emails[currentIndex].push(file);
              acumulator += file.size;
              const elementToRemove = auxAllFiles.indexOf(file);
              auxAllFiles.splice(elementToRemove, 1);
            }
          });

          currentIndex++;
          emails[currentIndex] = [];
          emails[currentIndex].push(file);
          acumulator = file.size;
        }

        const elementToRemove = auxAllFiles.indexOf(file);
        auxAllFiles.splice(elementToRemove, 1);
        // console.log(auxAllFiles);
      }
    });

    console.log(emails);

    console.log('ok');
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
    </>
  );
}
