import React from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';

const MyApp: React.FC<{ Component: React.FC, pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
  
      <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
    </Layout>
  );
};

export default MyApp;