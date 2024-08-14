import conf from "../conf/conf";
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProject);

const account = new Account(client);

async function LoginUser(data) {
  let promise = await account.createEmailPasswordSession(
    data.email,
    data.password
  );
  console.log("appWrite", promise);
  return promise;
}
async function LogoutUser() {
  let promise = await account.deleteSessions();
  console.log(promise);
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
  const promise = await account.create(data.name, data.email, data.password);

  return promise;
}
export { LoginUser, LogoutUser, SignUpUser };

export default isUserLoggedIn;
