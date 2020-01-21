import React from 'react';
import CustomTypography from '../CustomTypography';
import * as S from './styled';

const AboutList = props => {
  return (
    <React.Fragment>
      <CustomTypography variant="h2">🤘César Nascimento</CustomTypography>
      <S.AboutListWrapper {...props}>
        <S.AboutListItem>
          Desenvolvedor Fullstack no{' '}
          <a
            href="https://www.philips.com.br/a-w/about/news/archive/standard/news/press/2016/20160621-philips-technology-center-blumenau.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#757575' }}
          >
            Centro de Excelência em Tecnologia da Philips
          </a>
          ;
        </S.AboutListItem>
        <S.AboutListItem>
          Criador de conteúdo sobre Desenvolvimento Web no{' '}
          <a
            href="https://youtube.com/ncesar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#757575' }}
          >
            YouTube(ncesar)
          </a>
          ;
        </S.AboutListItem>
        <S.AboutListItem>
          Gosto de passar o meu tempo livre desenvolvendo projetos secundários,
          jogando games e assistindo séries;
        </S.AboutListItem>
        <S.AboutListItem>
          Eu tenho <strong>vontade própria</strong>, não <em>talento</em>. Sou
          <strong> esforçado</strong>, não um <em>gênio</em>.{' '}
          <strong>Disciplinado</strong>, não sou <em>sortudo</em>.
        </S.AboutListItem>
      </S.AboutListWrapper>
      <CustomTypography variant="h2">🧰Minhas motivações</CustomTypography>
      <S.AboutListWrapper>
        <S.AboutListItem>
          Eu me motivo a cada dia que se passa a me especializar mais e mais na
          área de Front-end. Pretendo expandir o meu conhecimento ao máximo
          possível em Javascript(até por que, e se o React acabar amanhã?);
        </S.AboutListItem>
        <S.AboutListItem>
          Ao mesmo tempo, tento ser um profissional completo estudando as
          tecnologias de backend e até mesmo de Docker, por exemplo. Tenho uma
          fácil adaptação à novas tecnologias e estou sempre estudando as mais
          atuais do mercado.
        </S.AboutListItem>
        <S.AboutListItem>
          Uma inspiração é o{' '}
          <a
            href="https://overreacted.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#757575' }}
          >
            Dan Abramov
          </a>
          , um dos criadores do Redux e ao mesmo tempo que ele é fera no
          Javascript, ele assume ter muitas falhas e não saber todas linguagens.
          Eu admiro isso! Não somos perfeitos.
        </S.AboutListItem>
      </S.AboutListWrapper>
      <CustomTypography variant="h2">📖Experiência</CustomTypography>
      <CustomTypography
        style={{
          fontSize: 16,
          fontWeight: 300,
          paddingTop: 10,
          lineHeight: '1.2rem',
        }}
      >
        Eu já trabalhei com diversas linguagens e ferramentas e para resumir,
        aqui irão apenas as que trabalho atualmente. Para uma lista completa,
        meu{' '}
        <a
          href="https://www.linkedin.com/in/cesarnascimentoo/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#757575' }}
        >
          LinkedIn
        </a>{' '}
        é uma referência de mais detalhes.
      </CustomTypography>
      <S.AboutListWrapper dot style={{ padding: '10px 68px 30px' }}>
        <S.AboutListItem>Javascript</S.AboutListItem>
        <S.AboutListItem>ReactJS</S.AboutListItem>
        <S.AboutListItem>C#</S.AboutListItem>
        <S.AboutListItem>Webservices</S.AboutListItem>
        <S.AboutListItem>REST</S.AboutListItem>
        <S.AboutListItem>Jest</S.AboutListItem>
        <S.AboutListItem>Test Driven Development(TDD)</S.AboutListItem>
        <S.AboutListItem>JSON</S.AboutListItem>
        <S.AboutListItem>SQL Server</S.AboutListItem>
        <S.AboutListItem>SAFe</S.AboutListItem>
        <S.AboutListItem>Scrum</S.AboutListItem>
        <S.AboutListItem>FHIR</S.AboutListItem>
      </S.AboutListWrapper>
    </React.Fragment>
  );
};

export default AboutList;
