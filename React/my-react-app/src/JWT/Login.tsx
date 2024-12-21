import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axiosIntance from "./axiosIntance";
import { useNavigate } from "react-router-dom";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  let navigate = useNavigate();
  let onSave = async (data: FormValues) => {
    console.log(data);
    try {
      let result = await axiosIntance.post("/login", data);
      localStorage.setItem("token", result.data.token);
      //sessionStorage.setItem("token", result.data.token);
      console.log(result.data);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  /*   let onSave: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }
    we can use both ways to to this  */

  return (
    <div>
      <form method="post" onSubmit={handleSubmit(onSave)}>
        <label>Username</label>
        <input
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <span>{errors.username.message}</span>}
        <br />
        <label>Password</label>
        <input
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
