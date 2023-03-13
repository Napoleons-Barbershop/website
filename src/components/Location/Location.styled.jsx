import styled from 'styled-components';

export const LocationAddress = styled.div`
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`

export const LocationImage = styled.img`
  width: 400px;
  object-fit: cover;
  align-self: start; 
  cursor: pointer;
  @media (max-width: 400px) {
    width: 300px;
  }
  @media (max-width: 300px) {
    width: 200px;
  }
`