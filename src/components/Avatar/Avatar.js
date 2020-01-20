import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
/////////////////////
//ver efeitos de imagem depois no Gatsby
/////////////////////

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `,
  );
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
