import React, { useState, useEffect } from "react";
import axios, { Axios, AxiosHeaders } from "axios";
import { API_URL } from "../config/constants";
import { useParams } from "react-router";

export default function ContentPage() {
  const [postArr, setPostArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { listId } = useParams();

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
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          {postArr.map((post) => {
            if (listId === post._id) {
              return (
                <div key={post._id}>
                  <p>{post.title}</p>
                  <p>{post.category}</p>
                  <p>{post.createdAt}</p>
                  <p>{post.body}</p>
                </div>
              );
            }
          })}
        </>
      )}
    </>
  );
}
