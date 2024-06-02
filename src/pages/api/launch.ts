import { createResponse, createErrorResponse } from "../../utils/createResponse";
import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase"; 
export const prerender = false

export const POST: APIRoute = async ({request}) => {
    try{
        const formData = await request.formData()
        const email = formData.get("email")

        if(!email){
            return createResponse(
                "error",
                "Añade un correo",
                400
            )
        }

        let { data, error } = await supabase 
        .from("launch")
        .insert(
            [{'email': email}]
        )
        
        if(error){
            return createErrorResponse()
        }
        
        return createResponse(
            "success",
            "Añadido a la lista de espera",
            200
        )
    }catch(e){
        console.log(e)
        return createErrorResponse()
    }
    
}
export const GET: APIRoute = async  () => {
    try{
    let { data: launch, error } = await supabase
    .from('launch')
    .select('*')
    
    if(error) return createErrorResponse()
    
    return new Response(JSON.stringify({
        "registeredEmails": launch?.length
    }),{status: 200})

    }catch(e){
        return createErrorResponse()
    }
}