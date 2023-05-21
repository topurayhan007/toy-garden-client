/* eslint-disable no-unused-vars */
import { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewsSection = () => {
  const customerReviews = [
    {
      id: 0,
      name: "John Smith",
      rating: 4.5,
      review:
        "The toys are of great quality and my kids love them! Highly recommended.",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=399&q=80",
    },
    {
      id: 1,
      name: "Emily Johnson",
      rating: 5.0,
      review:
        "Amazing selection of toys and excellent customer service. Will definitely shop here again.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80g",
    },
    {
      id: 2,
      name: "David Wilson",
      rating: 3.0,
      review:
        "The prices are reasonable, but the delivery took longer than expected.",
      image:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=466&q=80",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      rating: 4.0,
      review:
        "The toys arrived in perfect condition and the packaging was impressive. My children are thrilled!",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
    },
  ];

  const [reviews, setReviews] = useState(customerReviews);

  return (
    <div className="my-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl pb-6 md:pb-12 font-bold text-[#2F0743]">
          Our Customer Reviews
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-8 px-10 md:px-0">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
