const Button = ({text, type}) => {
    const buttonClass = type === 'secondary' ? 'button__secondary' : 'button__primary'

    return ( 
        <div className={buttonClass}>
            {text}
        </div>
    );
}
 
export default Button;