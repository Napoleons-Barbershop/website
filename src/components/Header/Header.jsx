import React from 'react';
import { HeaderLogo, HeaderLogoImage, HeaderMenuList, HeaderNavArea, MenuItemLink, RecruitmentLink } from "./Header.styled";
import { menuItems } from '../../utils/constants'
import companyLogo from '../../assets/logo.png';


const Header = () => {
  return (
    <header>
      <HeaderNavArea>
        <HeaderLogo to="/">
          <HeaderLogoImage src={companyLogo} alt="Company Logo" />
        </HeaderLogo>
        <nav>
          <HeaderMenuList>
            {menuItems.map((menu) => {
              if(menu === "Home") {
                return (
                  <MenuItemLink key={menu} to='/'>{menu}</MenuItemLink>
                );
              }
              if(menu === "Recruitment") {
                return (
                  <RecruitmentLink key={menu} href={`#${menu}`}>{menu}</RecruitmentLink>
                )
              }
              return (
                <MenuItemLink key={menu} to={`#${menu}`}>{menu}</MenuItemLink>
              );
            })}
          </HeaderMenuList>
        </nav>
      </HeaderNavArea>
    </header>
  )
}

export default Header;