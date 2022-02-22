import styled, { ThemeProvider } from 'styled-components';
import { dark, light } from '../../src/styleGuide/themedColors';
import GlobalStyles from '../../src/globalStyles';
import useSettings from '@/hooks/useSettings';
import CustomHead from '@/General/CustomHead';

export default function AppWrapper({ children }) {
  const { _darkTheme } = useSettings();

  return (
    <ThemeProvider theme={_darkTheme ? dark : light}>
      <GlobalStyles />
      <CustomHead />
      <>{children}</>
    </ThemeProvider>
  );
}

export const GlobalPage = styled.div.attrs({
  // onClick: () => console.log('testing'),
})``;