import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px 0px #00000033;
`;

export const WrapperTop = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
`;

export const Top = styled.div`
  width: 486px;
`;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const HalfInput = styled.input`
  width: 100%;
  height: 52px;
  color: #bdbdbd;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const WrapperContents = styled.div`
  width: 996px;
`;

export const FullInput = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const FullInputContent = styled.input`
  width: 100%;
  height: 480px;
  margin-bottom: 40px;
  margin-top: 16px;
`;

export const PostCode = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

export const PostCodeInput = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const PostCodeButton = styled.button`
  width: 124px;
  height: 52px;
  padding: 14px 16px;
  background-color: black;
  color: white;
`;

export const PictureDiv = styled.div`
  width: 282px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const Picture = styled.div`
  width: 78px;
  height: 78px;
  background-color: gray;
`;

export const Radio = styled.input`
  margin-top: 16px;
  accent-color: #ffd600;
`;

export const RegisterButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  font-size: 16px;
  border: none;
`;
