import { Provider } from 'react-redux';
import store from '../src/app/store';
import { Toaster } from 'react-hot-toast';
// Components
import ComponentWrapper from '@/General/ComponentWrapper';
import TemporalThemeSwitcher from '@/Fixed/TemporalThemeSwitcher';
import TemporalFetcher from '@/Fixed/TemporalFetcher';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ComponentWrapper>
        <TemporalThemeSwitcher />
        <TemporalFetcher />
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </ComponentWrapper>
    </Provider>
  );
}
