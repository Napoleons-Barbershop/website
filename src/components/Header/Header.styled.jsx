import styled from 'styled-components';
import {HashLink} from 'react-router-hash-link'
import { BLACK, DARK_GREEN, HEADER_BG_COLOR, HOVER_ITEM_COLOR, MAIN_COLOR, MAROON, NAPOLEON_BG, NAPOLEON_BROWN_COLOR, NAPOLEON_COMPLEMENT_COLOR, NAPOLEON_COMPLEMENT_HOVER_COLOR, WHITE } from '../../utils/colors';
import { Col, Container } from 'react-bootstrap';

export const HeaderNavArea = styled(Container)`
  margin: 0 auto;
  padding: 10px 50px;
  background-color: ${NAPOLEON_BG};
  position: fixed;
  left: 0;
  z-index: 9999;
  top: 0;
  color: #fff;
`

export const HeaderColumn = styled(Col)`
  display: flex;
  align-items: center; 
  justify-content: start;
  @media (max-width: 1070px) {
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
  padding: 1rem;
  font-size: 1.5rem;

  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const RecruitmentLink = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: ${BLACK};
  text-decoration: none;
  text-align: left;
  padding: 0.7rem 1rem;
  background-color: ${NAPOLEON_BROWN_COLOR};
  margin-right: 10px;

  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const RecruitmentLinkMobile = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: ${BLACK};
  text-decoration: none;
  text-align: left;
  padding: 1rem;
  font-size: 1.5rem;
  margin: 1rem 0;
  background-color: ${NAPOLEON_BROWN_COLOR};

  &:hover {
    color: ${WHITE};
    background-color: ${HOVER_ITEM_COLOR};
  }
`

export const BookingLink = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: ${BLACK};
  text-decoration: none;
  text-align: left;
  padding: 0.7rem 1rem;
  background-color: ${NAPOLEON_COMPLEMENT_COLOR};

  &:hover {
    color: ${WHITE};
    background-color: ${NAPOLEON_COMPLEMENT_HOVER_COLOR};
  }
`

export const BookingLinkMobile = styled(HashLink)`
  display: block;
  font-size: inherit;
  color: ${BLACK};
  text-decoration: none;
  text-align: left;
  padding: 1rem;
  font-size: 1.5rem;
  margin: 1rem 0;
  background-color: ${NAPOLEON_COMPLEMENT_COLOR};

  &:hover {
    color: ${WHITE};
    background-color: ${NAPOLEON_COMPLEMENT_HOVER_COLOR};
  }
`

export const DesktopMenuWrapper = styled.nav`
  display: block;
  @media (max-width: 1070px) {
    display: none;
  }
`

export const MobileMenuWrapper = styled.nav`
  display: none;
  @media (max-width: 1070px) {
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