import { NextResponse } from "next/server";


export function middleware(request: { cookies: { get: (arg0: string) => any; }; url: string | URL | undefined; }){
    let cookie = request.cookies.get('appSession');
    if(!cookie){
        
        return NextResponse.rewrite(new URL('/',request.url))
    }
    
}

export const config = {
    matcher: '/blogs',
  }