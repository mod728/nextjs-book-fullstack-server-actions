import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request){
    const token = request.cookies.get("token")?.value

    if(!token) return NextResponse.redirect(new URL("/user/login", request.url))
    
    try{
        const secretKey = new TextEncoder().encode("next-market-server-actions")
        await jwtVerify(token, secretKey)  
        return NextResponse.next()
    }catch{
        return NextResponse.redirect(new URL("/user/login", request.url))
    }
}

export const config = {
    matcher: ["/item/create", "/item/update/:path*", "/item/delete/:path*"],
}