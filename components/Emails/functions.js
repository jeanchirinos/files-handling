import toast from 'react-hot-toast';
import ToastContent from 'components/General/ToastContent';

export function copyElement(e, copyValue) {
  const textToCopy = copyValue || e.target.innerText || e.target.value;
  navigator.clipboard.writeText(textToCopy);

  const toastContent = toastId => (
    <ToastContent id={toastId}>Copiado !</ToastContent>
  );

  const toastProps = {
    duration: 1000,
    className: 'toast success',
    iconTheme: {
      primary: '#FCFBFB',
      secondary: '#75D7B6',
    },
  };

  toast.success(t => toastContent(t.id), toastProps);
}
