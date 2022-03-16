import UploadFilesLogic from './UploadFilesLogic';
import { Button } from 'src/globalStyles/components';

export default function UploadFilesButton() {
  const { openFileExplorer, uploadFiles } = UploadFilesLogic();

  return (
    <>
      <Button onClick={openFileExplorer}>Sube tus archivos</Button>
      <input
        type="file"
        id="inputFile"
        hidden
        multiple
        accept="application/pdf"
        onChange={uploadFiles}
      />
    </>
  );
}
