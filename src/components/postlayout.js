import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import './base.css';
import './fonts.css';
import './style.css';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Postlayout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Hello FEM</title>
        <meta name="description" content={description} />
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Postlayout;

// render = {
//   ({
//     images
//   }) => {
//     // necessary on first load, because Gatsby cannot build/compute window.innerWidth
//     if (!windowWidth) {
//       return null
//     }

//     if (isMobile) {
//       return <GalleryMobile images = {
//         images
//       }
//       />
//     }

//     return <Gallery images = {
//       images
//     }
//     />
//   }
// }
// />
