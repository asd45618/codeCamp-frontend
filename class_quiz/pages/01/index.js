import {
  Wrapper,
  ImgDiv,
  WrapperMainDiv,
  MainText,
  MainProfile,
  Content,
  ContentText,
  ProfileName,
  FAQ,
  DivideLine,
  Q,
  QuestionDiv,
  Question,
  Footer,
  FooterText,
  FooterDiv,
} from "../../styles/emotion";

export default function MyPage() {
  return (
    <Wrapper>
      <ImgDiv>
        <img src="images/search_bar.png" />
      </ImgDiv>
      <WrapperMainDiv>
        <MainText>마이</MainText>
        <MainProfile>
          <img src="images/profile-image.png" />
          <ProfileName>임정아</ProfileName>
          <img src="/images/right.png" />
        </MainProfile>
      </WrapperMainDiv>
      <Content>
        <ContentText>공지사항</ContentText>
        <ContentText>이벤트</ContentText>
        <FAQ>FAQ</FAQ>
        <ContentText>Q&A</ContentText>
      </Content>
      <DivideLine></DivideLine>
      <Q>Q. 01</Q>
      <QuestionDiv>
        <Question>리뷰 작성은 어떻게 하나요?</Question>
        <img src="/images/down.png" />
      </QuestionDiv>
      <Q>Q. 02</Q>
      <QuestionDiv>
        <Question>리뷰 수정/삭제는 어떻게 하나요?</Question>
        <img src="/images/down.png" />
      </QuestionDiv>
      <Q>Q. 03</Q>
      <QuestionDiv>
        <Question>아이디/비밀번호를 잊어버렸어요.</Question>
        <img src="/images/down.png" />
      </QuestionDiv>
      <Q>Q. 04</Q>
      <QuestionDiv>
        <Question>회원탈퇴를 하고 싶어요.</Question>
        <img src="/images/down.png" />
      </QuestionDiv>
      <Q>Q. 05</Q>
      <QuestionDiv>
        <Question>출발지 설정은 어떻게 하나요?</Question>
        <img src="/images/down.png" />
      </QuestionDiv>
      <Q>Q. 06</Q>
      <QuestionDiv>
        <Question>비밀번호를 변경하고 싶어요.</Question>
        <img src="/images/down.png" />
      </QuestionDiv>
      <Footer>
        <FooterDiv>
          <img src="/images/home.png" />
          <FooterText>홈</FooterText>
        </FooterDiv>
        <FooterDiv>
          <img src="/images/location.png" />
          <FooterText>잇츠로드</FooterText>
        </FooterDiv>
        <FooterDiv>
          <img src="/images/heart.png" />
          <FooterText>마이찜</FooterText>
        </FooterDiv>
        <FooterDiv>
          <img src="/images/myPage.png" />
          <FooterText>마이</FooterText>
        </FooterDiv>
      </Footer>
    </Wrapper>
  );
}
