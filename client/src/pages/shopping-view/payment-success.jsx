import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <Card className="p-10 min-h-screen md:w-full sm:w-full mt-6">
      <CardHeader className="p-0 lg:w-screen">
        {/* <CardTitle className="text-xl">Payment is successful!</CardTitle> */}
      </CardHeader>
      <CardHeader className="p-0">
        <CardTitle className="text-xl">Payment is successful!</CardTitle>
      </CardHeader>
      <Button className="mt-5" onClick={() => navigate("/shop/account")}>
        View Orders
      </Button>
    </Card>
  );
}

export default PaymentSuccessPage;
