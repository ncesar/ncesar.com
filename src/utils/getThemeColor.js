const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#dbdbde';
  if (theme === 'dark') return '#303233';
};

export default getThemeColor;
