import React from 'react';
import Icons from './Icons';
import links from './content';
import * as S from './styled';

const SocialLinks = props => {
  return (
    <S.SocialLinksWrapper {...props}>
      <S.SocialLinksList>
        {links.map((link, index) => {
          const Icon = Icons[link.label];
          return (
            <S.SocialLinksItem key={index}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          );
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
};

export default SocialLinks;
