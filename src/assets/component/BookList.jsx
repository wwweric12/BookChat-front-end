import { styled } from 'styled-components';

import Arrow from '../images/RightArrow.svg';

import GoChatGoBoard from './GoChatGoBoard.jsx';

const MOVE_DATA = [
  {
    text: 'Go Chat',
    img: Arrow,
    move: 'chat',
  },
  {
    text: 'Go Board',
    img: Arrow,
    move: 'board',
  },
];

const BookList = ({ data }) => {
  const { img, title, author } = data;

  return (
    <Container>
      <BookImg src={img} alt="책 이미지" />
      <BookDetailBox>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
      </BookDetailBox>
      <GoBox>
        {MOVE_DATA.map((item) => (
          <GoChatGoBoard data={item} />
        ))}
      </GoBox>
    </Container>
  );
};

export default BookList;

const Container = styled.div`
  display: flex;
  width: 1148px;
  height: 220px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.BLACK};
`;

const BookImg = styled.img`
  width: 150px;
  height: 180px;
`;

const BookDetailBox = styled.div`
  margin-left: 34px;
  width: 914px;
  height: 180px;
`;

const BookTitle = styled.p`
  font-size: 35px;
  height: 90px;
  line-height: 90px;
`;

const BookAuthor = styled.p`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.GRAY2};
  height: 90px;
  line-height: 90px;
`;

const GoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 180px;
  margin-right: 30px;
`;
