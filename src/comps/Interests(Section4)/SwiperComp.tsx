import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../swiper-custom.css";

import { InterestImage } from "../../interfaces/interest";

interface SlideProps {
  images?: InterestImage[];
}

const SwiperComp = ({ images }: SlideProps) => {
  return (
    <div className="col-span-1 flex justify-center items-center min-h-[400px] md:h-full rounded-3xl bg-woodland-muted/50">
      <div className="w-full max-w-2xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          allowTouchMove={true}
          centeredSlides={true}
          className="h-full w-full"
          tabIndex={0}
        >
          {images?.map((image, id) => (
            <SwiperSlide key={id}>
              <figure className="flex flex-col gap-4 py-4 pb-12  space-y-4 md:space-y-8">
                <div className="w-[92%] md:w-[95%] mx-auto">
                  <div
                    id="image-container"
                    className="w-full h-48 md:h-64 flex items-center justify-center rounded-2xl"
                  >
                    <img
                      src={image.source}
                      className="h-full object-contain border border-woodland-muted rounded-2xl shadow-lg"
                      alt={image.alt}
                    ></img>
                  </div>
                </div>
                <div className="w-[92%] md:w-[70%] mx-auto bg-woodland-accent rounded-lg shadow-lg mb-4 md:mb-8">
                  <figcaption className="text-woodland-accent-text italic text-xs md:text-base text-justify  p-3">
                    {image.caption}
                  </figcaption>
                </div>
              </figure>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComp;
