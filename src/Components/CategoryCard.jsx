
const CategoryCard = ({image, name, items, color}) => {
    return ( 
        <div 
            style={{ backgroundColor: color }} 
            className="w-[230px] h-[175px] flex flex-col justify-center items-center text-center duration-300 hover:h-[195px] hover:bg-cover hover:bg-center hover:bg-no-repeat"
        >
            <img src={image} alt="category_image" className="h-[52px]" />
            <p className="font-medium text-[#333333] text-[16px] mt-[21px]">{name}</p>
            <p className="text-[#333333] text-[16px] mt-1">{items} Items</p>
        </div>
    );
}
 
export default CategoryCard;