import IStar from "../assets/icon/star.svg"
import IFillStar from "../assets/icon/fill_star.svg"

export const generateStar = (rating) => {
    const totStars = rating > 5 ? 5 : rating;
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= totStars) {
            stars.push(<img key={i} src={IFillStar} alt="star_image" />)
        } else {
            stars.push(<img key={i} src={IStar} alt="star_image" />)
        }
    }

    return stars;
}

const ReceiptCard = ({image, name, category, rating, color}) => {
    return ( 
        <div style={{ backgroundColor: color }} className="md:w-[259.5px] md:h-[306px] w-full h-[292px] rounded-[17px] px-[21px] py-[33px]">
            <img src={image} alt="receipt_image" className="mb-[19px]" />
            <p className="font-medium text-[26px] w-[250px]">{name}</p>
            <p className="font-medium text-[18px] text-[#8BAC3E] mb-[19px]">{category}</p>
            <div className="flex">
                {generateStar(rating)}
            </div>
        </div>
     );
}
 
export default ReceiptCard;