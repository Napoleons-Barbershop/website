import React from 'react';
import { MdArrowBack } from 'react-icons/md'
import { NAPOLEON_BG, WHITE } from '../../utils/colors';
import { useNavigate } from 'react-router-dom';


const NavBarBack = ({ route }) => {
  const navigate = useNavigate();

  const onBackPressed = () => {
    if(route) {
      navigate(route);
    } else {
      navigate('/')
    }
  }

  return (
    <header style={{backgroundColor: NAPOLEON_BG}}>
      <nav style={{padding: 20, paddingLeft: 20}}>
        <MdArrowBack onClick={onBackPressed} size={35} style={{color: WHITE , cursor: 'pointer'}} />
      </nav>
    </header>
  )
}

export default NavBarBack;