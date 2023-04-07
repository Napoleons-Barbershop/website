import React, { useState } from 'react';
import { DesktopMenuWrapper, MobileMenuWrapper, HeaderLogo, HeaderLogoImage, HeaderMenuList, HeaderNavArea, MenuItemLink, RecruitmentLink, HeaderColumn, MenuToggleInput, RecruitmentLinkMobile, MenuItemLinkMobile, BookingLink, BookingLinkMobile, LoginButton, LoginButtonMobile } from "./Header.styled";
import { menuItems, RECRUITMENT_LINK, WHATSAPP_LINK } from '../../utils/constants'
import companyLogo from '../../assets/logo.jpg';
import { Col, Row, Spinner } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { slide as Menu } from 'react-burger-menu';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithRedirect } from "firebase/auth";

import '../../App.css';
// import useFirebaseConfig from '../../hooks/firebase';
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  // const {auth} = useFirebaseConfig();
  const { setOpenLoginModal, user, loginLoading } = useLogin();
  const navigate = useNavigate();

  const handleSidebarOpen = () => {
    setOpenMobileMenu(true);
  }

  const handleSidebarClose = () => {
    setOpenMobileMenu(false);
  }

  const onWhatsappClick = () => {
    window.open(WHATSAPP_LINK, '_self')
  }

  const onRecruitmentClick = () => {
    window.open(RECRUITMENT_LINK, '_self');
  }

  const onLogin = () => {
    handleSidebarClose()
    setOpenLoginModal(true);

    // google
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     console.log('abcabc', result)
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });

    // -----------------------------------------------------------------------
    // const provider = new FacebookAuthProvider();
    // // const auth = getAuth();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     console.log('abcabc', result);

    //     // The signed-in user info.
    //     const user = result.user;

    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //     const credential = FacebookAuthProvider.credentialFromResult(result);
    //     const accessToken = credential.accessToken;

    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = FacebookAuthProvider.credentialFromError(error);

    //     // ...
    //   });


    // -----------------------------------------
    // const provider = new OAuthProvider('microsoft.com');
    // // provider.setCustomParameters({
    // //   prompt: "consent",
    // //   tenant: "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
    // // })
    // const auth = getAuth();
    // signInWithPopup(auth, provider)
    // .then((result) => {
    //   // User is signed in.
    //   // IdP data available in result.additionalUserInfo.profile.
    //   console.log('abcabc', result)
    //   // Get the OAuth access token and ID Token
    //   const credential = OAuthProvider.credentialFromResult(result);
    //   const accessToken = credential.accessToken;
    //   const idToken = credential.idToken;
    // })
    // .catch((error) => {
    //   // Handle error.
    // });


    // yahoo
    // const provider = new OAuthProvider('yahoo.com');
    // signInWithPopup(auth, provider)
    // .then((result) => {
    //   // IdP data available in result.additionalUserInfo.profile
    //   // ...
    //   console.log('abcabc', result)
    //   // Yahoo OAuth access token and ID token can be retrieved by calling:
    //   const credential = OAuthProvider.credentialFromResult(result);
    //   const accessToken = credential.accessToken;
    //   const idToken = credential.idToken;
    // })
    // .catch((error) => {
    //   // Handle error.
    // });
  }

  const onMembershipClick = () => {
    navigate('/profile')
  }

  return (
    <header>
      <HeaderNavArea fluid>
        <Row>
          <HeaderColumn>
            <HeaderLogo to="/">
              <HeaderLogoImage src={companyLogo} alt="Company Logo" />
            </HeaderLogo>
            <DesktopMenuWrapper role="navigation">
              <HeaderMenuList>
                {menuItems.map((menu) => {
                  if(menu !== 'Login') {
                    if(menu === "Booking") {
                      return (
                        <BookingLink onClick={onWhatsappClick} key={menu} to={`#${menu}`}>{menu}</BookingLink>
                      )
                    } else if(menu === "Recruitment") {
                      if(loginLoading) {
                        return (
                          <RecruitmentLink disabled key={menu}>
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                              Loading...
                            </>
                          </RecruitmentLink>
                        )
                      } else if (!loginLoading && user) {
                        return (
                          <RecruitmentLink onClick={onMembershipClick} key={menu}>
                            Membership
                          </RecruitmentLink>
                        )
                      }
                      return (
                        <RecruitmentLink onClick={onRecruitmentClick} key={menu}>{menu}</RecruitmentLink>
                      )
                    }
                    return (
                      <MenuItemLink key={menu} to={`#${menu}`}>{menu}</MenuItemLink>
                    );
                  }
                })}
              </HeaderMenuList>
            </DesktopMenuWrapper>
            <DesktopMenuWrapper>
              <LoginButton onClick={onLogin}>Login</LoginButton>
            </DesktopMenuWrapper>
            <MobileMenuWrapper role="navigation">
              <Menu 
                width="60%" 
                menuClassName="burger--menu" 
                right 
                onOpen={handleSidebarOpen} 
                onClose={handleSidebarClose} 
                isOpen={openMobileMenu} 
                customBurgerIcon={
                  <GiHamburgerMenu size={25} />
                } 
                customCrossIcon={
                  <RiCloseFill size={33} color='#fff' />
                }
              >
                {menuItems.map((menu) => {
                  if(menu === "Booking") {
                    return (
                      <BookingLinkMobile onClick={onWhatsappClick} key={menu} to={`#${menu}`}>{menu}</BookingLinkMobile>
                    )
                  } else if(menu === "Recruitment") {
                    if(loginLoading) {
                      return (
                        <RecruitmentLinkMobile disabled key={menu}>
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            Loading...
                          </>
                        </RecruitmentLinkMobile>
                      )
                    } else if (!loginLoading && user) {
                      return (
                        <RecruitmentLinkMobile onClick={onMembershipClick} key={menu}>
                          Membership
                        </RecruitmentLinkMobile>
                      )
                    }
                    return (
                      <RecruitmentLinkMobile onClick={onRecruitmentClick} key={menu}>{menu}</RecruitmentLinkMobile>
                    )
                  } else if(menu === "Login") {
                    return (
                      <LoginButtonMobile onClick={onLogin}>Login</LoginButtonMobile>
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