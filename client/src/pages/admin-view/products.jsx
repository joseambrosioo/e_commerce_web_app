import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { addNewProduct, fetchAllProducts } from "@/store/admin/products-slice";
import { Description } from "@radix-ui/react-toast";

import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialFormData = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: ''
}

function AdminProducts() {

    const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData)
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const { productList } = useSelector(state => state.adminProducts)
    const dispatch = useDispatch();
    const { toast } = useToast();

    function onSubmit(event) {
        event.preventDefault();
        dispatch(addNewProduct({
            ...formData,
            image: uploadedImageUrl,
        })
        ).then((data) => {
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchAllProducts())
                setOpenCreateProductsDialog(false)
                setImageFile(null);
                setFormData(initialFormData);
                toast({
                    title: 'Product added successfully'

                })
            }
        });
    }

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    console.log(productList, uploadedImageUrl, "productList");

    return <Fragment>
        <div className="mb-5 w-full flex justify-end">
            <Button onClick={() => setOpenCreateProductsDialog(true)} className="bg-black text-white font-semibold">Add New Product</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
        <Sheet
            open={openCreateProductsDialog}
            onOpenChange={() => {
                setOpenCreateProductsDialog(false);
            }}
        >
            <SheetContent side="right" className="overflow-auto bg-white text-black p-5 shadow-lg max-h-full">
                <SheetHeader>
                    <SheetTitle>Add New Product</SheetTitle>
                </SheetHeader>
                <ProductImageUpload
                    imageFile={imageFile}
                    setImageFile={setImageFile}
                    uploadedImageUrl={uploadedImageUrl}
                    setUploadedImageUrl={setUploadedImageUrl}
                    setImageLoadingState={setImageLoadingState}
                    imageLoadingState={imageLoadingState}

                />
                < div className="py-6">
                    <CommonForm
                        onSubmit={onSubmit}
                        formData={formData}
                        setFormData={setFormData}
                        buttonText="Add"
                        formControls={addProductFormElements}
                    />
                </div>
            </SheetContent>
        </Sheet>
    </Fragment >
}

export default AdminProducts;