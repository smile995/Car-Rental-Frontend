import Marquee from "react-fast-marquee";
import { testimonials } from "../../../../../../public/DummyData/Reviews";
import ReviewCard from "../shared/ReviewCard";
import Title from "../shared/Title";

const ReviewComponent = () => {
  return (
    <div>
      <Title
        heading="What Our Customers Say"
        subheading="Real feedback from happy customers who found their perfect car with us."
      />
      <div className="my-10">
        <Marquee >
          {testimonials.map((testimonial) => (
            <ReviewCard key={testimonial._id} review={testimonial}></ReviewCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ReviewComponent;
