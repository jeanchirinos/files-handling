import { Button } from 'src/globalStyles/components';
import UploadFilesLogic from './UploadFilesLogic';

export default function UploadFilesButton() {
  const { openFileExplorer, uploadFiles } = UploadFilesLogic();

  return (
    <>
      <Button onClick={() => openFileExplorer()}>Sube tus archivos</Button>

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
