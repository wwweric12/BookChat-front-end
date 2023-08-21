import Pagination from 'react-js-pagination';
import { styled } from 'styled-components';

/*
activePage : 현재 페이지
itemsCountPerPage : 한 페이지 당 보여줄 책 개수
totalItemsCount : 총 아이템 수
pageRangeDisplayed : paginator에서 보여줄 페이지 범위
예를 들어, pageRangeDisplayed를 5로 설정한 경우, 현재 페이지를 기준으로 앞뒤로 총 5개의 페이지 버튼이 보여짐.
prevPageText : 이전 페이지로 가기를 나타내는 텍스트
nextPageText : 다음 페이지로 가기를 나타내는 텍스트
*/

const Paging = ({ page, count, setPage }) => {
  return (
    <StyledPagination>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={setPage}
      />
    </StyledPagination>
  );
};

export default Paging;

const StyledPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
  }

  ul.pagination li {
    display: inline-block;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.BROWN100};
  }

  ul.pagination li.active a {
    color: ${({ theme }) => theme.colors.WHITE};
  }

  ul.pagination li.active {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.MINT100};
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: ${({ theme }) => theme.colors.BROWN100};
  }
`;
