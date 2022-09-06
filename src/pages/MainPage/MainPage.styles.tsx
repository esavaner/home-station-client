import styled from "styled-components";
import { background } from "@esavaner/home-station";
import Card from "components/Cards/Card";

export const Main = styled.main`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  background: url(${background});
  background-size: 100% 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  max-width: 1000px;
`;

export const AddCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: auto;
`;
