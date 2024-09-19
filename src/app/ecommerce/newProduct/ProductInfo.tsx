import React, { useEffect, useState } from "react";
import "./editor-quill.css";
import "./choices.css";

interface ProductInfoProp {
  onContinue?: () => void;

  register: any;
  errors: any;
  watch: any; // This will allow us to observe field values
}

function ProductInfo({ onContinue, register, errors, watch }: ProductInfoProp) {
  // Watch all required fields
  const productName = watch("ProductName");
  const weight = watch("Weight");
  const category = watch("Category");
  const sizes = watch("Sizes");

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
 

  useEffect(() => {
    // Enable the button if all fields have values, otherwise disable it
    if (productName && weight && category && sizes) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [productName, weight, category, sizes]);

  const handleClick = () => {
    if (!isButtonDisabled) {
      onContinue();
    }
    console.log(errors)
  };

  return (
    <div className="absolute top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 opacity-100 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
      <h5 className="mb-0 font-bolder dark:text-white">Product Information</h5>
      <div>
        <div className="flex flex-wrap mt-4 -mx-3">
          <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
            <label
              className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80 "
              htmlFor="ProductName"
            >
              Name
            </label>
            <input
              type="text"
              {...register("ProductName", { required: "Product name is required" })}
              placeholder="eg. Off-White"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
            {errors.ProductName && <p className="text-red-500">{errors.ProductName.message}</p>}
          </div>
          <div className="w-full max-w-full px-3 flex-0 sm:mt-0 sm:w-6/12">
            <label
              className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              htmlFor="Weight"
            >
              Weight
            </label>
            <input
              type="text"
              {...register("Weight", { required: "Weight is required" })}
              placeholder="eg. 42"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
            {errors.Weight && <p className="text-red-500">{errors.Weight.message}</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
            <label
              className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              htmlFor="Description"
            >
              Description<small> (optional)</small>
            </label>
            <div id="editor" className="editor-quill !h-1/2">
            <textarea name="description" id="description" placeholder="Write some text here...."  className=" h-32 resize-none focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"></textarea>
          
            </div>
          </div>
          <div className="w-full max-w-full px-3 flex flex-col gap-5 sm:mt-0 sm:w-6/12">
            <div className="w-full max-w-full flex flex-col sm:mt-0 sm:w-full">
              <label
                className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                htmlFor="choices-category"
              >
                Category
              </label>
              <select
                {...register("Category", { required: "Category is required" })}
                className="choices focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              >
                <option value="Clothing">Clothing</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Others">Others</option>
              </select>
              {errors.Category && <p className="text-red-500">{errors.Category.message}</p>}
            </div>
            <div className="w-full max-w-full flex flex-col sm:mt-0 sm:w-full">
              <label
                className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                htmlFor="Sizes"
              >
                Sizes
              </label>
              <select
                {...register("Sizes", { required: "Size is required" })}
                className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              >
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
                <option value="Extra Small">Extra Small</option>
              </select>
              {errors.Sizes && <p className="text-red-500">{errors.Sizes.message}</p>}
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <button
            type="button"
            aria-controls="media"
            onClick={handleClick}
            disabled={isButtonDisabled} // Disable the button based on the state
            className={`next-form-btn inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs ${
              isButtonDisabled
                ? "bg-gradient-to-tl from-gray-900 to-slate-800 cursor-not-allowed opacity-70"
                : "bg-gradient-to-tl from-gray-900 to-slate-800"
            } leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
