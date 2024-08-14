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
  const user = await account.get()
  console.log("user is logged in :" , user)
  return user
}
export { LoginUser, LogoutUser };

export default isUserLoggedIn;
