import BadgeNav from "../Components/BadgeNav";
import Button from "../Components/Button";
import ILogo from "./../assets/icon/logo.svg"

const Navbar = () => {
    return ( 
        <nav>
            <div class="container mx-auto flex justify-between items-center py-[27px]">
                <img src={ILogo} alt="logo" className="align-self" width={207} height={50} />
                <ul class="flex space-x-8 font-medium text-[14px] ">
                    <li><a href="#" className="text-[#757575] hover:text-[#333333]">Home</a></li>
                    <li><a href="#" className="text-[#757575] hover:text-[#333333]">About</a></li>
                    <li><a href="#" className="text-[#757575] hover:text-[#333333] relative">Promotions <BadgeNav text="HOT"/></a></li>
                    <li><a href="#" className="text-[#757575] hover:text-[#333333]">Blogs</a></li>
                    <li><a href="#" className="text-[#757575] hover:text-[#333333]">Contact Us</a></li>
                </ul>
                <ul class="flex space-x-4 font-medium">
                    <li><a href="#" className="hover:text-[#757575] align-self">Masuk</a></li>
                    <li><Button text="Daftar Sekarang" /></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;