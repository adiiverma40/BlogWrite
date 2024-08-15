import React, { useState } from "react";
import { Container, Button, Input ,Loading } from "../components/index";
import { useForm } from "react-hook-form";
import {LoginUser} from "../appwrite/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
function Login() {
  const { register, handleSubmit } = useForm();
  const selector=  useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitForm = async (data) => {
    dispatch(login({ isDataLoaded: true }));
    try {
      let promise = await LoginUser(data);
      if (promise) {
        dispatch(login({ userData: promise, status: true, isDataLoaded: false }));
        navigate("/");
      }
    } catch (error) {
      dispatch(login({ isDataLoaded: false }));
      console.error("Login failed", error);
    }
  };
  
  return (
    <Container bgColor={"0,0,0,0.2"}>
      <div
        className=" h-2/4 rounded-md flex items-center justify-center bg-white absolute "
        style={{ width: "40% ", top: "21%", left: "28%" }}
      >
        <div>
          { !selector.isDataLoaded ? (
          <form onSubmit={handleSubmit(submitForm)}>
            <h1 className="text-center font-bold hover:cursor-pointer">
              Login
            </h1>
            <Input
              type="email"
              placeholder={"Email"}
              label={"Email"}
              {...register("email", { required: true })}
            />
            <Input
              type="password"
              placeholder={"Password"}
              label={"Password"}
              {...register("password", { required: true })}
            />
            <Button type="submit">Login</Button>
          </form>) : (  <Loading loading={selector.isDataLoaded} />)
          }
        </div>
        <div>
      
</div>

      </div>
    </Container>
  );
}

export default Login;
