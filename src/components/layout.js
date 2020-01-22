import React, { useRef, createRef } from 'react';
import Header from './header';
import Posts from './posts';
import Post from './post';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import useImages from '../hooks/use-images';
import usePosts from '../hooks/use-posts';
import './base.css';
import './fonts.css';
import './style.css';

const ImageWrapper = props => {
  return (
    <div
      className="photo-blurred"
      style={{ backgroundImage: `url("${props.imageSrc}")` }}
    >
      {props.children}
    </div>
  );
};

const Layout = () => {
  const { title, description } = useSiteMetadata();
  const images = useImages();
  const posts = usePosts();
  const [firstImage, ...restImages] = images.edges;
  const imagesRef = useRef(restImages.map(() => createRef()));

  const seePostHandler = index => {
    imagesRef.current[index].current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {/* <Header /> */}
      <main>
        <ImageWrapper imageSrc={firstImage.image.childImageSharp.fixed.src}>
          <Posts seePostHandler={seePostHandler} />
        </ImageWrapper>

        {restImages.map(({ image }, i) => (
          <div ref={imagesRef.current[i]} key={i}>
            <ImageWrapper imageSrc={image.childImageSharp.fixed.src}>
              <Post post={posts[i]} />
            </ImageWrapper>
          </div>
        ))}
      </main>
      <footer>
        <a href="mailto:jack.gaarkeuken@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/jack-gaarkeuken" target="_blank">
          Linkedin
        </a>
        <span>
          Hi Im Jack, this is my personal portfolio. I built this site with
          Gatsby. It’s hosted on Netlify.
        </span>
      </footer>
    </>
  );
};

export default Layout;
