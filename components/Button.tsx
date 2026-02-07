'use client'
const Button = ({ children, className, click }: { children: React.ReactNode, className?: string, click?: () => void }) => {
    return (
        <button onClick={click} className={`px-7 py-0.5 cursor-pointer ${className} font-poppins-bold uppercase text-[16px] tracking-wider`}>{children}</button>
    )
}

export default Button