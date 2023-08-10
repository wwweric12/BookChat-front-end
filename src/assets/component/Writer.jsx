import { styled } from 'styled-components';

import User from '../images/User.svg';
export const Writer = ({ isBoard }) => {
  return (
    <WriterContaienr>
      <img src={User} alt="user-icon" />
      <WriterContent>
        <WriterAuthor>내이름규혁</WriterAuthor>
        <WriterDetail>
          {isBoard ?? <ViewCount>조회수</ViewCount>}
          <WriterDate>날짜</WriterDate>
        </WriterDetail>
      </WriterContent>
    </WriterContaienr>
  );
};

const WriterContaienr = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
`;

const WriterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  padding: 10px 0;
`;

const WriterAuthor = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const WriterDetail = styled.div`
  display: flex;
`;

const ViewCount = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-right: 15px;
`;

const WriterDate = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.GRAY};
`;
