import UploadFilesLogic from './UploadFilesLogic';

export default function UploadFilesButton() {
  const { openFileExplorer, uploadFiles } = UploadFilesLogic();

  return (
    <>
      <button onClick={() => openFileExplorer()}>Sube tus archivos</button>

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
