import Button from "../Components/Button";
import IMGSalad from "../assets/image/salad.png"
import IMGSaladRating from "../assets/image/salad_rating.png"

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

        </>
     );
}
 
export default Home;