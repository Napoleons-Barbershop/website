import styled from 'styled-components';
import { NAPOLEON_BROWN_COLOR } from '../../utils/colors';

export const PictureButton = styled.div`
  width: 100px;
  height: 100px;
  top: 85%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  position: absolute;
`

export const CirclePictureButton = styled.div`
  position: absolute;
  top: 12%;
  left: 12%;
  bottom: 12%;
  right: 12%;
  border-radius: 100%;
  background-color: ${NAPOLEON_BROWN_COLOR};
  opacity: 0.3;
`

export const RingPictureButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  border-radius: 100%;
  border: 0.5em solid ${NAPOLEON_BROWN_COLOR};
  opacity: 0.8;
`