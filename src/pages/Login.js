import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../config/firebase";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../AuthService";

const Login = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const user = useContext(AuthContext);
  if (user) {
    return <Redirect to={"/"} />;
  }
  const login = (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>ログイン画面</h1>
      <form onSubmit={handleSubmit(login)}>
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
        <button type="submit">ログイン</button>
      </form>
    </>
  );
};

export default Login;
