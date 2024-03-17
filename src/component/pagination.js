import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination () {

    const [currentPage, setCurrentPage] = useState(0);

  // 페이지 변경 핸들러
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // 여기서는 페이지 변경에 따른 데이터 로드 등의 로직을 추가할 수 있습니다.
  };

  return (
    <div>
      {/* 페이지네이션 컴포넌트 */}
      <ReactPaginate
        pageCount={10} // 전체 페이지 수
        pageRangeDisplayed={3} // 보여줄 페이지 범위
        marginPagesDisplayed={1} // 마진 페이지 수
        onPageChange={handlePageChange} // 페이지 변경 핸들러
        containerClassName={'pagination'} // 페이지네이션을 감싸는 div의 클래스 이름
        activeClassName={'active'} // 현재 페이지의 클래스 이름
        previousLabel = {'<'}
        nextLabel = {'>'}
      />
    </div>
  );
}

export default Pagination;