const HeroBanner = ({ bgImage, title }) => {
  return (
    <div
      className="min-h-screen bg-cover relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-white text-center max-w-md px-4">
        <h1 className="mb-5 text-5xl border-b-8 border-teal-700 pb-2 font-bold">
          {title}
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-6 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
