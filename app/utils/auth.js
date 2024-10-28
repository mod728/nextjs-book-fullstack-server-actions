import { cookies } from "next/headers"
import { jwtVerify } from "jose" 

export const getToken = async() => {
    const cookie = await cookies()
    const token = cookie.get("token")?.value

    if(!token) return null

    const secretKey = new TextEncoder().encode("next-market-server-actions")
    const { payload } = await jwtVerify(token, secretKey)
    return payload
}