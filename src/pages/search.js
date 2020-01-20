import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Search from '../components/Search';

const SearchPage = () => {
  return (
    <Layout>
      <SEO
        title="Procurar algo"
        description="Pesquise entre as postagens do blog"
      />
      <Search />
    </Layout>
  );
};

export default SearchPage;
