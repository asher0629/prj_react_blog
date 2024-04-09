import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../config/constants";
import axios from "axios";

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState([]);
  const [canSave, setCanSave] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { listId } = useParams();

  const navigate = useNavigate();

  const getPostData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_URL}/post/${listId}`);
      setPost(res.data);
      setTitle(res.data.title);
      setCategory(res.data.category);
      setBody(res.data.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleSave = async () => {
    console.log("handle save");
    if (!canSave) return;
    setIsSaving(true);
    try {
      const data = {
        title: title,
        body: body,
        category: category,
      };

      const res = await axios.put(`${API_URL}/post/${listId}`, data);

      if (res) {
        console.log("has res");
        navigate("/");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (
      title === "" ||
      title.length <= 0 ||
      title.trim() === "" ||
      body === "" ||
      body.length <= 0 ||
      body.trim() === "" ||
      category === "" ||
      category.length <= 0 ||
      category.trim() === ""
    ) {
      setCanSave(false);
    } else {
      setCanSave(true);
    }
  }, [title, body, category]);

  return (
    <div className="w-full h-5/6 pt-16">
      <form className="editPage border-2 border-black rounded w-2/3 p-5 mx-auto relative">
        <div className="editTitle indent-2">
          <label htmlFor="editTitle" className="font-black">
            글제목
          </label>
          <input
            type="text"
            id="editTitle"
            className="border w-full mt-5 h-10 p-2.5 text-sm text-gray-900"
            value={title}
            onChange={(ev) => {
              setTitle(ev.target.value);
            }}
            required
          />
        </div>
        <div className="editCategoryWrap absolute top-3 right-5">
          <select
            name="editCategory"
            className="editCategory border py-1 px-3"
            value={category}
            key={post.category}
            onChange={(ev) => {
              setCategory(ev.target.value);
            }}
          >
            <option value="">분류를 선택하세요</option>
            <option value="일상">일상</option>
            <option value="취미">취미</option>
            <option value="공부">공부</option>
            <option value="코딩">코딩</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div className="editContent indent-2">
          <label htmlFor="editContent" className="font-black">
            글내용
          </label>
          <textarea
            id="editContent"
            rows="10"
            className="border w-full mt-5 p-2.5 text-sm text-gray-900"
            required
            value={body}
            onChange={(ev) => {
              setBody(ev.target.value);
            }}
          />
        </div>
        <div className="editPageBtn flex justify-end">
          <div
            className="editCancel bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </div>
          <div
            disabled={!canSave}
            className={`editSave font-bold py-2 px-4 rounded text-white ${
              !canSave
                ? "bg-gray-500 text-sm md:text-base "
                : "bg-blue-500 lg:text-xl"
            }`}
            onClick={handleSave}
          >
            저장
          </div>
        </div>
      </form>
    </div>
  );
}
