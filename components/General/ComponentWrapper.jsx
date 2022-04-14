import { useEffect } from 'react';
import { dark, light } from '../../src/styleGuide/themedColors';
import GlobalStyles from 'src/globalStyles';
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
      <GlobalStyles theme={_darkTheme ? dark : light} />
      <CustomHead />
      {children}
    </>
  );
}
