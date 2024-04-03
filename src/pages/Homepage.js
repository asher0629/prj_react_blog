import { useState, useEffect } from "react";
import axios, { Axios, AxiosHeaders } from "axios";
import { API_URL } from "../config/constants";

function Homepage() {
  const [postArr, setPostArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
                {postArr.map((post) => (
                  <li
                    key={post._id}
                    className="list border border-black py-3 px-6 cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <span className="listCategory text-sm">
                        {post.category}
                      </span>
                      <p className="text-sm mr-3 text-zinc-500">
                        {post.createdAt}
                      </p>
                    </div>
                    <h4 className="listTitle font-black mb-2 text-lg mt-4">
                      {post.title}
                    </h4>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        {/* list */}

        <div className="contentPage">
          <div className="w-2/3 p-20 border border-black m-auto">
            {/* <h4>{postArr[0].title}</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
