import toast from 'react-hot-toast';
import ToastContent from '@/General/ToastContent';

export function copyElement(e, copyValue) {
  const textToCopy = copyValue || e.target.innerText || e.target.value;
  navigator.clipboard.writeText(textToCopy);

  toast.success((t) => <ToastContent id={t.id}>Copiado !</ToastContent>, {
    duration: 1000,
    className: 'toast success',
    iconTheme: {
      primary: '#FCFBFB',
      secondary: '#75D7B6',
    },
  });
}
