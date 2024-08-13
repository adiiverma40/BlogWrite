import React from "react";
import { Container, Button, Input } from "../components/index";
import { useForm } from "react-hook-form";
import LoginUser from "../appwrite/Auth";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const submitForm = (data) => {
    // e.preventDefault()
    let promise = LoginUser(data)
    navigate("/")
    console.log(data , promise);
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
