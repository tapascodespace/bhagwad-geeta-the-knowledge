// Redirect stub — Stripe payment flow has been replaced by Google Play Billing.
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/library", { replace: true });
  }, [navigate]);
  return null;
};

export default PaymentCancelled;
