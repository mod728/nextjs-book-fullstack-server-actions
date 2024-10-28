"use server"
import connectDB from "../utils/database"
import { ItemModel } from "../utils/schemaModels"

export const itemUpdate = async(id, formData) => {

    const itemData = {
        title: formData.get("title"),
        price: formData.get("price"),
        image: formData.get("image"),
        description: formData.get("description"),
    }

    try{
        await connectDB() 
        await ItemModel.updateOne({_id: id}, itemData)
    }catch{
        throw new Error("エラー：アイテム編集失敗")
    }
}