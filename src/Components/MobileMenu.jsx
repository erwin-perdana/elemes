import IMenu from "../assets/icon/menu.svg"

const MobileMenu = ({text}) => {
    return ( 
        <div className="flex flex-col items-center justify-center">
            <img src={IMenu} alt="menu" />
            <p className="text-[14px] text-[#757575] mt-2">{text}</p>
        </div>
     );
}
 
export default MobileMenu;