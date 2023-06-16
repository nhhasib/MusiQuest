
import img from "../../../../assets/header/cropped-shot-african-american-businessman-paying-with-credit-card-online.jpg";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
    const [selectedClasses] = useSelectedClasses()
    const total = selectedClasses?.reduce((sum, item) => item.price + sum, 0);
    const price=parseFloat(total?.toFixed(2))
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  
  
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { data: myPayment = [], refetch } = useQuery(
    ["myPayment", user?.email],
    async () => {
      const res = await fetch(
        `https://musi-quest-server.vercel.app/myPayment/?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    }
  )
 
  return (
    <div>
      <Helmet>
                <title>MusiQuest | Payment</title>
            </Helmet>
      <img className="blur-sm" src={img} alt="" />
      <h1 className="section-title text-center">Make Payment</h1>
      
      <Elements stripe={stripePromise}>
              <CheckOutForm price={price} selectedClasses={selectedClasses} />
      </Elements>
      <div className="my-10">
        <h1 className="font-bold text-xl text-center">Your previous payment history: {myPayment.length}</h1>
        <div className="text-center">
          {
            myPayment.map((pay, index) => 
            (<p className="my-4" key={pay._id}>{index + 1}.TransactionId: {pay.transactionId}  <br />
              Date:{pay.date} <br />
              Price:{pay.price}
            </p>)
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Payment;
