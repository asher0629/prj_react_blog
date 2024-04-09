import { useState, useEffect } from "react";
import axios, { Axios, AxiosHeaders } from "axios";
import { API_URL } from "../config/constants";
import { useNavigate } from "react-router";
import { formatTime, getShortenedString } from "../utils/stringUtils";
import ReactPaginate from "react-paginate";

function Homepage() {
  const [postArr, setPostArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const navigate = useNavigate();

  const getPostData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_URL}/post`);
      setPostArr([...res.data.rows]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="App">
      <div className="w-full h-full pb-6">
        <div className="listSection">
          <ul className="listWrap max-w-screen-xl mx-auto w-11/12 py-10 flex flex-col space-y-3">
            {isLoading ? (
              <></>
            ) : postArr.length < 0 ? (
              <h4 className="listTitle font-black mb-2 text-lg mt-4">
                포스트가 없습니다.
              </h4>
            ) : (
              <>
                {postArr
                  .slice(page * pageSize, (page + 1) * pageSize)
                  .map((post) => (
                    <li
                      key={post._id}
                      className="list border border-black py-3 px-6 cursor-pointer"
                      onClick={() => {
                        navigate("/content/" + post._id);
                      }}
                    >
                      <div className="flex justify-between">
                        <span className="listCategory text-sm">
                          {post.category}
                        </span>
                        <p className="text-sm mr-3 text-zinc-500">
                          {formatTime(post.createdAt)}
                        </p>
                      </div>
                      <h4 className="listTitle font-black mb-2 text-lg mt-4">
                        {post.title}
                      </h4>
                      <p className="">{getShortenedString(post.body, 10)}</p>
                    </li>
                  ))}
              </>
            )}
          </ul>
        </div>
        {/* list */}
        {postArr.length > 0 ? (
          <HomepagePagination
            page={page}
            pageCount={Math.ceil(postArr.length / pageSize)}
            handlePageClick={(val) => {
              setPage(val);
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function HomepagePagination({ page, pageCount, handlePageClick }) {
  return (
    <div className="w-full">
      {/* 페이지네이션 컴포넌트 */}
      <ReactPaginate
        pageCount={pageCount} // 전체 페이지 수
        pageRangeDisplayed={3} // 보여줄 페이지 범위
        marginPagesDisplayed={1} // 마진 페이지 수
        onPageChange={(val) => handlePageClick(val.selected)} // 페이지 변경 핸들러
        initialPage={page}
        activeClassName={"font-bold"}
        containerClassName="w-full flex items-center justify-center gap-2" // 현재 페이지의 클래스 이름
        previousLabel={"<"}
        nextLabel={">"}
      />
    </div>
  );
}

export default Homepage;
