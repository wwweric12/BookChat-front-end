import { styled } from 'styled-components';

import CategorySelect from '../../component/CategorySelect.jsx';
import SmallButton from '../../component/SmallButton.jsx';

const CreatePost = () => {
  return (
    <BackGround>
      <Container>
        <CategoryContainer>
          <CategoryText>카테고리</CategoryText>
          <CategorySelect />
        </CategoryContainer>
        <TitleContainer>
          <TitleText>제목</TitleText>
          <TitleInput placeholder="제목을 입력해주세요."></TitleInput>
        </TitleContainer>
        <ContentContainer>
          <ContentText>본문</ContentText>
          <ContentInput placeholder="본문을 입력해주세요."></ContentInput>
        </ContentContainer>
        <SmallButton>작성하기</SmallButton>
      </Container>
    </BackGround>
  );
};

export default CreatePost;

const BackGround = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 954px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;

const CategoryContainer = styled.div`
  width: 770px;
  height: 110px;
`;

const CategoryText = styled.p`
  font-size: 35px;
`;

const TitleContainer = styled.div`
  width: 770px;
  height: 110px;
`;

const TitleText = styled.p`
  font-size: 35px;
`;

const TitleInput = styled.input`
  padding: 10px;
  width: 770px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
  border-radius: 10px;
  font-size: 20px;
`;

const ContentContainer = styled.div`
  width: 770px;
  height: 314px;
`;

const ContentText = styled.p`
  font-size: 35px;
`;

const ContentInput = styled.textarea`
  resize: none;
  width: 770px;
  height: 264px;
  padding: 10px;
  font-size: 20px;
  border-radius: 20px;
  margin-bottom: 30px;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
`;
