import React from "react";
import { Container, Button, Input } from "../components/index";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {SignUpUser} from "../appwrite/Auth"
import { login } from "../store/authSlice";
function SignUp() {
  const { register, handleSubmit } = useForm();
  const selector=  useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitForm =async (data) => {
    let promise = await SignUpUser(data)
    dispatch(login({userData : promise , status : true}))
    navigate("/")
  };
  return (
    <Container bgColor={"0,0,0,0.2"}>
      <div
        className=" h-4/6 rounded-md flex items-center justify-center bg-white absolute "
        style={{ width: "40% ", top: "15%", left: "30%" }}
      >
        <div>
          <form onSubmit={handleSubmit(submitForm)}>
            <h1 className="text-center font-bold hover:cursor-pointer">
             Sign Up
            </h1>
            <Input
              type="text"
              placeholder={"Enter your Name"}
              label={"Name:"}
              {...register("name", { required: true })}
            />
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
          </form>
        </div>
      </div>
    </Container>
  );
}

export default SignUp
