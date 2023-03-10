import "../styles/globals.scss";

import { type AppType } from "next/app";
import Layout from "../components/Layout";
import { api } from "../utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
