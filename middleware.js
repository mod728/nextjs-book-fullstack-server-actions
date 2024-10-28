import { NextResponse } from "next/server"
import { updateToken } from "./app/utils/auth"

export async function middleware(request){
    const token = request.cookies.get("token")?.value

    if(!token) return NextResponse.redirect(new URL("/user/login", request.url))
    
    try{
        return updateToken(token)
    }catch{
        return NextResponse.redirect(new URL("/user/login", request.url))
    }
}

export const config = {
    matcher: ["/item/create", "/item/update/:path*", "/item/delete/:path*"],
}