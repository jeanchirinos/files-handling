import { Provider } from 'react-redux';
import store from '../src/app/store';
import { Toaster } from 'react-hot-toast';
// Components
import ComponentWrapper from 'components/General/ComponentWrapper';
import TemporalThemeSwitcher from 'components/Fixed/TemporalThemeSwitcher';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ComponentWrapper>
        <TemporalThemeSwitcher />
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </ComponentWrapper>
    </Provider>
  );
}
