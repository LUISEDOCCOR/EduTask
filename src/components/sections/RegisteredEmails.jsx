import { useEffect, useState } from "react"

export const RegisteredEmails = () =>{
    const [Emails, setEmails] = useState("")

    const fecthData = async () => {
        const response = await fetch("/api/launch")
        const  { registeredEmails } = await response.json()
        setEmails(registeredEmails)
    }

    useEffect(() => {
        fecthData()
    },[])

    return (
        <h5 className="text-sm">Suscríbete para recibir una notificación cuando lancemos. 
            {Emails && ` Actualmente hay ${Emails} personas registradas`}    
        </h5>
    )
}