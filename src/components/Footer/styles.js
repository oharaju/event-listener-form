import styled from "styled-components";
import { device } from '../../utils/media';

export const Container = styled.div`
  background-color: #6278F7;
  padding: 80px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
    
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`

export const Social = styled.div`
  display: flex;
  gap: 24px;
`

export const Dev = styled.p`
  color: white;
  font-size: 16px;
  white-space: nowrap;
`