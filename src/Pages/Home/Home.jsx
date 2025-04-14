import Banner from "../Banner/Banner";
import Category from "../Ui/Category";
import Featured from "../Ui/Featured/Featured";
import Service from "../Ui/Service";
import Subscribe from "../Ui/Subscribe";
import Testimonial from "../Ui/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Category />
      <Testimonial />
      <Featured />
      <Subscribe />
    </div>
  );
};

export default Home;
