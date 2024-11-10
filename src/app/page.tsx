export default function Main() {
  return (
    <div>
      {/* Background Section */}
      <div className=" flex flex-col lg:flex-row items-center justify-center bg-cover bg-center animate-bgChange max-h-[18cm] w-full p-6 sm:p-10 md:p-14 lg:p-20 border-gray-300">
        
        {/* Right Text Section */}
        <div className="mt-16 sm:mt-20 md:mt-32 flex-col items-center lg:items-end p-6 bg-opacity-50 rounded-lg mx-6 lg:mx-16 xl:mx-32 lg:ml-20 lg:mr-20 lg:order-last hidden md:block">
          
          <p className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-snug text-center lg:text-center font-serif">
            <span className="bg-orange-50 px-1 inline-block">First</span> 
            <span className="my-3 text-sky-500 inline-block">Class</span>
            <span className="bg-orange-50 px-1 inline-block">Cleaning</span>
            <br />
            <span className="text-sky-500 inline-block">Servicing</span>
          </p>

          <p className="mt-6 sm:mt-8 text-orange-50 text-base sm:text-lg md:text-xl lg:text-lg leading-snug mx-6 text-center lg:text-left">
          Shine Shine: From Dirt to Dazzle – We Provide Top-Quality Cleaning Services for a Shine That Lasts!</p>

          <div className="flex justify-center">
            <button className="mt-8 sm:mt-12 md:mt-16 bg-orange-50 border-2 border-sky-400 text-sky-400 font-bold py-2 px-8 sm:px-10 md:px-12 rounded-lg hover:bg-sky-400 hover:text-white transition-all duration-300">
              <a href="tel:+92 3282513267">Contact Us</a>
            </button>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden mt-8 flex flex-col items-center text-center md:hidden">
          <p className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-snug">
            <span className="bg-orange-50 px-1 inline-block">First</span>
            <span className="my-3 text-sky-400 inline-block">Class</span>
            <span className="bg-orange-50 px-1 inline-block">Car</span>
            <span className="text-sky-4000 inline-block">Servicing</span>
          </p>

          <p className="mt-4 sm:mt-6 text-orange-50 text-sm sm:text-lg md:text-xl leading-snug">
          Shine Shine: From Dirt to Dazzle – We Provide Top-Quality Cleaning Services for a Shine That Lasts!          </p>

          <button className="mt-6 sm:mt-8 bg-orange-50 border-2 border-sky-400 text-sky-400 font-bold py-2 px-8 sm:px-10 md:px-12 rounded-lg hover:bg-sky-400 hover:text-white transition-all duration-300">
            <a href="tel:+92 3282513267">Contact Us</a>
          </button>
        </div>

      </div>

      {/* "What We Do?" Section for larger screens */}
      <div className="mt-20 hidden md:block">
        <h1 className="font-serif text-3xl mt-10 ml-10 font-bold">What can we do?</h1>
        <p className="p-2 mr-[11cm] ml-10 mt-5">
        At Shine Shine, we offer professional cleaning services for both homes and businesses, ensuring every space sparkles and feels fresh. Our team provides a range of services including regular cleaning, deep cleaning, office cleaning, carpet care, and post-construction cleanup. Using eco-friendly products and a customer-focused approach, we tailor our services to meet your needs, delivering exceptional results with attention to detail. Let us handle the cleaning, so you can enjoy a spotless, healthy environment!
        </p>
        
        <div className="text-center mr-80 mt-10">
          <button className="p-3 bg-sky-400 border-2 border-black rounded-2xl">
            <a href="/services">Explore more →</a>
          </button>
        </div>
      </div>

      {/* Image Section for larger screens */}
      <div className="mr-10 justify-items-end mt-[-7cm] hidden lg:block">
        <img src="/do.png" alt="What we do" className="h-[8cm]" />
      </div>

      {/* "What We Do?" Section for mobile */}
      <div className="mt-20 lg:hidden md:hidden">
        <h1 className="font-serif text-3xl mt-10 font-bold mr-5 ml-5">What can we do?</h1>
        <p className="p-2 ml-5 mr-5 mt-5">
        At Shine Shine, we offer professional cleaning services for both homes and businesses, ensuring every space sparkles and feels fresh. Our team provides a range of services including regular cleaning, deep cleaning, office cleaning, carpet care, and post-construction cleanup. Using eco-friendly products and a customer-focused approach, we tailor our services to meet your needs, delivering exceptional results with attention to detail. Let us handle the cleaning, so you can enjoy a spotless, healthy environment!
        </p>

        <div className="text-center mt-5">
          <button className="p-3 bg-sky-400 border-2 border-black rounded-2xl">
            <a href="/services">Explore more →</a>
          </button>
        </div>
      </div>

      {/* Image Section for mobile */}
      <div className="lg:hidden justify-items-end mt-7">
        <img src="/do.png" alt="What we do" className="h-[6cm] mr-auto ml-auto" />
      </div>
    </div>
  );
}
