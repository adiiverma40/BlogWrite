import React, { useEffect, useState } from "react";
import { Container, Button } from "../components/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isUserLoggedIn from "../appwrite/Auth";
import { login } from "../store/authSlice";
import {Card , Loading} from "../components/index"
import AllPost from "./AllPost";
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const selector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userData = selector.userData;
  const [userName , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [registrationDate , setRegistrationDate] = useState('')
  const [status, setStatus] = useState()
   useEffect(() => { 
    if (selector.status) {
      setIsLoggedIn(true);
      setUsername(selector.userData.name)
      setEmail(selector.userData.email)
      setRegistrationDate(selector.userData.registration
      )
      setStatus(selector.userData.status)
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate, selector]);
  useEffect(() => {
    async function checkLoggin() {
      const data = await isUserLoggedIn();
      if (data) {
        dispatch(login({ userData: data, status: true }));
      }
    }
    checkLoggin();
  }, []);
  const navigateToLogin = () => {
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
        <div className="flex justify-center items-center "style={{height:"93vh" , width:"98.5vw"}} >
          <div className="left w-full " style={{height:"93vh"}}> 
            <AllPost/>
          </div>
          <div className="right  w-auto " style={{height:"93vh"}}>
            <Card className="mx-4 mt-4"
            name={userName} email={email}  registrationDate={registrationDate} status={status}     />
          </div>
   
        </div>
      )}
    </Container>
  );
}

export default Home;
