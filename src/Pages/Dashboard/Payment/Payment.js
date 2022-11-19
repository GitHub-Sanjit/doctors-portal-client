import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const { treatment, price, appointmentDate, slot } = booking;

  return (
    <div>
      <h3 className="text-3xl">Payment{treatment}</h3>
      <p className="text-xl">
        {" "}
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
    </div>
  );
};

export default Payment;