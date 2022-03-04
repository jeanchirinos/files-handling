import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../../src/styleGuide/themedColors';
import GlobalStyles from 'src/GlobalStyles';
import CustomHead from '@/General/CustomHead';
import useSettings from '@/hooks/settingsSlice';
import { useDispatch } from 'react-redux';
import { getInitialTheme } from 'src/features/settingsSlice';

export default function ComponentWrapper({ children }) {
  const dispatch = useDispatch();
  const { _darkTheme } = useSettings();

  useEffect(() => {
    dispatch(getInitialTheme());
  }, [dispatch]);

  return (
    <>
      {_darkTheme !== undefined && (
        <ThemeProvider theme={_darkTheme ? dark : light}>
          <GlobalStyles />
          <CustomHead />
          {children}
        </ThemeProvider>
      )}
    </>
  );
}
