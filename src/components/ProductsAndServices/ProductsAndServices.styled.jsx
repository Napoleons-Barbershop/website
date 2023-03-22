import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import { NAPOLEON_BG, NAPOLEON_TEXT_COLOR, WHITE } from '../../utils/colors';

export const ProductsAndServicesContainer = styled(Container)`
  background-color: ${NAPOLEON_BG};
  color: ${WHITE};
  padding: 100px 50px 75px 50px;
`

export const ProductsAndServicesContainerTitle = styled(Container)`
  text-align: center; 
  padding-bottom: 50px;
  font-size: 1.8rem;
`

export const ProductsAndServicesStandardCutCol = styled(Col)`
  padding-bottom: 40px;
  order: 1;
  padding-right: 4px;
  @media (max-width: 768px) {
    order: 3;
    padding-right: 0px;
  }
`

export const ProductsAndServices3MonthCol = styled(Col)`
  padding-bottom: 40px;
  order: 2;
  padding-right: 4px;
  @media (max-width: 768px) {
    order: 1;
    padding-right: 0px;
  }
`

export const ProductsAndServices6MonthCol = styled(Col)`
  padding-bottom: 40px;
  order: 4;
  padding-right: 4px;
  @media (max-width: 768px) {
    order: 2;
    padding-right: 0px;
  }
`

export const ProductsAndServicesHairSpaCol = styled(Col)`
  padding-bottom: 40px;
  order: 3;
  padding-right: 4px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`

export const ProductsAndServicesShavingCol = styled(Col)`
  padding-bottom: 40px;
  padding-right: 0px;
  margin-left: 0px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`

export const ProductsAndServicesFaceMaskCol = styled(Col)`
  padding-bottom: 40px;
  padding-right: 0px;
  margin-left: 0px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`

export const ProductsAndServicesHairColouringCol = styled(Col)`
  padding-bottom: 40px;
  padding-right: 0px;
  margin-left: 0px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`

export const ProductsAndServicesShavingRow = styled(Row)`
  padding-right: 0px;
  order: 5;
  margin-left: 0px;
  padding-left: 0px;
  /* @media (max-width: 768px) {
    order: 4;
  } */
`

export const ProductsAndServicesFaceMaskRow = styled(Row)`
  padding-right: 0px;
  order: 6;
  margin-left: 0px;
  padding-left: 0px;
  /* @media (max-width: 768px) {
    order: 4;
  } */
`

export const ProductsAndServicesHairColouringRow = styled(Row)`
  padding-right: 0px;
  order: 7;
  margin-left: 0px;
  padding-left: 0px;
  /* @media (max-width: 768px) {
    order: 4;
  } */
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