import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveToken, getToken } from "../utils/tokenUtils";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [canLogin, setCanLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!canLogin) {
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/user/login`, {
        email,
        password,
      });

      if (res.data === "user_not_found") {
        toast.error("가입되지 않은 이메일입니다.", {
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/register");
        }, 1500);
      } else if (res.data === "password_not_valid") {
        toast.error("비밀번호를 확인해주세요.", {
          position: "top-center",
        });
      } else {
        saveToken(res.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      email === "" ||
      email.length <= 0 ||
      email.trim() === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      password === "" ||
      password.length <= 0 ||
      password.trim() === ""
    ) {
      setCanLogin(false);
    } else {
      setCanLogin(true);
    }
  }, [email, password]);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="mt-20 p-8 w-80 min-h-96 border border-black rounded-lg flex flex-col">
        <p className="text-xl md:text-2xl font-bold">로그인</p>
        <p className="mt-8 text-xl md:text-2xl font-bold">이메일</p>
        <input
          type="text"
          className="mt-4 outline-none w-full p-4 border-2 border-black rounded-lg"
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <p className="mt-8 text-xl md:text-2xl font-bold">비밀번호</p>
        <input
          type="password"
          className="mt-4 outline-none w-full p-4 border-2 border-black rounded-lg"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button
          className="mt-8 w-full text-center outline-none border-none hover:underline"
          onClick={() => navigate("/register")}
        >
          아직 계정이 없으신가요?
        </button>
        <button
          disabled={!canLogin}
          className="mt-4 py-4 w-full bg-transparent border-2 border-black rounded-lg disabled:border-gray-500 disabled:bg-gray-500 disabled:text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={() => handleLogin()}
        >
          로그인
        </button>
      </div>
      <ToastContainer autoClose={1000} />
    </section>
  );
}
