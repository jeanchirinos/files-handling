import { ThemeProvider } from 'styled-components';
import { dark, light } from '../styleGuide';
import GlobalStyles from '../globalStyles';
import useSettings from '../hooks/useSettings';
import CustomHead from '../components/CustomHead';

const Wrapper = ({ children }) => {
  const { darkTheme } = useSettings();

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />
      <CustomHead />
      {children}
    </ThemeProvider>
  );
};

export default Wrapper;
