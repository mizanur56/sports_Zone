import subscribeImage from "../../assets/volleyball2.jpg";

const Subscribe = () => {
  return (
    <div
      className="min-h-screen max-w-6xl mx-auto bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${subscribeImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-100"></div>
      <div className="relative flex flex-col items-end justify-end h-full py-20 px-10  text-white space-y-4 text-right">
        <h1 className="text-xl font-medium">Want to offer regularly?</h1>
        <h1 className="text-4xl font-bold leading-snug max-w-md">
          Subscribe Our Newsletter for Daily Updates
        </h1>
        <div className="flex items-center space-x-2">
          <input
            className="bg-white rounded-lg p-3 text-gray-800"
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
