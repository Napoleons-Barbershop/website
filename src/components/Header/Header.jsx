import React from 'react';
import { HeaderLogo, HeaderLogoImage, HeaderMenuList, HeaderNavArea, MenuItemLink, RecruitmentLink } from "./Header.styled";
import { menuItems } from '../../utils/constants'
import companyLogo from '../../assets/logo.png';
import { Col, Row } from 'react-bootstrap';


const Header = ({ fixed }) => {
  return (
    <header>
      <HeaderNavArea fluid fixed={fixed}>
        <Row>
          <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
            <HeaderLogo to="/">
              <HeaderLogoImage src={companyLogo} alt="Company Logo" />
            </HeaderLogo>
            <nav>
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
            </nav>
          </Col>
        </Row>
      </HeaderNavArea>
    </header>
  )
}

export default Header;