type ButtonProps = {
    type: "button" | "submit" ;
    title: string;
    icon?: string;
    variant: string;    
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button 
        type={type}
        className={`flexCenter ${variant} gap-2.5 rounded-full border`}
    >
        {icon && <img src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button