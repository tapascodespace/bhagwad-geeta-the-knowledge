// Redirect stub — Stripe payment flow has been replaced by Google Play Billing.
// Kept for any old bookmarked URLs.
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/library", { replace: true });
  }, [navigate]);
  return null;
};

export default PaymentSuccess;
