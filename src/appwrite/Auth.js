import conf from "../conf/conf";
import { Client, Account } from "appwrite";
import { nanoid } from "@reduxjs/toolkit";
const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProject);

const account = new Account(client);

async function updateName(data) {
  const promise = await account.updateName(data.name)
  return promise
}

async function LoginUser(data) {
  let promise = await account.createEmailPasswordSession(
    data.email,
    data.password
  );
  return promise;
}
async function LogoutUser() {
  let promise = await account.deleteSessions();
  return promise;
}

async function isUserLoggedIn() {
  const user = await account.get();
  if (user.status) {
    return user;
  } else {
   return null;
  }
}
async function SignUpUser(data) {
  const email = data.email
  const password = data.password
  const name = data.name
  const promise = await account.create(nanoid(),email, password);
  const login = await LoginUser({email,password})
  const updateNameResult = await updateName({ name });
  if(login && updateNameResult){
  return promise;}
  else{
    console.log("Error In Loggin in");
    
  }
}
export { LoginUser, LogoutUser, SignUpUser };

export default isUserLoggedIn;
