import styled from 'styled-components';
import toast from 'react-hot-toast';

export default function ToastContent({ id, children }) {
  return (
    <StyledToastContent onClick={() => toast.dismiss(id)}>
      {children}
    </StyledToastContent>
  );
}

const StyledToastContent = styled.span`
  padding: 0.8rem 0;
`;
