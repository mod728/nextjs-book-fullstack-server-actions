"use server"
import { redirect } from "next/navigation"
import connectDB from "../utils/database"
import { UserModel } from "../utils/schemaModels"

export const userRegister = async(formData) => {

    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    try{
        await connectDB() 
        await UserModel.create(userData) 
    }catch{
        throw new Error("エラー：ユーザー登録失敗")
    } 

    redirect("/user/login")
}