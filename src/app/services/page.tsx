export default function Services() {
  return (
    <div className="bg-white min-h-screen p-10">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="font-extrabold text-4xl text-gray-800 font-serif animate-shake">Our Cleaning Services</h1>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
          <div className="mb-4">
            <img 
              src="/house-cleaning.jpg" 
              alt="House Cleaning" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
          <h2 className="font-semibold text-2xl text-gray-800 mb-4">House Cleaning</h2>
          <p className="text-gray-800 text-base">
            Our house cleaning service covers everything from dusting to deep cleaning, ensuring your home is fresh, clean, and comfortable.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
          <div className="mb-4">
            <img 
              src="/office-cleaning.jpg" 
              alt="Office Cleaning" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
          <h2 className="font-semibold text-2xl text-gray-800 mb-4">Office Cleaning</h2>
          <p className="text-gray-800 text-base">
            We offer professional office cleaning services to create a tidy and productive environment for your employees and clients.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
          <div className="mb-4">
            <img 
              src="/carpet-cleaning.jpg" 
              alt="Carpet Cleaning" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
          <h2 className="font-semibold text-2xl text-gray-800 mb-4">Carpet Cleaning</h2>
          <p className="text-gray-800 text-base">
            Our carpet cleaning service uses advanced methods to remove dirt, stains, and allergens, leaving your carpets looking and feeling fresh.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
          <div className="mb-4">
            <img 
              src="/window-cleaning.jpg" 
              alt="Window Cleaning" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
          <h2 className="font-semibold text-2xl text-gray-800 mb-4">Window Cleaning</h2>
          <p className="text-gray-800 text-base">
            Our window cleaning service ensures streak-free, crystal-clear windows, improving your view and the appearance of your home or office.
          </p>
        </div>

        {/* Service Card 5 */}
        <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
          <div className="mb-4">
            <img 
              src="/move-out-cleaning.jpg" 
              alt="Move-Out Cleaning" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
          <h2 className="font-semibold text-2xl text-gray-800 mb-4">Move-Out Cleaning</h2>
          <p className="text-gray-800 text-base">
            We offer thorough move-out cleaning services to ensure your space is spotless and ready for new tenants or homeowners.
          </p>
        </div>

        {/* Service Card 6 */}
        <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
          <div className="mb-4">
            <img 
              src="/upholstery-cleaning.jpg" 
              alt="Upholstery Cleaning" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
          <h2 className="font-semibold text-2xl text-gray-800 mb-4">Upholstery Cleaning</h2>
          <p className="text-gray-800 text-base">
            We specialize in cleaning all types of upholstery, restoring your furniture to its original condition and removing dust, dirt, and stains.
          </p>
        </div>
      </div>
    </div>
  );
}
