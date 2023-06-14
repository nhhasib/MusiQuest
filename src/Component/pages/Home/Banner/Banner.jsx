
import img1 from '../../../../assets/adjusting-guitar-strings.jpg'
import img2 from '../../../../assets/education-concept.jpg'
import img3 from '../../../../assets/group-kids-spending-time-after-school-together-handsome-friends-resting-after-classes-before-start-doing-homework-modern-loft-interior-schooltime-friendship-education-togethernes.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    
    return (
        <div className='relative mb-36'>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full h-[650px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full h-[650px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full h-[650px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
            </div>
            <div className='bg-orange-500 flex gap-8 w-2/5 p-6 rounded-xl absolute right-20 top-[580px] border-white border-4'>
            <div>
                <h1 className='font-bold text-3xl'>952 +</h1>
                <p className='text-white'>Show & Concert Has Been Held By Student</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>1152 +</h1>
                <p className='text-white'>Show & Concert Has Been Held By Student</p>
            </div>
            </div>
            <div className='flex gap-4 mx-6 items-center'>
                <h1 className='text-clr-primary font-bold text-5xl'>2001</h1>
                <p>20 Years Experience <br /> <span className='font-bold text-xl'>Music School</span></p>
            </div>
        </div>
    );
};

export default Banner;