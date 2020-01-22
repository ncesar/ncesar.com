import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';
/////////////////////
//ver efeitos de imagem depois no Gatsby
/////////////////////

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          title
          position
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.5}
        to="/"
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
    </S.ProfileWrapper>
  );
};
export default Profile;
