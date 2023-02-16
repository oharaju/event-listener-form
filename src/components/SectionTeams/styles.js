import styled from "styled-components";

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
  justify-content: center;
  gap: 30px;
`