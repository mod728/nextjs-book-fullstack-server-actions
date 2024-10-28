import { itemReadSingle } from "../../readsingle/[id]/page"
import { itemUpdate } from "../../../actions/itemUpdate" 
import { getToken } from "../../../utils/auth"

const UpdateItem = async(context) => {                
    const singleItem = await itemReadSingle(context)  

    const params = await context.params
    const itemUpdateWithId = itemUpdate.bind(null, params.id) 

    const payload = await getToken() 

    if(singleItem.email === payload.email){  
        return (
            <div>
                <title>編集ページ</title>     
                <meta name="description" content="編集ページです"/>
                <h1 className="page-title">アイテム編集</h1>
                <form action={itemUpdateWithId}> 
                    <input defaultValue={singleItem.title} type="text" name="title" placeholder="アイテム名" required/>
                    <input defaultValue={singleItem.price} type="text" name="price" placeholder="価格" required/>
                    <input defaultValue={singleItem.image} type="text" name="image" placeholder="画像" required/>
                    <input defaultValue={singleItem.email} type="hidden" name="email"/>
                    <textarea defaultValue={singleItem.description} name="description" rows={15} placeholder="商品説明" required></textarea>
                    <button>編集</button>
                </form>                        
            </div>
        )
    }else{                                                
        return <h1>権限がありません</h1> 
    }  
}

export default UpdateItem