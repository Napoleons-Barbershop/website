import styled from 'styled-components';
import {Container, Col} from 'react-bootstrap';
import { BLACK, WHITE } from '../../utils/colors';

export const ContactUsContainer = styled(Container)`
  background-color: ${WHITE};
  color: ${BLACK};
  padding: 100px 50px;
`

export const ContactUsCol = styled(Col)`
  padding-bottom: 50px;
`

export const ContactUsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContactUsSectionTitle = styled.h2`
  padding-bottom: 10px;
  font-size: 1.8rem;
  color: inherit;
  @media (max-width: 768px) {
    padding-bottom: 0px;
  }
`

export const ContactUsSectionOpeningHoursTitle = styled.h2`
  padding-top: 50px;
  padding-bottom: 10px;
  font-size: 1.8rem;
  color: inherit;
  @media (max-width: 768px) {
    padding-bottom: 0px;
  }
`

export const ContactUsAddress = styled.div`
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`

export const ContactUsLocationImage = styled.img`
  width: 400px;
  object-fit: cover;
  align-self: start; 
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100%
  }
  /* @media (max-width: 300px) {
    width: 200px;
  } */
`