import React from 'react';
import styled from 'styled-components';
import Octicon, { MarkGithub } from '@primer/octicons-react';

const FooterWrapper = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 0.8rem;
`;

export const Footer = () => {
  return (
    <FooterWrapper className="container-fluid bg-light py-4 mt-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column-reverse flex-sm-row justify-content-between">
            <span className="my-2 my-sm-0">
              Copyright © <a href="https://www.gitify.io/">Gitify</a>{' '}
              {new Date().getFullYear()}. Developed by{' '}
              <a href="https://www.manos.im/">Emmanouil Konstantinidis</a>.
            </span>

            <a
              href="https://github.com/manosim/gitify/"
              aria-label="GitHub Repository"
            >
              <Octicon icon={MarkGithub} />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
