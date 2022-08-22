import styled from "styled-components";
import { background } from "@esavaner/home-station";
import Card from "components/Cards/Card";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: stretch; */
  /* justify-content: space-between; */
  flex-direction: column;
  position: relative;
  gap: 10px;
  padding: 15px;
  background: url(${background});
  background-size: 100% 100%;
`;

export const AddCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
