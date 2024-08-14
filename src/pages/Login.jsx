import React from "react";
import { Container, Button, Input } from "../components/index";
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
  const submitForm =async (data) => {
    // e.preventDefault()
    let promise = await LoginUser(data)
    console.log("Login : ", promise);
    dispatch(login({userData : promise , status : true}))
    console.log("login",selector.userData)
    navigate("/")
  };

  return (
    <Container bgColor={"0,0,0,0.2"}>
      <div
        className=" h-2/4 rounded-md flex items-center justify-center bg-white absolute "
        style={{ width: "40% ", top: "21%", left: "28%" }}
      >
        <div>
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
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Login;
