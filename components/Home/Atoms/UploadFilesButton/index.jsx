import UploadFilesLogic from './UploadFilesLogic';
import { Button } from 'components/StyledComponents';

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
