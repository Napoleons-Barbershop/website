import styled from 'styled-components';
import {HashLink} from 'react-router-hash-link'
import { BLACK, DARK_GREEN, HEADER_BG_COLOR, HOVER_ITEM_COLOR, MAIN_COLOR, MAROON, WHITE } from '../../utils/colors';
import { Col, Container } from 'react-bootstrap';

export const HeaderNavArea = styled(Container)`
  margin: 0 auto;
  padding: 10px 50px;
  background-color: ${({fixed}) => fixed ? BLACK : HEADER_BG_COLOR};
  position: ${({fixed}) => fixed ? 'fixed' : 'absolute'};
  left: 0;
  z-index: ${({fixed}) => fixed ? 9999 : 3};
  top: ${({fixed}) => fixed ? 0 : '10px'};
  color: #fff;
`

export const HeaderColumn = styled(Col)`
  display: flex;
  align-items: center; 
  justify-content: start;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
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
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const MenuItemLinkMobile = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  text-align: left;
  padding: 0.3rem;

  &:hover {
    color: ${WHITE};
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
  background-color: ${MAROON};

  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const RecruitmentLinkMobile = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  text-align: left;
  padding: 0.3rem;
  background-color: ${MAROON};

  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const DesktopMenuWrapper = styled.nav`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`

export const MobileMenuWrapper = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const MenuToggleInput = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
`