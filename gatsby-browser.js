/* eslint-disable no-undef */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//import library that is going to be used outside of react
import 'lazysizes';
require('prismjs/themes/prism-coy.css');
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Existe uma nova postagem. ` +
      `Atualizar para mostrar as novas atualizações?`,
  );

  if (answer === true) {
    window.location.reload();
  }
};
