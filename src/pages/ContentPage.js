import React, { useState, useEffect } from "react";
import axios, { Axios, AxiosHeaders } from "axios";
import { API_URL } from "../config/constants";
import { useNavigate, useParams } from "react-router";
import { formatTime } from "../utils/stringUtils";

export default function ContentPage() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { listId } = useParams();

  const [deletPost, setDeletePost] = useState(false);
  const navigate = useNavigate();

  const getPostData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_URL}/post/${listId}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteData = async () => {
    try {
      const res = await axios.delete(`${API_URL}/post/${listId}`);
      alert("삭제되었습니다.");
      navigate(-1);
    } catch (error) {
      console.log(error);
    } finally {
      setDeletePost(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="w-100">
          <div key={post._id} className="w-2/3 m-auto py-10">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-black">{post.title}</h2>
                <p className="indent-1 text-gray-700">{post.category}</p>
              </div>
              <div className="text-xs text-gray-500">
                <p>작성일 {formatTime(post.createdAt)}</p>
                <p>수정일 {formatTime(post.updatedAt)}</p>
              </div>
            </div>
            <p className="border my-8 p-5 h-96 whitespace-pre">{post.body}</p>
            <div className="flex space-x-2 font-bold justify-between">
              <button
                className="border px-4 py-1 bg-gray-200	text-gray-800"
                onClick={() => {
                  navigate(-1);
                }}
              >
                뒤로
              </button>
              <div className="space-x-2">
                <button
                  className="border px-4 py-1 bg-gray-200	text-gray-800"
                  onClick={() => {
                    navigate(`/contentPage/edit/${listId}`);
                  }}
                >
                  수정
                </button>
                <button
                  className="border px-4 py-1 bg-rose-700 text-white"
                  onClick={() => {
                    window.confirm("삭제하시겠습니까?")
                      ? deleteData()
                      : alert("취소하셨습니다.");
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
