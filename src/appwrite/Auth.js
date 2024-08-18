import conf from "../conf/conf";
import { Client, Account, Storage, Databases } from "appwrite";
import { nanoid } from "@reduxjs/toolkit";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProject);

const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

async function updateName(data) {
  const promise = await account.updateName(data.name);
  return promise;
}

async function LoginUser(data) {
  let promise = await account.createEmailPasswordSession(
    data.email,
    data.password
  );
  console.log(promise)
  return promise;
}
async function LogoutUser() {
  let promise = await account.deleteSessions();
  return promise;
}
async function isUserLoggedIn() {
  try {
    const user = await account.get();
    console.log(user);
    
    return user; // Return user if logged in
  } catch (error) {
    console.error("Error checking user login status:", error);
    return null; // Return null if not logged in or an error occurred
  }
}

async function SignUpUser(data) {
  const email = data.email;
  const password = data.password;
  const name = data.name;
  const promise = await account.create(nanoid(), email, password);
  const login = await LoginUser({ email, password });
  const updateNameResult = await updateName({ name });
  if (login && updateNameResult) {
    return promise;
  } else {
    console.log("Error In Loggin in");
  }
}

async function uploadImage(filename, file) {
  console.log(filename, file);
  try {
    const promise = await storage.createFile(
      conf.appwriteBucket,
      filename,
      file
    );
    console.log(promise);
    const imageUrl = storage.getFileView(conf.appwriteBucket, filename);
    console.log(imageUrl);
    return imageUrl.href;
  } catch (error) {
    console.log(error);
  }
}
async function uploadPost(title, content,email) {
  const promise = databases.createDocument(
    conf.appwriteDatabase,
    conf.appwriteCollection,
    nanoid(),
    {
      title: title,
      content: content,
      userId: email,
    }
  );
  console.log(promise);
  return promise;
}

async function allPost() {
  const promise = await databases.listDocuments(
    conf.appwriteDatabase,
    conf.appwriteCollection,
    []
  );
  console.log(promise);
  return promise;
}
async function editPost(docId, title, content) {
  try {
    const response = await databases.updateDocument(
      conf.appwriteDatabase, // Database ID
      conf.appwriteCollection, // Collection ID
      docId, // Document ID
      { title: title, content: content }, // Data to update
    );
    return response; // Optionally return the response if needed
  } catch (error) {
    console.error("Error updating document:", error);
    throw error; // Optionally rethrow the error to handle it elsewhere
  }
}

export {
  LoginUser,
  LogoutUser,
  SignUpUser,
  uploadImage,
  uploadPost,
  allPost,
  editPost,
};

export default isUserLoggedIn;
