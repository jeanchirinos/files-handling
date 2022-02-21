import { ThemeProvider } from 'styled-components';
import { dark, light } from '../styleGuide/themedColors';
import GlobalStyles from '../globalStyles';
import useSettings from '@/hooks/useSettings';
import CustomHead from '../components/CustomHead';

const Wrapper = ({ children }) => {
  const { _darkTheme } = useSettings();

  return (
    <ThemeProvider theme={_darkTheme ? dark : light}>
      <GlobalStyles />
      <CustomHead />
      {children}
    </ThemeProvider>
  );
};

export default Wrapper;
