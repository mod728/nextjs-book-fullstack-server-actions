import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { jwtVerify, SignJWT } from "jose"

export const getToken = async() => {
    const cookie = await cookies()
    const token = cookie.get("token")?.value

    if(!token) return null

    const secretKey = new TextEncoder().encode("next-market-server-actions")
    const { payload } = await jwtVerify(token, secretKey)
    return payload
}

export const updateToken = async(token) => {
    const secretKey = new TextEncoder().encode("next-market-server-actions")
    const { payload } = await jwtVerify(token, secretKey)

    const newToken = await new SignJWT(payload)
                                .setProtectedHeader({alg: "HS256"})
                                .setExpirationTime("1d")
                                .sign(secretKey)

    const response = NextResponse.next()

    response.cookies.set({
        name: "token",
        value: newToken,
        maxAge: 60 * 60 * 24,
        httpOnly: true,
    })
    
    return response
}  