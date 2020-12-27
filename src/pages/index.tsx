import React from 'react';
import Helmet from 'react-helmet';
import { WindowLocation } from '@reach/router';

import { Layout } from '../components/Layout';
import { Header } from '../components/header';
import { SEO } from '../components/seo';
import { SectionRow } from '../components/SectionRow';

const openSourceLibs = [
  {
    name: 'React JS',
    link: 'https://reactjs.org/',
    image: '/images/logos/react.png',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    image: '/images/logos/tailwindcss.png',
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

const sectionTitleClassName = 'mb-4 text-2xl font-semibold';
const screenshotWrapperClassName =
  'max-w-sm inset-0 bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-xl p-0.5';
const screenshotClassName = 'transform rotate-6 rounded-xl';

const IndexPage = ({ location }: { location: WindowLocation }) => (
  <Layout location={location}>
    <SEO title="GitHub notifications on your menu bar" />
    <Helmet>
      <meta
        name="google-site-verification"
        content="jJNnPZ2wu7F1tlSab57og1N3RNrMqhzTCzRrbztY8WU"
      />
    </Helmet>

    <Header />

    <SectionRow
      mainSide="left"
      main={
        <>
          <h3 className={sectionTitleClassName}>
            All your GitHub notifications on your desktop. Nice &amp; Easy.
          </h3>

          <div className="text-xl font-light">
            Ever got lost with GitHub notifications? Too many emails? Gitify is
            all about making your life easier. Sitting on your menu bar, it
            informs you for any GitHub notifications without being annoying and
            of course without adverts. It just gets the job done. Works with
            GitHub and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://enterprise.github.com/"
            >
              GitHub Enterprise
            </a>
            . You can even connect <strong>multiple</strong> accounts.
          </div>
        </>
      }
      side={
        <div className={screenshotWrapperClassName}>
          <img
            className={screenshotClassName}
            src="/images/all-read.png"
            alt="Screenshot when there are no notifications read"
          />
        </div>
      }
    />

    <SectionRow
      isDark
      mainSide="right"
      main={
        <>
          <h3 className={sectionTitleClassName}>
            It's about your preferences.
          </h3>
          <div className="text-xl font-light">
            Gitify will notify you every time you receive a notification by
            playing a sound (not an annoying one - it's a promise), showing
            native mac OS notifications or by just turning its tray icon to
            green. It is not there to interupt your workflow or distract you,
            you can customize your settings to your preference.
          </div>
        </>
      }
      side={
        <div className={screenshotWrapperClassName}>
          <img
            className={screenshotClassName}
            src="/images/settings.png"
            alt="Your Preferences, Settings"
          />
        </div>
      }
    />

    <SectionRow
      mainSide="left"
      main={
        <>
          <h3 className={sectionTitleClassName}>
            Free &amp; Open Source. It's ours.
          </h3>
          <div className="text-xl font-light">
            Gitify is based on{' '}
            <a
              href="https://www.electronjs.org/"
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
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
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
          </div>
        </>
      }
      side={
        <div className="flex flex-wrap justify-center max-w-md">
          {openSourceLibs.map((item, index) => (
            <div
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 m-4"
              key={index}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img className="w-16" src={item.image} alt={item.name} />
              </a>
            </div>
          ))}
        </div>
      }
    />
  </Layout>
);

export default IndexPage;
