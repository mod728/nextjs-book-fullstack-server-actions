import { userRegister } from "../../actions/userRegister" 

const Register = () => {
    return (
        <div>
            <title>登録ページ</title> 
            <meta name="description" content="登録ページです"/> 
            <h1 className="page-title">ユーザー登録</h1>
            <form action={userRegister}>
                <input type="text" name="name" placeholder="名前" required/> 
                <input type="text" name="email" placeholder="メールアドレス" required/>
                <input type="text" name="password" placeholder="パスワード" required/>
                <button>登録</button>
            </form> 
        </div>
    )
}

export default Register