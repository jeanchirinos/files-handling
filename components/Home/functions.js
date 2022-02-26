import ToastContent from '@/General/ToastContent';
import toast from 'react-hot-toast';

export function closeContextMenu() {
  const plantillaPreviouslySelected = document.querySelector('.selected');
  plantillaPreviouslySelected?.classList.toggle('selected');
}

export function alertUser(errorMessage) {
  toast.error((t) => <ToastContent id={t.id}>{errorMessage}</ToastContent>, {
    duration: 30000,
    className: 'toast error',
    iconTheme: {
      primary: '#FCFBFB',
      secondary: '#ed5d75',
    },
  });
}
