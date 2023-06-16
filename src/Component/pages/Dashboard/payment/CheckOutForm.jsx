import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { key } from "localforage";

const CheckOutForm = ({ price, selectedClasses }) => {
  const stripe = useStripe();
  const { user } = useContext(AuthContext);
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      
      setCardError(error.message);
    } else {
      setCardError("");
      
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError)
    }
    setProcessing(false);
    if (paymentIntent?.status == "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: selectedClasses.length,
        enrolledClassId: selectedClasses.map((item) => item._id),
        enrolledClassCourseId: selectedClasses.map((item) => item.courseId),
        classNames: selectedClasses.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your payment successfully completed",
            showConfirmButton: false,
            timer: 1500,
          });
          {
            selectedClasses?.map((cls) => {
              const availableRemaining = cls.available - 1;
              const enrolledtotal = cls.enrolled + 1;
              const update = {
                available: availableRemaining,
                enrolled: enrolledtotal,
              };
              fetch(
                `https://musi-quest-server.vercel.app/classes/enrolled/${cls.courseId}`,
                {
                  method: "PATCH",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(update),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  if (data.modifiedCount > 0) {
                    const {
                      courseId,
                      name,
                      instructor,
                      price,
                      available,
                      image,
                      enrolled,
                    } = cls;
                    const enrolledItem = {
                      courseId,
                      name,
                      image,
                      price,
                      instructor,
                      email: user.email,
                      available,
                      enrolled,
                    };

                    fetch(
                      "https://musi-quest-server.vercel.app/classes/enrolled",
                      {
                        method: "POST",
                        headers: {
                          "content-type": "application/json",
                        },
                        body: JSON.stringify(enrolledItem),
                      }
                    );
                  }
                });
            });
          }
        }
      });
    }
  };

  return (
    <>
      <form className="m-8 w-4/5 bg-slate-200 p-4 rounded-xl mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-6 button text-center"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 text-center">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
