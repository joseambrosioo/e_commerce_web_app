import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { Fragment, useState } from "react";

function AdminProducts() {

    const [openCreateProductsDialog, setOpencreateProductsDialog] = useState(false);

    return <Fragment>
        <div className="mb-5 w-full flex justify-end">
            <Button onClick={() => setOpencreateProductsDialog(true)}>Add New Product</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
        <Sheet
            open={openCreateProductsDialog}
            onOpenChange={() => {
                setOpencreateProductsDialog(false);
            }}
        >
            <SheetContent side="right" className="overflow-auto bg-white text-black p-5 shadow-lg max-h-full">
                <SheetHeader>
                    <SheetTitle>Add New Product</SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </Fragment >
}

export default AdminProducts;