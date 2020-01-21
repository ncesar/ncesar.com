import React from 'react';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import * as S from './styled';

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <MenuLinks />
      <SocialLinks />
    </S.SidebarWrapper>
  );
};

export default Sidebar;
