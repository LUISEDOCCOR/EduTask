export const Input = ({type, placeholder, name, id}) => {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        className="px-6 py-4 bg-cBlack border-[1px] border-cWhite 
        rounded-lg outline-none w-full max-w-2xl" 
        aria-label={name}
        required
    />
    )
}