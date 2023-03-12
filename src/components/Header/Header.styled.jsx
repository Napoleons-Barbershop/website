import styled, {css} from 'styled-components';
// import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import { BLACK, HEADER_BG_COLOR, HOVER_ITEM_COLOR, LIGHT_BROWN } from '../../utils/colors';
import { Col, Container, Row } from 'react-bootstrap';

export const HeaderNavArea = styled(Container)`
  align-items: center;
  display: flex;
  margin: 0 auto;
  padding: 10px 50px;
  background-color: ${({fixed}) => fixed ? BLACK : HEADER_BG_COLOR};
  position: ${({fixed}) => fixed ? 'fixed' : 'absolute'};
  left: 0;
  z-index: ${({fixed}) => fixed ? 9999 : 3};
  top: ${({fixed}) => fixed ? 0 : '10px'};
  color: #fff;
`

export const HeaderLogo = styled(HashLink)`
  color: inherit;
  font-size: 25px;
  margin-right: 20px;
  text-decoration: none;
  width: 70px;
  height: 70px;
`

export const HeaderLogoImage = styled.img`
  height: inherit;
  width: inherit;
`

export const HeaderMenuList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
`

export const MenuItemLink = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  text-align: left;
  padding: 0.7rem 1rem;

  &:hover {
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const RecruitmentLink = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  text-align: left;
  padding: 0.7rem 1rem;
  background-color: ${LIGHT_BROWN};

  &:hover {
    background-color: ${HOVER_ITEM_COLOR};
  }
`