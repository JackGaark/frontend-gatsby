import {useStaticQuery,graphql} from 'gatsby';

const useImages = () => {
  // const windowWidth = useWindowWidth()
  // const isMobile = windowWidth <= 768
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          image: node {
            name
            childImageSharp {
              fixed(width: 1280, quality: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return data.images
}

export default useImages;
