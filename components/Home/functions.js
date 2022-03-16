import ToastContent from '@/General/ToastContent';
import toast from 'react-hot-toast';

export function closeContextMenu() {
  const buttonPreviouslySelected = document.querySelector('.selected');
  buttonPreviouslySelected?.classList.remove('selected');
}

export function alertUser(errorMessage, fileName) {
  const toastContent = toastId => (
    <ToastContent id={toastId}>
      <span>Se excluyó el siguiente archivo, ya que {errorMessage} : </span>
      <strong>{fileName}</strong>
    </ToastContent>
  );

  const toastProps = {
    duration: 30000,
    className: 'toast error',
    iconTheme: {
      primary: '#FCFBFB',
      secondary: '#ED5D75',
    },
  };

  toast.error(t => toastContent(t.id), toastProps);
}
