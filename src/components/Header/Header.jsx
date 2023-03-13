import React, { useState } from 'react';
import { DesktopMenuWrapper, MobileMenuWrapper, HeaderLogo, HeaderLogoImage, HeaderMenuList, HeaderNavArea, MenuItemLink, RecruitmentLink, HeaderColumn, MenuToggleInput, RecruitmentLinkMobile, MenuItemLinkMobile } from "./Header.styled";
import { menuItems } from '../../utils/constants'
import companyLogo from '../../assets/logo.png';
import { Col, Row } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { slide as Menu } from 'react-burger-menu';

import '../../App.css';

const Header = ({ fixed }) => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleOpen = () => {
    setOpenMobileMenu(true);
  }

  const handleClose = () => {
    setOpenMobileMenu(false);
  }

  return (
    <header>
      <HeaderNavArea fluid fixed={fixed}>
        <Row>
          <HeaderColumn>
            <HeaderLogo to="/">
              <HeaderLogoImage src={companyLogo} alt="Company Logo" />
            </HeaderLogo>
            <DesktopMenuWrapper role="navigation">
              <HeaderMenuList>
                {menuItems.map((menu) => {
                  if(menu === "Recruitment") {
                    return (
                      <RecruitmentLink key={menu} to={`#${menu}`}>{menu}</RecruitmentLink>
                    )
                  }
                  return (
                    <MenuItemLink key={menu} to={`#${menu}`}>{menu}</MenuItemLink>
                  );
                })}
              </HeaderMenuList>
            </DesktopMenuWrapper>
            <MobileMenuWrapper role="navigation">
              <Menu width="15rem" menuClassName="burger--menu" right onOpen={handleOpen} onClose={handleClose} isOpen={openMobileMenu} customBurgerIcon={<GiHamburgerMenu size={25} />} customCrossIcon={<RiCloseFill size={33} color='#fff' />}>
                {menuItems.map((menu) => {
                  if(menu === "Recruitment") {
                    return (
                      <RecruitmentLinkMobile key={menu} to={`#${menu}`}>{menu}</RecruitmentLinkMobile>
                    )
                  }
                  return (
                    <MenuItemLinkMobile key={menu} to={`#${menu}`}>{menu}</MenuItemLinkMobile>
                  );
                })}
              </Menu>
            </MobileMenuWrapper>
          </HeaderColumn>
        </Row>
      </HeaderNavArea>
    </header>
  )
}

export default Header;