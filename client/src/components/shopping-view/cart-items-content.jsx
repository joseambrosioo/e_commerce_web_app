import { Minus, MinusIcon } from "lucide-react";
import { Button } from "../ui/button";

function UserCartItemsContent({ cartItem }) {
  return (
    <div className="flex items-center space-x-4">
      <img
        sr={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-29 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItem?.title}</h3>
        <div className="flex items-center mt-1"></div>
        <Button variant="outline" size="icon">
          <Minus className="w-4 h-4" />
          <span className="sr-only">Decrease</span>
        </Button>
      </div>
    </div>
  );
}

export default UserCartItemsContent;
