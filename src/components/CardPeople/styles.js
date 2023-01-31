import styled from "styled-components";

export const CardPeoples = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 382px;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  position: relative;

  &:before {
    content: "";
    background-color: #1d1db1;
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    bottom: 50%;
    transform: translateX(-25%);
  }
`;

export const Image = styled.img`
  width: 120px;
  border-radius: 50%;
  position: relative;
`
