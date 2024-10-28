"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers" 
import { SignJWT } from "jose" 
import connectDB from "../utils/database"
import { UserModel } from "../utils/schemaModels" 

const config = {
    maxAge: 60 * 60 * 24,
    httpOnly: true,
}

export const userLogin = async(prevState, formData) => {
    
    const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
    }

    try{
        await connectDB()
        const savedUserData = await UserModel.findOne({email: userData.email}) 
        if(savedUserData){
            // ユーザーデータが存在する場合の処理
            if(userData.password === savedUserData.password){
                // パスワードが正しい場合の処理
                const secretKey = new TextEncoder().encode("next-market-server-actions")
                
                const payload = {
                    email: userData.email 
                }

                const token = await new SignJWT(payload)
                                        .setProtectedHeader({alg: "HS256"})
                                        .setExpirationTime("1d")
                                        .sign(secretKey)

                const cookie = await cookies()
                cookie.set("token", token, config) 
            }else{
                // パスワードが間違っている場合の処理
                return {message: "エラー：パスワードが間違っています"}
            }
        }else{
            // ユーザーデータが存在しない場合の処理
            return {message: "エラー：ユーザー登録をしてください"}
        }
    }catch{
        return {message: "エラー：ログイン失敗"}
    } 

    redirect("/") 
}