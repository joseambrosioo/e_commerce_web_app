import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import accImg from "../../assets/account.jpg";
import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";
import { CardHeader, CardTitle } from "@/components/ui/card";

function ShoppingAccount() {
  return (
    <div className="flex flex-col h-full md:w-full sm:w-full">
      <div className="relative h-[50px] overflow-hidden lg:w-screen">
        {/* <img
          src={accImg}
          className="h-full w-full object-cover object-center"
        /> */}
        {/* <CardHeader className="w-full flex items-center lg:w-screen">
          <CardTitle>Account</CardTitle>
        </CardHeader> */}
      </div>
      <div className="relative h-[50px] overflow-hidden">
        {/* <img
          src={accImg}
          className="h-full w-full object-cover object-center"
        /> */}
        <CardHeader className="w-full flex items-center">
          <CardTitle>Account</CardTitle>
        </CardHeader>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8 ">
        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <ShoppingOrders />
            </TabsContent>
            <TabsContent value="address">
              <Address />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAccount;
