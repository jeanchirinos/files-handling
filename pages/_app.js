import { Provider } from 'react-redux';
import store from '../src/app/store';
import AppWrapper from '../src/components/AppWrapper';
import { SettingsButton, TemporalThemeSwitcher } from '../src/components';

function MyApp({ Component, pageProps }) {
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

export default MyApp;
