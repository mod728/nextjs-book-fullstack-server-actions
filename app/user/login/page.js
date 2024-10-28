"use client" 
import { useActionState } from "react"
import { userLogin } from "../../actions/userLogin"

const initialState = {
    message: "",
}

const Login = () => {    
    const [state, formAction, isPending] = useActionState(userLogin, initialState)

    return (
        <div>
            <title>ログインページ</title> 
            <meta name="description" content="ログインページです"/> 
            <h1 className="page-title">ログイン</h1>
            <form action={formAction}>
                <input type="text" name="email" placeholder="メールアドレス" required/>
                <input type="text" name="password" placeholder="パスワード" required/>
                {state && <h3>{state.message}</h3>}
                <button>{isPending ? "処理中..." : "ログイン"}</button>
            </form>
        </div>
    )
}

export default Login