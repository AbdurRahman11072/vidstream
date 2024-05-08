/* eslint-disable @next/next/no-img-element */


"use client"

import Packages from "@/section/Packages";
import { useState } from "react";
import Faq from "../section/Faq";
import Footer from "../section/Footer";
import Review from "../section/Review";
import Navbar from "@/components/LandingNavbar/Navbar";

import ContactUs from "@/section/ContactUs";





export default function LandingPage() {
  //RAhman

// what is happning how are you?
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{ img: "https://firebasestorage.googleapis.com/v0/b/endgame-team-project.appspot.com/o/images%2Fimages%20(2).jpg?alt=media&token=216d147c-d9f4-42c2-87fd-f009ec7644f0", tags: "Room", }, { img: "https://firebasestorage.googleapis.com/v0/b/endgame-team-project.appspot.com/o/images%2Fdownload%20(6).jpg?alt=media&token=70e439ed-ab81-4778-9ae1-c8027e3487bc", tags: "Room", }, { img: "https://firebasestorage.googleapis.com/v0/b/endgame-team-project.appspot.com/o/images%2Fdownload%20(4).jpg?alt=media&token=d55724b1-bb36-4d25-8e1c-dc985c7e9de1", tags: "Room", }, { img: "https://firebasestorage.googleapis.com/v0/b/endgame-team-project.appspot.com/o/images%2Fdownload%20(5).jpg?alt=media&token=32cc381a-a2ac-4a9b-a27c-0c4cedf47372", tags: "Room", }, { img: "https://firebasestorage.googleapis.com/v0/b/endgame-team-project.appspot.com/o/images%2Fhq720.jpg?alt=media&token=78009533-95c9-4775-a7c6-b1cdee21bd5f", tags: "Room", },];
  const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
  return (




    <main className="">


      <div style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://e3.365dm.com/24/02/1600x900/skynews-pro-palestine-protest_6443321.jpg?20240203174147)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxHeight: "100vh"
      }}>
        {/* landing navbar  */}
        <Navbar></Navbar>
        <div className="  h-[100vh] px-3  flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10  max-w-[1400px] mx-auto">
          {/* <div className="bg-[#f3f9fc] w-full absolute left-0 h-[100vh] lg:h-[100vh] -z-40"></div> */}
          <div className="w-2/3 lg:w-2/4 lg:mb-16 text-center lg:text-left space-y-2 lg:space-y-5 lg:py-5 pt-16">
            <h1 className="text-lg md:text-4xl pt-4 md:pt-0 text-white lg:text-[40px] font-bold">Watch latest movies, TV shows, and more...</h1>
            <p className="text-[#616161] text-xs md:text-lg">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <div className="my-2">
            <span className="font-bold  py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white mt-5 bg-[#00b84b] z-[100000]">Explore More</span>

            </div>

          </div>
          {/* <CarouselMain /> */}
          <div className="sm:w-2/3 h-[540px] md:h-[500px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
              <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
              {/* sliders */}
              {sliders.map((slide, inx) => (
                <div key={inx}
                  className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[520px] ' : 'h-[260px] md:h-[280px] lg:h-[450px]'} min-w-[50%] bg-black/30 relative duration-200`}
                >
                  <img src={slide.img} className="w-full h-full" alt={slide.tags} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Packages></Packages>
      <Faq></Faq>
      <Review></Review>
      <ContactUs />
      <Footer></Footer>


    </main>
  );

}