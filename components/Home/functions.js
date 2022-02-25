import toast from 'react-hot-toast';

export function closeContextMenu() {
  const plantillaPreviouslySelected = document.querySelector('.selected');
  plantillaPreviouslySelected?.classList.toggle('selected');
}

export function alertUser(errorMessage) {
  toast.error(`${errorMessage}`, {
    duration: 30000,
    id: errorMessage,
    style: {
      padding: '1rem',
      color: 'white',
      backgroundColor: '#d77575',
      maxWidth: '100%',
    },
    iconTheme: {
      primary: 'white',
      secondary: '#d77575',
    },
  });
}
