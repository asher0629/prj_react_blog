import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/constants";
import { useNavigate } from "react-router-dom";

function WritePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [canSave, setCanSave] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    setIsSaving(true);

    try {
      const data = {
        title: title,
        body: body,
        category: category,
      };

      const res = await axios.post(`${API_URL}/post`, data);

      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  };

  const returnPage = () => {
    if (isSaving === true) {
      navigate("/");
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
    <div className="w-full h-full pt-16">
      <form className="writePage border-2 border-black rounded w-2/3 p-5 mx-auto relative">
        <div className="writeTitle indent-2">
          <label for="writeTitle" className="font-black">
            글제목
          </label>
          <input
            type="text"
            id="writeTitle"
            className="border w-full mt-5 h-10 p-2.5 text-sm text-gray-900"
            placeholder="여기에 제목을 입력해 주세요."
            onChange={(ev) => {
              setTitle(ev.target.value);
            }}
            required
          />
        </div>
        <div className="writeCategoryWrap absolute top-3 right-5">
          <select
            name="writeCategory"
            className="writeCategory border py-1 px-3"
            onChange={(ev) => {
              setCategory(ev.target.value);
              console.log(ev.target.value);
            }}
          >
            <option value="">분류를 선택하세요</option>
            <option value="daily">일상</option>
            <option value="hobby">취미</option>
            <option value="study">공부</option>
            <option value="coding">코딩</option>
            <option value="act">기타</option>
          </select>
        </div>
        <div className="writeContent indent-2">
          <label for="writeContent" className="font-black">
            글내용
          </label>
          <textarea
            id="writeContent"
            rows="10"
            className="border w-full mt-5 p-2.5 text-sm text-gray-900"
            placeholder="여기에 내용을 입력해 주세요."
            required
            onChange={(ev) => {
              setBody(ev.target.value);
            }}
          />
        </div>
        <div className="writePageBtn flex justify-end">
          <button
            className="writeCancel bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
          <button
            disabled={!canSave}
            className="writeSave bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500 text-sm md:text-base lg:text-xl xl:text-2xl"
            onClick={handleSave}
          >
            저장
          </button>
        </div>
      </form>
    </div>
  );
}

export default WritePage;
