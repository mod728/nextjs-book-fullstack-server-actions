"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation" 
import connectDB from "../utils/database"
import { ItemModel } from "../utils/schemaModels"

export const itemUpdate = async(id, formData) => {

    const itemData = {
        title: formData.get("title"),
        price: formData.get("price"),
        image: formData.get("image"),
        description: formData.get("description"),
        email: formData.get("email") 
    }

    try{
        await connectDB() 
        await ItemModel.updateOne({_id: id}, itemData)
    }catch{
        throw new Error("エラー：アイテム編集失敗")
    }

    revalidatePath("/")
    redirect("/") 
}