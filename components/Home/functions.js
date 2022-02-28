import ToastContent from '@/General/ToastContent';
import toast from 'react-hot-toast';

export function closeContextMenu() {
  const plantillaPreviouslySelected = document.querySelector('.selected');
  plantillaPreviouslySelected?.classList.toggle('selected');
}

export function alertUser(errorMessage, plantilla) {
  const fileWithoutExtension = plantilla.slice(0, -4);

  toast.error(
    (t) => (
      <ToastContent id={t.id}>
        <span>Se excluyó el siguiente archivo, ya que {errorMessage} : </span>
        <strong>{fileWithoutExtension}</strong>
      </ToastContent>
    ),
    {
      duration: 30000,
      className: 'toast error',
      iconTheme: {
        primary: '#FCFBFB',
        secondary: '#ed5d75',
      },
    }
  );
}
