// To load global CSS to your application, create a file called pages/_app.js with the following content:
// The default export of _app.js is a top-level React component that wraps all the pages in your application. 
// You can use this component to keep state when navigating between pages, or to add global styles as we're doing here. Learn more about _app.js file.

import '/styles/global.css';
// import '/styles/sidebars.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}