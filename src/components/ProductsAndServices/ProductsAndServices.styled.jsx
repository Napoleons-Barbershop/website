import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import { NAPOLEON_BG, NAPOLEON_TEXT_COLOR, WHITE } from '../../utils/colors';

export const ProductsAndServicesContainer = styled(Container)`
  background-color: ${NAPOLEON_BG};
  color: ${WHITE};
  padding: 165px 50px 75px 50px;
`

export const ProductsAndServicesContainerTitle = styled(Container)`
  text-align: center; 
  padding-bottom: 50px;
  font-size: 1.8rem;
`

export const ProductsAndServicesProductWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ProductsAndServicesProductTitle = styled.h4`
  color: ${NAPOLEON_TEXT_COLOR};
  font-size: 1.5rem;
  margin-bottom: 0px;
`

export const ProductsAndServicesProductPrice = styled.h4`
  color: ${NAPOLEON_TEXT_COLOR};
  font-size: 1.5rem;
  margin-bottom: 0px;
`

export const ProductsAndServicesProductDescription = styled.h4`
  font-size: 0.75rem;
`