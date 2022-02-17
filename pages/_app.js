import { Provider } from 'react-redux';
import store from '../src/app/store';
import AppWrapper from '../src/components/AppWrapper';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
