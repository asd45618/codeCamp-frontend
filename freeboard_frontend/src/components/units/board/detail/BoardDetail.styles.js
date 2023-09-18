import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1602px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px 0px #00000033;
`;

export const Image2 = styled.div`
  width: 56px;
  height: 56px;
  background-color: gray;
  margin-right: 12px;
`;

export const WrapperHeader = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 80px;
  border-bottom: 1px solid #bdbdbd;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Writer = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
`;

export const Time = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: gray;
`;

export const WriterTime = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Body = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BodyTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 30px;
`;

export const BodyContents = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
