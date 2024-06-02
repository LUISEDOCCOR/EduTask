import { Button } from "../Button.jsx"
import { useState } from "preact/hooks"

export const LaunchForm = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
    <form 
        onSubmit={(e) => {handleSubmit(e)}} 
        method="POST" 
        action="" 
        className="flex justify-center gap-2 w-full xl:w-auto"
    >
        <input 
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
            aria-label="Email" 
            placeholder="Correo" 
            className="w-96 bg-cBlack border-[1px] px-2 border-cWhite rounded-lg outline-none" 
            type="email"
            name="email"
            // required
        />
        <div className="w-36">
            <Button label='Unirme' isPrimary={true}/>
        </div> 
    </form>
    )
}