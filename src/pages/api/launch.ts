import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase"; 



export const POST: APIRoute = async ({request}) => {
    //form data
    const response = await request.formData()
    const email = response.get("email")
    
    let { data, error } = await supabase 
    .from("launch")
    .insert(
        [{'email': email}]
    )
    if(error){
        return new Response (
            JSON.stringify({
                mode: "error",
                msg: "Server error"
            }), {status: 500}
        )
    }

    return new Response (
        JSON.stringify({
            mode: "success",
            msg: "Añadido a la lista de espera"
        }), { status: 200 }
    )

}