import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import AboutList from '../components/AboutList';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Sobre" />
      <AboutList />
    </Layout>
  );
};

export default AboutPage;
