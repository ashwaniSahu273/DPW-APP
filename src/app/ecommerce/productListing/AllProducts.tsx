import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Button from "./Button";
import { useForm } from "react-hook-form";
import MerchantForm from "./MerchantForm";
import CreateProduct from "../index"

function AllProducts() {
  const [merchantFormOpen, setMerchantFormOpen] = useState(false);



  const handleClick = () => {
    setMerchantFormOpen(true);
  };

  const handleSubmit = ()=>{
    setMerchantFormOpen(false)
  }


  return (
    <div className="w-full p-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <Header />

            {
             merchantFormOpen ? (
              <MerchantForm onSubmit={handleSubmit}  />
            ) : (
                <div className="w-full flex justify-center ">
                  <Button onOpen={handleClick} value="Create Merchant Info" />
                </div>
              )}

           

            {/* <ProductList/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
