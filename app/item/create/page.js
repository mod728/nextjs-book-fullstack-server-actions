import { itemCreate } from "../../actions/itemCreate" 
import { getToken } from "../../utils/auth" 

const CreateItem = async() => {
    const payload = await getToken() 

    return (
        <div>
            <h1 className="page-title">アイテム作成</h1>
            <form action={itemCreate}>
                <input type="text" name="title" placeholder="アイテム名" required/>
                <input type="text" name="price" placeholder="価格" required/>
                <input type="text" name="image" placeholder="画像" required/>
                <input type="hidden" name="email" value={payload.email}/> 
                <textarea name="description" rows={15} placeholder="商品説明" required></textarea>
                <button>作成</button>
            </form>
        </div>
    )
}

export default CreateItem