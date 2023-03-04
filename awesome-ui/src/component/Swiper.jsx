import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const AppSwiper = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect="fade"
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperButtonNext>Slide</SwiperButtonNext>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>

            </Swiper>

        </div>
    )
}


const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

export default AppSwiper