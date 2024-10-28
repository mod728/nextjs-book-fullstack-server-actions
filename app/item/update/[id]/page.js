import { itemReadSingle } from "../../readsingle/[id]/page"
import { itemUpdate } from "../../../actions/itemUpdate" 

const UpdateItem = async(context) => {                
    const singleItem = await itemReadSingle(context)  

    const params = await context.params
    const itemUpdateWithId = itemUpdate.bind(null, params.id) 

    return (
        <div>
            <h1>アイテム編集</h1>
            <form action={itemUpdateWithId}> 
                <input defaultValue={singleItem.title} type="text" name="title" placeholder="アイテム名" required/>
                <input defaultValue={singleItem.price} type="text" name="price" placeholder="価格" required/>
                <input defaultValue={singleItem.image} type="text" name="image" placeholder="画像" required/>
                <textarea defaultValue={singleItem.description} name="description" rows={15} placeholder="商品説明" required></textarea>
                <button>編集</button>
            </form>                        
        </div>
    )
}

export default UpdateItem