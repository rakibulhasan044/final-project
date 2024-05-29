import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";

import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'Please pay to eat'} />
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;