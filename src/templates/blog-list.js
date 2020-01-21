import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';
import CustomTypography from '../components/CustomTypography';
import * as S from '../components/ListWrapper/styled';

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO
        title="Início"
        description="O blog de um jovem que faz vídeos de programação para o YouTube e que ama tecnologia!"
      />
      <CustomTypography variant="h1">Últimas postagens</CustomTypography>
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              id,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={id}
              slug={slug}
              category={category}
              date={date}
              description={description}
              title={title}
              timeToRead={timeToRead}
              background={background}
            />
          ),
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
