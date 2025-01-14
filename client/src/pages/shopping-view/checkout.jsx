import Address from "@/components/shopping-view/address";
// import img from "../../assets/account.jpg";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createNewOrder } from "@/store/shop/order-slice";
import { useToast } from "@/hooks/use-toast";
import { CardHeader, CardTitle } from "@/components/ui/card";
// import { Navigate } from "react-router-dom";
// import { useToast } from "@/components/ui/use-toast";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isPaymentStart, setIsPaymentStart] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const totalCartAmount =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  // console.log(cartItems, "cartItems");
  // console.log(currentSelectedAddress, "currentSelectedAddress");

  function handleInitiatePaypalPayment() {
    if (cartItems.length === 0) {
      toast({
        title: "Your cart is empty! Please add items to proceed.",
        variant: "destructive",
      });

      return;
    }
    if (currentSelectedAddress === null) {
      toast({
        title: "Please, select one address to proceed.",
        variant: "destructive",
      });

      return;
    }

    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price:
          singleCartItem?.salePrice > 0
            ? singleCartItem?.salePrice
            : singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };

    dispatch(createNewOrder(orderData)).then((data) => {
      console.log(data, "jose");
      if (data?.payload?.success) {
        setIsPaymentStart(true);
        console.log("setIsPaymentStart(true)");
      } else {
        setIsPaymentStart(false);
        console.log("setIsPaymentStart(false)");
      }
    });
  }

  if (approvalURL) {
    window.location.href = approvalURL;
  }

  // if (response.data.success) {
  //   window.location.href = response.data.approvalURL;
  // }

  // useEffect(() => {
  //   if (approvalURL) {
  //     console.log(approvalURL, "approvalURL");
  //     window.location.href = approvalURL; // Redirect
  //     console.log(window.location.href, "window.location.href ");
  //   }
  // }, [approvalURL]); // Only run when approvalURL changes

  return (
    <div className="flex flex-col">
      <div className="relative h-[50px] w-full overflow-hidden">
        {/* <img src={img} className="h-full w-full object-cover object-center" /> */}
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent cartItem={item} />
              ))
            : null}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">${totalCartAmount}</span>
            </div>
          </div>
          <div className="mt-4 w-full">
            <p className="text-sm text-red-800 mb-2">
              This application is for demonstration purposes only. Please use
              the following PayPal sandbox account credentials to test payments.
              Real PayPal accounts cannot be used here.
            </p>
            <p className="text-sm text-red-800 mb-2">
              PayPal Test Account Email: sb-awaby32981834@personal.example.com
            </p>
            <p className="text-sm text-red-800 mb-2">
              PayPal Test Account Password: 48FY/q.q
            </p>
            <p className="text-sm text-red-800 mb-2">
              Pay with: PayPal balance
            </p>
            <Button onClick={handleInitiatePaypalPayment} className="w-full">
              {isPaymentStart
                ? "Processing PayPal Payment..."
                : "Checkout with PayPal"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
