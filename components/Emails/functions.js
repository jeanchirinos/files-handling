import toast from 'react-hot-toast';

export function copyElement(e, copyValue) {
  const textToCopy = copyValue || e.target.innerText || e.target.value;
  navigator.clipboard.writeText(textToCopy);

  toast.success('Copiado !', {
    duration: 1000,
    style: {
      padding: '1rem',
      color: '#FFFAEE',
      backgroundColor: '#75d7b6',
    },
    iconTheme: {
      primary: '#FFFAEE',
      secondary: '#75d7b6',
    },
  });
}
