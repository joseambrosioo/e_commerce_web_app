import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
// const { default: AdminLayout } = require("./layout");
// import AdminLayout from "./layout";  // Import layout as default

// Component for rendering a product tile in the admin interface.
// Displays product details such as image, title, price, and sale price.
// Provides options to edit or delete the product.
function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[300px] object-cover rounded-t-lg"
        />
      </div>
      <CardContent>
        <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
        <div className="flex-justify-between items-center mb-2">
          <span
            className={`${
              product.salePrice > 0 ? "line-through" : ""
            } text-lg font-semibold text-primary`}
          >
            ${product?.price}
          </span>
          <span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold"> ${product?.salePrice}</span>
            ) : null}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          className="bg-blue-950 text-white"
          onClick={() => {
            setOpenCreateProductsDialog(true);
            setCurrentEditedId(product?._id);
            setFormData(product);
          }}
        >
          Edit
        </Button>
        <Button
          className="bg-red-500 text-white"
          onClick={() => handleDelete(product?._id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

// Exports the component for use in admin-related views.
// module.exports = AdminProductTile
export default AdminProductTile;
