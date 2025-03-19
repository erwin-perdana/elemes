const BadgeNav = ({text}) => {
    return ( 
        <span class="absolute inline-flex items-center bg-[#E7462D] text-[#FFFFFF] text-[8px] font-medium px-[9px] py-[3px] rounded-full ml-2 top-[-17px] left-[49px]">
            {text}
        </span>
     );
}
 
export default BadgeNav;