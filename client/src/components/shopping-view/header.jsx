import { HousePlug } from "lucide-react";
import { Link } from "react-router-dom";

function ShoppingHeader() {
    return <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="flex h-16 item-center justify-between px-4 md:px-6">
            <Link className="flex">
                <HousePlug className="h-6 w-6" />
                <span>E-commerce</span>
            </Link>
        </div>
    </header >
}

export default ShoppingHeader;