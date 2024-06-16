import { useState } from "react";
import "./index.css";

const Testimonials = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrIndex((currIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrIndex((currIndex + testimonials.length + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">{testimonials[currIndex].quote}</div>
      <div className="testimonials-author">
        --{testimonials[currIndex].author}
      </div>
      <testimonials className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </testimonials>
    </div>
  );
};

export default Testimonials;
