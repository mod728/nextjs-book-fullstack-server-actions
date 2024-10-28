"use server"
import connectDB from "../utils/database"
import { ItemModel } from "../utils/schemaModels"

export const itemDelete = async(id) => {
    try{
        await connectDB() 
        await ItemModel.deleteOne({_id: id})
    }catch{
        throw new Error("エラー：アイテム削除失敗")
    }
}