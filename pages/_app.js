import { Provider } from 'react-redux';
import store from '../src/app/store';
import ComponentWrapper from '@/General/ComponentWrapper';
import SettingsButton from '@/Fixed/SettingsButton';
import TemporalThemeSwitcher from '@/Fixed/TemporalThemeSwitcher';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ComponentWrapper>
        <SettingsButton />
        <TemporalThemeSwitcher />
        <Component {...pageProps} />
      </ComponentWrapper>
    </Provider>
  );
}
