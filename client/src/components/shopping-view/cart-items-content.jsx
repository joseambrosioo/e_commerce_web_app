import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  updateCartItemQuantity,
} from "@/store/shop/cart-slice";
import { useToast } from "@/hooks/use-toast";

function UserCartItemsContent({ cartItem }) {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { productList } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  // function handleUpdateCartItemQuantity(getCartItem, typeOfAction) {
  //   dispatch(
  //     updateCartItemQuantity({
  //       userId: user?.id,
  //       productId: getCartItem?.productId,
  //       quantity:
  //         typeOfAction === "plus"
  //           ? getCartItem?.quantity + 1
  //           : getCartItem?.quantity - 1,
  //     })
  //   ).then((data) => {
  //     if (data?.payload?.success) {
  //       toast({ title: "Cart item is updated successfully." });
  //     }
  //   });
  // }

  // function handleUpdateCartItemQuantity(getCartItem, typeOfAction) {
  //   let getCartItems = cartItems.items || [];
  //   const indexOfCurrentCartItem = getCartItems.findIndex(
  //     (item) => item.productId === getCartItem?.productId
  //   );

  //   if (indexOfCurrentCartItem === -1) return;

  //   const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;

  //   // Handle the 'plus' action and check stock limit
  //   if (typeOfAction === "plus") {
  //     const getCurrentProductIndex = productList.findIndex(
  //       (product) => product._id === getCartItem?.productId
  //     );

  //     // Check if product is found
  //     if (getCurrentProductIndex === -1) {
  //       toast({
  //         title: "Product not found.",
  //         variant: "destructive",
  //       });
  //       return;
  //     }

  //     const getTotalStock = productList[getCurrentProductIndex].totalStock;

  //     if (getQuantity + 1 > getTotalStock) {
  //       toast({
  //         title: `Only ${getTotalStock} items can be added for this product.`,
  //         variant: "destructive",
  //       });
  //       return;
  //     }
  //   }

  //   // Handle the 'minus' action and check minimum quantity
  //   if (typeOfAction === "minus" && getQuantity <= 1) {
  //     toast({
  //       title: "Quantity cannot be less than 1.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   // If validation passes, update the cart item quantity
  //   dispatch(
  //     updateCartItemQuantity({
  //       userId: user?.id,
  //       productId: getCartItem?.productId,
  //       quantity: typeOfAction === "plus" ? getQuantity + 1 : getQuantity - 1,
  //     })
  //   ).then((data) => {
  //     if (data?.payload?.success) {
  //       toast({ title: "Cart item is updated successfully." });
  //     }
  //   });
  // }

  function handleUpdateCartItemQuantity(getCartItem, typeOfAction) {
    let getCartItems = cartItems.items || [];
    const indexOfCurrentCartItem = getCartItems.findIndex(
      (item) => item.productId === getCartItem?.productId
    );

    if (indexOfCurrentCartItem === -1) return;

    const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;

    // Handle the 'plus' action and check stock limit
    if (typeOfAction === "plus") {
      const getCurrentProductIndex = productList.findIndex(
        (product) => product._id === getCartItem?.productId
      );

      console.log("Checking product ID:", getCartItem?.productId);
      console.log("Product List:", productList);
      console.log("Found product index:", getCurrentProductIndex);

      // Check if product is found
      if (getCurrentProductIndex === -1) {
        toast({
          title: "Product not found.",
          variant: "destructive",
        });
        return;
      }

      const getTotalStock = productList[getCurrentProductIndex].totalStock;

      if (getQuantity + 1 > getTotalStock) {
        toast({
          title: `Only ${getTotalStock} items can be added for this product.`,
          variant: "destructive",
        });
        return;
      }
    }

    // Handle the 'minus' action and check minimum quantity
    if (typeOfAction === "minus" && getQuantity <= 1) {
      toast({
        title: "Quantity cannot be less than 1.",
        variant: "destructive",
      });
      return;
    }

    // If validation passes, update the cart item quantity
    dispatch(
      updateCartItemQuantity({
        userId: user?.id,
        productId: getCartItem?.productId,
        quantity: typeOfAction === "plus" ? getQuantity + 1 : getQuantity - 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({ title: "Cart item is updated successfully." });
      }
    });
  }

  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item is deleted successfully",
        });
      }
    });
  }

  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItem?.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            disabled={cartItem?.quantity === 1}
            onClick={() => handleUpdateCartItemQuantity(cartItem, "minus")}
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="font-semibold">{cartItem?.quantity}</span>
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            onClick={() => handleUpdateCartItemQuantity(cartItem, "plus")}
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          $
          {(
            (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
            cartItem?.quantity
          ).toFixed(2)}
        </p>
        <Trash
          onClick={() => handleCartItemDelete(cartItem)}
          className="cursor-pointer mt-1"
          size={20}
        />
      </div>
    </div>
  );
}

export default UserCartItemsContent;
