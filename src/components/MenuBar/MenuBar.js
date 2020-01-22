import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { HomeHeart as Home } from 'styled-icons/boxicons-regular/HomeHeart';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { ArrowAltCircleUp as Arrow } from 'styled-icons/fa-regular/ArrowAltCircleUp';
import { Lightbulb as Light } from 'styled-icons/remix-line/Lightbulb';
import { GridAlt as Grid } from 'styled-icons/boxicons-solid/GridAlt';
import { ThList as List } from 'styled-icons/typicons/ThList';
import { Rss } from 'styled-icons/boxicons-regular/Rss';

import getThemeColor from '../../utils/getThemeColor';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/feed.xml"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          title="RSS"
        >
          <S.MenuBarItem>
            <Rss />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
