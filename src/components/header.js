import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import Octicon, { CloudDownload } from '@primer/octicons-react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import { Logo } from './logo';

const Wrapper = styled(Grid)`
  padding: 3rem 0.5rem;
  background: rgb(242, 244, 248);
  background: linear-gradient(
    148deg,
    rgba(242, 244, 248, 1) 0%,
    rgba(213, 220, 235, 1) 100%
  );
`;

const SiteTitle = styled.h1`
  font-size: 2.85rem;
  font-weight: 500;
  line-height: 3.25rem;
`;

const SiteDesc = styled.h4`
  margin-top: 0.75rem;
  font-size: 2.25rem;
  line-height: 2.55rem;
  font-weight: 300;
`;

const ReleaseDetails = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  width: 25rem;
  margin: 3rem auto;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 768px) {
    transform: rotate(10deg);
  }
`;

const FILENAME_REGEX = /Gitify-\d.\d.\d.dmg/g;
const REPO_URL = 'https://api.github.com/repos/manosim/gitify/releases/latest';
const REPO_RELEASES_URL = 'https://github.com/manosim/gitify/releases/latest';

export const Header = () => {
  const [downloadURL, setDownloadURL] = useState(null);
  const [version, setVersion] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFailed(false);

      try {
        const { data } = await axios(REPO_URL);
        const parsedDate = parseISO(data.published_at.slice(0, -1));
        const asset = data.assets.find(item => item.name.match(FILENAME_REGEX));
        setDownloadURL(asset.browser_download_url);
        setVersion(data.tag_name);
        setReleaseDate(format(parsedDate, 'dd/MM/yyyy'));
      } catch (_) {
        setFailed(true);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper fluid className="text-primary">
      <Grid>
        <Row middle="sm">
          <Col xs={12} sm={6}>
            <Logo
              style={{
                maxWidth: '5rem',
                margin: '0 0 1rem',
              }}
              isDark
            />

            <SiteTitle>Gitify</SiteTitle>

            <SiteDesc>
              Your GitHub notifications <br /> on your menu bar.
            </SiteDesc>

            {!failed && version && (
              <ReleaseDetails>
                <a
                  className="btn btn-success mb-3 px-3 py-2"
                  href={downloadURL}
                >
                  <Octicon className="mr-2" icon={CloudDownload} /> macOS
                </a>
                <div>
                  <div>Current Version: {version}.</div>
                  <div>Released on {releaseDate}.</div>
                </div>
              </ReleaseDetails>
            )}

            {failed && (
              <ReleaseDetails>
                <div>
                  <a
                    className="btn btn-success mb-3 px-3 py-2"
                    href={REPO_RELEASES_URL}
                  >
                    View GitHub Releases
                  </a>

                  <div>Couldn't get latest version.</div>
                </div>
              </ReleaseDetails>
            )}
          </Col>

          <Col xs={12} sm={6}>
            <Image src="/images/mockup.png" alt="Gitify Desktop App" />
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
};
