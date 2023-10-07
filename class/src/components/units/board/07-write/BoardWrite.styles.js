import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export const GreenInput = styled.input`
  border-color: green;
`;