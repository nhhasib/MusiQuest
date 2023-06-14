
import img from "../../../../assets/header/cropped-shot-african-american-businessman-paying-with-credit-card-online.jpg";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";

const Payment = () => {
    const [selectedClasses] = useSelectedClasses()
    const total = selectedClasses?.reduce((sum, item) => item.price + sum, 0);
    const price=parseFloat(total.toFixed(2))
    const stripePromise = loadStripe('pk_test_51NIumhEQ8v7jOQAgmoBSxD2bnZ4fVEJVkSL7T4yTiLeIWHepGCvKQ150BtKjpaRL7MfbOjcbK8ogfoTLljdpE1J300M7IhcOpl');
  return (
    <div>
      <img className="blur-sm" src={img} alt="" />
      <h1 className="section-title text-center">Make Payment</h1>
      <Elements stripe={stripePromise}>
              <CheckOutForm price={price} selectedClasses={selectedClasses} />
      </Elements>
    </div>
  );
};

export default Payment;
