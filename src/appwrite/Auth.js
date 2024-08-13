import conf from "../conf/conf";
import {Client, Account} from "appwrite"

const client = new Client()
.setEndpoint(conf.appwriteUrl)
.setProject(conf.appwriteProject)

const account = new Account(client)

async function  LoginUser(data){
    let promise = await account.createEmailPasswordSession(data.email , data.password)
    console.log(promise)
    return promise
}

export default LoginUser