const Button = ({text}) => {
    return ( 
        <div className="bg-[#8BAC3E] cursor-pointer duration-300 hover:bg-[#F0FEEB] hover:text-black w-[147px] h-[42px] inline py-[10px] px-[18px] rounded-4xl text-[#FFFFFF] text-[14px]">
            {text}
        </div>
    );
}
 
export default Button;