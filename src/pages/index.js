import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import Layout from '../components/layout';
import { Header } from '../components/header';
import SEO from '../components/seo';

const SectionMain = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Screenshot = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 22rem;

  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const LogosList = styled.ul`
  flex-wrap: wrap;
  justify-content: center;
`;

const LogosListItem = styled.li`
  border: 0;
  border-radius: 0;
  padding: 0.5rem 0.75rem;
  margin: 1rem 0.25rem;
  background-color: #f2f4f8;

  &:hover {
    background-color: #d9dbdf;
  }

  .img-fluid {
    width: 4rem;
  }
`;

const openSourceLibs = [
  {
    name: 'React JS',
    link: 'https://reactjs.org/',
    image: '/images/logos/react.png',
  },
  {
    name: 'Redux',
    link: 'https://redux.js.org/',
    image: '/images/logos/redux.png',
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    image: '/images/logos/typescript.png',
  },
  {
    name: 'GitHub',
    link: 'https://www.github.com/',
    image: '/images/logos/github.png',
  },
  {
    name: 'Jest',
    link: 'https://jestjs.io/',
    image: '/images/logos/jest.png',
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="GitHub notifications on your menu bar" />
    <Helmet>
      <meta
        name="google-site-verification"
        content="jJNnPZ2wu7F1tlSab57og1N3RNrMqhzTCzRrbztY8WU"
      />
    </Helmet>

    <Header />

    <Grid fluid className="section px-3 py-5">
      <Grid>
        <Row>
          <SectionMain md={7}>
            <h3>
              All your GitHub notifications on your desktop. Nice &amp; Easy.
            </h3>

            <p className="lead">
              Ever got lost with GitHub notifications? Too many emails? Gitify
              is all about making your life easier. Sitting on your menu bar, it
              informs you for any GitHub notifications without being annoying
              and of course without adverts. It just gets the job done. Works
              with GitHub and{' '}
              <strong>
                <a href="https://enterprise.github.com/">GitHub Enterprise</a>
              </strong>
              . You can even connect <strong>multiple</strong> accounts.
            </p>
          </SectionMain>

          <Col md={5} className="px-3">
            <Screenshot
              src="/images/all-read.png"
              alt="Screenshot when there are no notifications read"
            />
          </Col>
        </Row>
      </Grid>
    </Grid>

    <Grid fluid className="section px-3 py-5 bg-primary text-light">
      <Grid>
        <Row>
          <Col md={5} className="px-3">
            <Screenshot
              src="/images/settings.png"
              alt="Your Preferences, Settings"
            />
          </Col>

          <SectionMain md={7}>
            <h3>It's about your preferences.</h3>
            <p className="lead">
              Gitify will notify you every time you receive a notification by
              playing a sound (not an annoying one - it's a promise), showing
              native mac OS notifications or by just turning its tray icon to
              green. It is not there to interupt your workflow or distract you,
              you can customize your settings to your preference.
            </p>
          </SectionMain>
        </Row>
      </Grid>
    </Grid>

    <Grid className="px-3 py-5">
      <Row>
        <SectionMain md={7}>
          <h3>Free &amp; Open Source. It's ours.</h3>
          <p className="lead">
            With version 3.0.0 being a complete rewrite of the app, Gitify is
            based on{' '}
            <a
              href="https://electron.atom.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Electron
            </a>
            ,{' '}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            ,{' '}
            <a
              href="http://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>{' '}
            and more awesome open source libraries. Written in{' '}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Typescript
            </a>
            .
          </p>
        </SectionMain>

        <Col md={5} className="px-3">
          <LogosList className="list-group list-group-horizontal">
            {openSourceLibs.map((item, index) => (
              <LogosListItem key={index} className="list-group-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={item.image} alt={item.name} />
                </a>
              </LogosListItem>
            ))}
          </LogosList>
        </Col>
      </Row>
    </Grid>
  </Layout>
);

export default IndexPage;
