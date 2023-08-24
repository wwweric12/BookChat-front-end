import { useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { Axios } from '../../../api/Axios.js';
import { AxiosEditPost } from '../../../api/Post/AxiosEditPost.js';
import CategorySelect from '../../component/CategorySelect.jsx';
import SmallButton from '../../component/SmallButton.jsx';

const EditPost = () => {
  const { state } = useLocation();
  const imageInput = useRef();
  const navigate = useNavigate();
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(imageUrl);
  }, []);

  const { title, boardCategory: category, content: detail, isbn, id, imageUrl } = state;

  const [postTitle, setPostTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = (e) => {
    setPostTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const [boardCategory, setBoardCategory] = useState(category);

  const onCategoryChange = (selectedCategory) => {
    setBoardCategory(selectedCategory);
  };

  const saveFileImage = async (e) => {
    try {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      };
      const response = await Axios.post('/images', formData, config);
      setImage(response.data.data.imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    imageInput.current.click();
  };

  return (
    <BackGround>
      <Container>
        <CategoryContainer>
          <CategoryText>카테고리</CategoryText>
          <CategorySelect test={category} onCategoryChange={onCategoryChange} />
        </CategoryContainer>
        <TitleContainer>
          <TitleText>제목</TitleText>
          <TitleInput defaultValue={title} placeholder="제목을 입력해주세요." onChange={onChangeTitle} />
        </TitleContainer>
        <ContentContainer>
          <ContentText>본문</ContentText>
          <FileContainer>
            <FileButton onClick={handleClick}>
              <FileInput
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref={imageInput}
                onChange={saveFileImage}
              />
              이미지 업로드
            </FileButton>
            {image && <FileImg src={image} alt="img" />}
          </FileContainer>
          <ContentInput defaultValue={detail} placeholder="본문을 입력해주세요." onChange={onChangeContent} />
        </ContentContainer>
        <ButtonContainer>
          <SmallButton
            handleClick={() => {
              AxiosEditPost({ postTitle, content, isbn, boardCategory, id, imageUrl: image });
              navigate(-1);
            }}
          >
            수정하기
          </SmallButton>
        </ButtonContainer>
      </Container>
    </BackGround>
  );
};

export default EditPost;

const BackGround = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 954px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;

const CategoryContainer = styled.div`
  width: 740px;
  height: 110px;
  margin-bottom: 30px;
`;

const CategoryText = styled.p`
  font-size: 30px;
  margin-bottom: 15px;
`;

const TitleContainer = styled.div`
  width: 740px;
  height: 110px;
  margin-bottom: 30px;
`;

const TitleText = styled.p`
  font-size: 30px;
  margin-bottom: 15px;
`;

const TitleInput = styled.input`
  padding: 15px;
  width: 740px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
  border-radius: 10px;
  font-size: 20px;
`;

const ContentContainer = styled.div`
  width: 740px;
  margin-bottom: 50px;
`;

const ContentText = styled.p`
  font-size: 30px;
  margin-bottom: 15px;
`;

const ContentInput = styled.textarea`
  resize: none;
  width: 740px;
  height: 264px;
  padding: 15px;
  font-size: 20px;
  border-radius: 20px;
  margin-bottom: 30px;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  margin-right: 220px;
`;

const FileContainer = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  margin-bottom: 10px;
`;

const FileImg = styled.img`
  width: 120px;
  height: 120px;
`;
const FileButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.MINT50};
  border-radius: 10px;
  margin-right: 10px;
`;

const FileInput = styled.input`
  display: none;
`;
