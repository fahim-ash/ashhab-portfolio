import Link from 'next/link';
import React from 'react';
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/si';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
      
        <a style={{ display: 'flex', alignItems: 'center', color: "white" ,fontSize :"2rem"}}>
          Portfolio Website
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href ="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/fahim-ash">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/fahim-ashhab/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://leetcode.com/fahim_ash/">
        <SiLeetcode size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
