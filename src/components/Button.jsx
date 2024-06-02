export const Button = ({ label, isPrimary }) => {
    return (
        <button 
            class={`text-lg w-full h-full py-2 rounded-lg hover:opacity-50 transition-opacity ${
                isPrimary ? "bg-cWhite text-cBlack" : "bg-transparent text-cWhite border-[1px] border-cWhite"
            }`}
        >
            {label}
        </button>
    );
};

