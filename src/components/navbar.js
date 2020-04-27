import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex, Link as RebassLink } from 'rebass/styled-components';

import { Logo } from './logo';

const Container = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
`;
const MenuListItem = styled.li`
  text-align: center;
`;

export const Navbar = ({ location }) => {
  return (
    <Container>
      <Flex
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
        justifyContent={['center', 'center', 'space-between']}
        sx={{ maxWidth: 960, mx: 'auto' }}
        px="2rem"
        py={['1.25rem', '1.25rem', '0.75rem']}
      >
        <a href="/">
          <Logo
            style={{
              maxWidth: '2rem',
              marginTop: '0.2rem',
            }}
          />
        </a>

        <MenuList>
          <MenuListItem>
            <RebassLink variant="navbarLink" as={Link} to="/">
              Home
            </RebassLink>
          </MenuListItem>

          <MenuListItem>
            <RebassLink variant="navbarLink" as={Link} to="/faq">
              FAQs
            </RebassLink>
          </MenuListItem>

          <MenuListItem>
            <RebassLink
              variant="navbarLink"
              href="https://github.com/manosim/gitify"
              aria-label="GitHub Repository"
            >
              Github
            </RebassLink>
          </MenuListItem>
        </MenuList>
      </Flex>
    </Container>
  );
};
