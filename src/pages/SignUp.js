import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../config/firebase";

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const signup = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit(signup)}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="メールアドレス"
            ref={register({ required: true })}
          ></input>
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="パスワード"
            ref={register({ required: true })}
          ></input>
        </div>
        <button type="submit">登録</button>
      </form>
    </>
  );
};

export default SignUp;
