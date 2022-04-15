import styled from 'styled-components';
import toast from 'react-hot-toast';

export default function ToastContent({ id, children }) {
  return (
    <S_ToastContent onClick={() => toast.dismiss(id)}>
      {children}
    </S_ToastContent>
  );
}

const S_ToastContent = styled.span`
  padding: 0.8rem 0;
`;
