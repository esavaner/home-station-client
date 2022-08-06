import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LocationWrap = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: rgba(242, 104, 94, 0.89);
  svg {
    position: relative;
    top: 5px;
  }
`;

export const CurrentWrap = styled.span``;

export const Data = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Temp = styled.span`
  font-size: 20px;
`;

export const Description = styled.span``;

export const Image = styled.img`
  width: 50px;
`;
