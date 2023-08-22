import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { AxiosCreatePost } from '../../../api/AxiosCreatePost.js';
import CategorySelect from '../../component/CategorySelect.jsx';
import SmallButton from '../../component/SmallButton.jsx';

const CreatePost = () => {
  const { state } = useLocation();
  console.log(state);

  const { isbn, title, authors, thumbnail } = state;

  const [postTitle, setPostTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = (e) => {
    setPostTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const navigate = useNavigate();

  const goBoardList = () => {
    navigate(`/boardlist/${isbn}`, { state: { title, isbn, authors, thumbnail } });
  };

  const [boardCategory, setBoardCategory] = useState('QUESTION'); // 초기값 설정

  const onCategoryChange = (selectedCategory) => {
    setBoardCategory(selectedCategory); // 선택한 카테고리 값을 상태로 업데이트
  };

  return (
    <BackGround>
      <Container>
        <CategoryContainer>
          <CategoryText>카테고리</CategoryText>
          <CategorySelect onCategoryChange={onCategoryChange} />
        </CategoryContainer>
        <TitleContainer>
          <TitleText>제목</TitleText>
          <TitleInput placeholder="제목을 입력해주세요." onChange={onChangeTitle} />
        </TitleContainer>
        <ContentContainer>
          <ContentText>본문</ContentText>
          <ContentInput placeholder="본문을 입력해주세요." onChange={onChangeContent} />
        </ContentContainer>
        <SmallButton
          handleClick={() => {
            AxiosCreatePost({ postTitle, content, isbn, boardCategory });
            goBoardList();
          }}
        >
          작성하기
        </SmallButton>
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
  font-size: 30px;
`;

const TitleContainer = styled.div`
  width: 770px;
  height: 110px;
`;

const TitleText = styled.p`
  font-size: 30px;
`;

const TitleInput = styled.input`
  padding: 15px;
  width: 770px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
  border-radius: 10px;
  font-size: 20px;
`;

const ContentContainer = styled.div`
  width: 770px;
  height: 314px;
`;

const ContentText = styled.p`
  font-size: 30px;
`;

const ContentInput = styled.textarea`
  resize: none;
  width: 770px;
  height: 264px;
  padding: 15px;
  font-size: 20px;
  border-radius: 20px;
  margin-bottom: 30px;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
`;
