import styled from "styled-components";

export const CardPeoples = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0 0 40px;
  width: 382px;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  position: relative;
  background-color: ${props => props.background};
`;

export const Image = styled.img`
  width: 120px;
  border-radius: 50%;
  padding: 20px;
`
