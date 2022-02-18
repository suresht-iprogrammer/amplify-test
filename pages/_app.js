import React from 'react';
import { wrapper } from "../redux/store";
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/globals.css';


function MyApp({ Component, pageProps }) {
  return  (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default wrapper.withRedux(MyApp);