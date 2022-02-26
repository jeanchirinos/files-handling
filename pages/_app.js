import { Provider } from 'react-redux';
import store from '../src/app/store';
import ComponentWrapper from '@/General/ComponentWrapper';
import SettingsButton from '@/Fixed/SettingsButton';
import TemporalThemeSwitcher from '@/Fixed/TemporalThemeSwitcher';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ComponentWrapper>
        {/* <SettingsButton /> */}
        {/* <TemporalThemeSwitcher /> */}
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </ComponentWrapper>
    </Provider>
  );
}
