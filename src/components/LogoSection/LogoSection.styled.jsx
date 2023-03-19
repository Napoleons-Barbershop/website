import styled from 'styled-components';

export const CarouselImage = styled.img`
  height: 700px;
  width: 100%; 
  object-fit: cover;

  @media (max-width: 800px) {
    height: 350px;
  }
`