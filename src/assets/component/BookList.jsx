import { styled } from 'styled-components';

import GoChatGoBoard from './GoChatGoBoard.jsx';

const BookList = ({ data, isSearch }) => {
  const { isbn, title, authors, thumbnail } = data;

  const MOVE_DATA = [
    {
      title,
      authors,
      thumbnail,
      isbn,
      text: 'Go Chat',
      move: 'chat',
    },
    {
      title,
      authors,
      thumbnail,
      isbn,
      text: 'Go Board',
      move: 'boardlist',
    },
  ];
  return (
    <Container>
      <BookImg src={thumbnail} alt="책 이미지" />
      <BookDetailBox>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>저자: {authors?.toLocaleString()}</BookAuthor>
        <BookIsbn>ISBN: {isbn}</BookIsbn>
      </BookDetailBox>
      {isSearch && (
        <GoBox>
          {MOVE_DATA.map((item) => (
            <GoChatGoBoard data={item} />
          ))}
        </GoBox>
      )}
    </Container>
  );
};

export default BookList;

const Container = styled.div`
  display: flex;
  width: 900px;
  height: 160px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.BLACK};
`;

const BookImg = styled.img`
  width: 130px;
  height: 130px;
`;

const BookDetailBox = styled.div`
  margin-left: 34px;
  width: 914px;
  height: 160px;
`;

const BookTitle = styled.p`
  font-size: 25px;
  height: 60px;
  line-height: 30px;
  margin-top: 20px;
`;

const BookAuthor = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY2};
  height: 40px;
  line-height: 60px;
`;

const BookIsbn = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const GoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 180px;
  margin-right: 30px;
`;
