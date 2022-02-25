import { Provider } from 'react-redux';
import store from '../src/app/store';
import ComponentWrapper from '@/General/ComponentWrapper';
import SettingsButton from '@/Fixed/SettingsButton';
import TemporalThemeSwitcher from '@/Fixed/TemporalThemeSwitcher';
import { Toaster } from 'react-hot-toast';
import CustomToaster from '@/General/CustomToaster';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ComponentWrapper>
        <SettingsButton />
        <TemporalThemeSwitcher />
        {/* <Toaster position="bottom-center" /> */}
        <CustomToaster />
        <Component {...pageProps} />
      </ComponentWrapper>
    </Provider>
  );
}
