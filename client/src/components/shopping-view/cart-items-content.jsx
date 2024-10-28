import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

function UserCartItemsContent({ cartItem }) {
  return (
    <div className="flex items-center space-x-4">
      <img
        sr={cartItem?.image}
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
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="font-semibold">{cartItem?.quantity}</span>
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserCartItemsContent;
