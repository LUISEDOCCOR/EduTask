import { Button } from "../common/Button.jsx"
import toast, { Toaster } from 'react-hot-toast';
import { Input } from "../form/Input.jsx";
export const LaunchForm = () => {

    const handleSubmit = async (e) => {
        const email = e.target.email.value
        e.preventDefault()
        if(!email){
            toast.error("Añade un correo")
        }else{
            const formData = new FormData(e.target)
            const response = await fetch(
                "/api/launch",{
                    method: "POST",
                    body: formData
                }
            )
            const data = await response.json()
            if(data.mode == "error"){
                 toast.error(data.msg)
            }else{
                toast.success(data.msg)
            }
            e.target.reset()
        }
    }

    return (
    <>
        <form 
            onSubmit={handleSubmit} 
            className="flex justify-center gap-2 w-full xl:w-auto"
        >
            <div className="w-96">
                <Input 
                        type="email" 
                        name="email" 
                        placeholder="Ingresa tu correo" 
                        id="name"
                />
            </div>
            <div className="w-36">
                <Button label='Unirme' isPrimary={true}/>
            </div> 
        </form>
        <Toaster/>
    </>
    )
}