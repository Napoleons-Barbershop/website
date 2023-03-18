import React from 'react';
import {RiWhatsappFill} from 'react-icons/ri';
import WhatsappIcon from '../../assets/whatsapp-icon.png';
import { WHATSAPP_LINK } from '../../utils/constants';

const WhatsappFloatingButton = () => {
  const onWhatsappClick = () => {
    window.open(WHATSAPP_LINK, '_self')
  }
  return (
    <img loading='lazy' onClick={onWhatsappClick} src={WhatsappIcon} alt="Whatsapp" style={{width: 50, position: 'fixed', right: 20, bottom: 20, cursor: 'pointer'}} />
  )
}

export default WhatsappFloatingButton