import Category from "@/ui/home/Category";
import Jumbotron from "@/ui/home/Jumbotron";
import KeySelling from "@/ui/home/KeySelling";
import Recommendation from "@/ui/home/Recommendation";

const page = () => {
  return (
    <div className="container mx-auto mt-18">
      <Jumbotron />
      <KeySelling />
      <Category />
      <Recommendation />
    </div>
  );
};

export default page;
