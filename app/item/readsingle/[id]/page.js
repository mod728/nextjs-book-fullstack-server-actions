import Link from "next/link" 
import Image from "next/image" 
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels" 

export const itemReadSingle = async(context) => {
    const params = await context.params
    await connectDB()
    const singleItem = await ItemModel.findById(params.id)
    return singleItem
} 

const ReadSingleItem = async(context) => {
    const singleItem = await itemReadSingle(context)

    return (
        <div className="grid-container-si">
            <title>{singleItem.title}</title>
            <meta name="description" content={singleItem.description}/> 
            <div>
                <Image src={singleItem.image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>¥{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>
                <div>
                    <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
                    <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem