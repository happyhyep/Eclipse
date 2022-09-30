import styled from "styled-components";

export const BasicInput = styled.input`
  width: ${(props) => props.width || "fit-content"};
  padding: 10px 20px;
  background-color: ${(props) => props.theme.lightBackground || "#2f2f2f"};
  border-radius: 20px;
  color: #ffffff;
`;

export const TextareaInput = styled.textarea`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height};
  padding: 10px 20px;
  background-color: ${(props) => props.theme.lightBackground || "#2f2f2f"};
  border-radius: 20px;
  color: #ffffff;
`;
