import React from 'react';
import Header from './header';
// import Posts from './posts';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import useImages from '../hooks/use-images';
import "./base.css"
import "./fonts.css"
import "./style.css"

const Layout = ({children}) => {
  const {title,description} = useSiteMetadata();
  const images = useImages();

  return (
  <>
  <Helmet>
    <html lang="en" />
    <title>Hello FEM</title>
    <meta name="description" content={description} />
  </Helmet>
  <Header />
  <main>
      {images.edges.map((edge, i) => {
        console.log(edge.image)
        return (
          <div
            className="photo-blurred"
            key = {i}
            style = {{
            backgroundImage:`
            url("${edge.image.childImageSharp.fixed.src}")
            `,
            }}
          />
        )
      })}
    </main>
    <div className="content">
      {children}
    </div>
    <footer>
      <a href="#">Email</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </footer>
  </>
  );
};

export default Layout;

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
