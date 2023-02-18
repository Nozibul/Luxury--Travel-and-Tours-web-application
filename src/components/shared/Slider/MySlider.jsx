import Slider from "react-slick";
import Card from "../card/Card"
import NextSlide from "./nextSlide/NextSlide";
import PrevSlide from "./prevSlide/PrevSlide";


let settings = {
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextSlide />,
  prevArrow: <PrevSlide />,
  responsive: [
    {
      breakpoint: 1284,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  
};


const MySlider = ({sliders}) => {

  return ( 
     <div className="relative items-center mt-20">
      <Slider {...settings}>
      { sliders?.map((slider)=> <Card key={slider.id} card={slider} />)}
      </Slider> 
     </div>
   
  )
}

export default MySlider