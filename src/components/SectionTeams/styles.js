import styled from "styled-components";
import { device } from '../../utils/media';

export const Section = styled.section`
  padding: 10px;
  background-color: ${props => props.backgroundSection};
`
export const TimeTitle = styled.h3`
  color: #212121;
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  border-bottom: 4px solid;
  border-color: ${props => props.borderTitle};
  display: inline-block;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  overflow-x: auto;

  @media ${device.tablet} {
    flex-direction: row;
  }
`