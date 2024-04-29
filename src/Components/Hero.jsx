import { FaAngleLeft,  FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
    const imgData = [
        {
            url: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg'
        },
        {
            url: 'https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg'
        },
        {
            url: 'https://www.thespruceeats.com/thmb/fau1kWhyzTAaFRSVIYuDMJ0y7Eo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blt-wrap-sandwich-479719-hero-01-57705c8c0c6b40da85e3bff657054b07.jpg'
        }
    ];

    // image slider using useState
    const [slider, setSlider] = useState(0);

    const handleSlidePlus = () => {
        setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
    };

    const handleSlideMinus = () => {
        setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
    };

   // image auto sliding using useEffect
    useEffect(() => {
        const imgSlide = setInterval(() => {
        handleSlidePlus();
    }, 2000); 

    return () => clearInterval(imgSlide);

    },[slider]);
    
    return (
        <>
            <div className="relative mt-[100px]">
                <div className=" w-[90%] mx-auto h-[100%] mb-10">
                    <img 
                    src={imgData[slider].url} 
                    alt="" 
                    className="w-full h-[80vh] 2xl object-cover rounded opacity-8" />
                </div>
                    <h1 className="absolute sm:top-[35%] top-[30%] sm:text-[40px] text-[30px] w-full text-center font-serif text-5xl text-slate-200 font-bold">Welcome to <span className="text-black">Flavour</span><span className="text-[#f0b056]">Junction</span></h1>
                     <button 
                     className="absolute 
                     sm:top-[48%] top-[45%] sm:left-[48%] left-[40%] 
                     border rounded-lg p-3 border-white 
                     font-bold text-white 
                     hover:bg-white hover:text-black" type="button">
                     Order Now</button> 
                
                    <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-5">
                    <FaAngleLeft
                    size={35} 
                    className="cursor-pointer border rounded p-2 border-black bg-white"
                    onClick={handleSlideMinus} 
                    />
                    <FaAngleRight
                    size={35} 
                    className="cursor-pointer border rounded p-2 border-black bg-white" 
                    onClick={handleSlidePlus}
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
