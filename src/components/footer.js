import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, Flex, Link } from 'rebass/styled-components';

export const Footer = () => (
  <Box bg="lightGray" px={3} py={4} mt={3} textAlign="center" fontSize="0.8rem">
    <Flex
      flexWrap="wrap"
      py={1}
      px={3}
      sx={{ maxWidth: 960, mx: 'auto' }}
      flexDirection={['column-reverse', 'row', 'row']}
      justifyContent={['center', 'space-between', 'space-between']}
    >
      <Box my={[1, 0]}>
        Copyright ©{' '}
        <Link variant="link" href="https://www.gitify.io/">
          Gitify
        </Link>{' '}
        {new Date().getFullYear()}. Developed by{' '}
        <Link variant="link" href="https://www.manos.im/">
          Emmanouil Konstantinidis
        </Link>
        .
      </Box>

      <Link
        variant="link"
        href="https://github.com/manosim/gitify/"
        aria-label="GitHub Repository"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Flex>
  </Box>
);
