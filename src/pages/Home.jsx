import React, { useEffect, useState } from "react";
import { Container, Button } from "../components/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isUserLoggedIn from "../appwrite/Auth";
import { login } from "../store/authSlice";
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const selector = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  useEffect(() => {
    if (selector.status) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate, selector]);
  useEffect(()=> {
    async function  checkLoggin() {
    const data = await isUserLoggedIn()
    if(data){
      dispatch(login({userData : data, status: true}))
    }
  }
  checkLoggin()
  },[])
  const navigateToLogin = () => {
    console.log("button clicked");
    navigate("/login");
  };
  return (
    <Container>
      {!isLoggedIn ? (
        <>
          <div
            className="bg-cover bg-center w-full blur-sm h-full"
            style={{
              backgroundImage: "url(https://via.placeholder.com/1920x1080)",
            }}
          >
            {/* Content to show when not logged in */}
          </div>
          <div
            className=" w-1/4 h-1/4 rounded flex items-center justify-center bg-white absolute "
            style={{ top: "36%", left: "36%" }}
          >
            Login to Access Home
            <Button onClick={navigateToLogin}>Login</Button>
          </div>
        </>
      ) : (
        <div>
          {/* Content to show when logged in */}
          <h1>Welcome, you are logged in!</h1>
        </div>
      )}
    </Container>
  );
}

export default Home;
