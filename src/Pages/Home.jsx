import Button from "../Components/Button";
import IMGSalad from "../assets/image/salad.png"
import IMGSaladRating from "../assets/image/salad_rating.png"
import Carousel from "../Components/Carousel";
import ICupcakes from "../assets/icon/cupcakes.svg"
import IPizza from "../assets/icon/pizza.svg"
import IKebab from "../assets/icon/kebab.svg"
import ISalmon from "../assets/icon/salmon.svg"
import IDoughnut from "../assets/icon/doughnut.svg"

const items = [
    { name: 'Cupcake', count: '22', image: ICupcakes, color: "#F0FEEB" },
    { name: 'Pizza', count: '25', image: IPizza, color: "#E4F2F4" },
    { name: 'Kebab', count: '12', image: IKebab, color: "#EAEEFA" },
    { name: 'Salmon', count: '22', image: ISalmon, color: "#F9EEF3" },
    { name: 'Doughnut', count: '11', image: IDoughnut, color: "#F3F7D9" },
    { name: 'Cupcake', count: '22', image: ICupcakes, color: "#F0FEEB" },
    { name: 'Pizza', count: '25', image: IPizza, color: "#E4F2F4" },
    { name: 'Kebab', count: '12', image: IKebab, color: "#EAEEFA" },
    { name: 'Salmon', count: '22', image: ISalmon, color: "#F9EEF3" },
    { name: 'Doughnut', count: '11', image: IDoughnut, color: "#F3F7D9" },
  ];

const Home = () => {
    return ( 
        <>
            <section id="jumbotron">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid pt-[86px] gap-8">
                        <p className="text-[#8BAC3E] text-[64px] font-medium leading-[64px]">Good Food Us Good Mood</p>
                        <p className="text-[#757575] text-[18px] leading-[29px] w-max-[482px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                        <div className="flex space-x-4">
                            <Button text="Daftar Sekarang" />
                            <Button text="About Us" type="secondary" />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={IMGSalad} alt="salad" width={413} height={415} className="mr-[117px] mt-[56px] ml-[72px]"/>
                            <img src={IMGSaladRating} alt="salad rating" width={292} height={93} className="absolute top-[325px] left-[-53px]"/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="category" className="mt-[65px] py-[65px]">
                <div>
                    <p className="text-[#333333] text-[38px] font-medium">Browser Our Category</p>
                    <p className="text-[#8BAC3E] text-[38px] font-medium">Receipt</p>
                </div>
                <div className="mt-[43px]">
                    <Carousel items={items} />
                </div>
            </section>
        </>
     );
}
 
export default Home;