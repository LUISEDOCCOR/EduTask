type responseMode =  'success' | 'error' | 'info' 
export const createResponse = (mode:responseMode, msg:string, status:number) => {
    return new Response (
        JSON.stringify({
            'mode': mode,
            'msg': msg
        }), {status: status}
    )
}

export const createErrorResponse = (msg?:string, status?:number) => {
    return new Response (
        JSON.stringify({
            'mode': "error",
            'msg': msg ? msg : "Hubo un problema en el servidor"
        }), {status: status ? status : 500}
    )
}