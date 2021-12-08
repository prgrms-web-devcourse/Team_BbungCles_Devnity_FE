import styled from "@emotion/styled";
import theme from "../../assets/theme";

interface Props {
  strong?: boolean;
  color?: string;
  fontSize?: string;
  style?: React.CSSProperties;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  margin: 0 auto;
  overflow-y: auto;
  height: 100%;
`;

export const Category = styled.div`
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: ${theme.colors.scarlet};
  border-radius: 7px;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 5px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const DetailContainer = styled.div`
  padding: 15px 0;
  border-top: 1px solid #f1f3f5;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;

  button {
    font-size: 18px;
    border: none;
    background-color: ${theme.colors.skyblue};
    width: 100px;
    border-radius: 4px;
    padding: 5px 3px;
  }
`;
