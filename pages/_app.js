import { Provider } from 'react-redux';
import store from '../src/app/store';
import AppWrapper from '@/General/AppWrapper';
import SettingsButton from '@/Fixed/SettingsButton';
import TemporalThemeSwitcher from '@/Fixed/TemporalThemeSwitcher';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWrapper>
        <SettingsButton />
        <TemporalThemeSwitcher />
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}
