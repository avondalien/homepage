import { initialize } from './environment'
import { type MailMessage, mailer } from './mailer'


export default {
  async fetch(request: any, env: any) {
    initialize(env)
    const url = new URL(request.url);
    
    if (url.pathname === "/api/mailer" && request.method === "POST") {
        const body = await request.json()        

        const success = await mailer(body as MailMessage)
        
        if(success){
            return Response.json({success})
        } else {
            return new Response(null, { status: 500 })
        }
        
    }
    
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;