import styled from 'styled-components';

export const AboutUsCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
`

export const AboutUsTitle = styled.span`
  font-size: 1.3rem;
  height: 70px;
  @media (max-width: 768px) {
    height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    max-width: 80vw;
  }
`