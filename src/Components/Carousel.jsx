import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import CategoryCard from './CategoryCard';
import { useRef } from 'react';

const Carousel = ({items}) => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="p-4 relative mb-[30px]">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={175}
          slidesPerView={5}
          loop
          breakpoints={{
            420: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 175,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCard name={item.name} items={item.count} image={item.image} color={item.color} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='text-right md:grid grid-cols-8 hidden'>
        <div className='col-span-6'></div>
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="z-10 bg-[#8BAC3E] text-[#FFFFFF] p-2 rounded-full transition w-[113px] h-[50px] hover:bg-[#F0FEEB] hover:text-[#333333] flex items-center justify-center gap-2"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 bg-white text-[#8BAC3E] rounded-full text-xl">
            &lt;
          </span>
          PREV
        </button>

        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="z-10 bg-[#8BAC3E] text-[#FFFFFF] p-2 rounded-full transition w-[113px] h-[50px] hover:bg-[#F0FEEB] hover:text-[#333333] flex items-center justify-center gap-2"
        >
          NEXT 
          <span className="inline-flex items-center justify-center w-8 h-8 bg-white text-[#8BAC3E] rounded-full text-xl">
            &gt;
          </span>
        </button>
      </div>
    </>
  );
}
 
export default Carousel;