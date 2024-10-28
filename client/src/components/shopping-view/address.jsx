import { useState } from "react";
import CommonForm from "../common/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};

function Address() {
  const [formData, setFormData] = useState(initialAddressFormData);

  function handleManageAddress(event) {
    event.preventDefault();

    // if (addressList.length >= 3 && currentEditedId === null) {
    //   setFormData(initialAddressFormData);
    //   toast({
    //     title: "You can add max 3 addresses",
    //     variant: "destructive",
    //   });

    //   return;
  }

  return (
    <Card>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2  gap-2">
        Address List
      </div>
      <CardHeader>
        <CardTitle>Add New Address</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          //   buttonText={currentEditedId !== null ? "Edit" : "Add"}
          buttonText={"Add"}
          onSubmit={handleManageAddress}
          //   isBtnDisabled={!isFormValid()}
        />
      </CardContent>
    </Card>
  );
}

export default Address;
