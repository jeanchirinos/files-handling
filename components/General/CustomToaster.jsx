import toast, { Toaster } from 'react-hot-toast';

export default function CustomToaster() {
  return (
    <div onClick={() => toast.dismiss()}>
      <Toaster
        position="bottom-center"
        toastOptions={{ style: { cursor: 'pointer' } }}
      />
    </div>
  );
}
