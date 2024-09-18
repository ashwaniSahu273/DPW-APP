import React from "react";
import "./editor-quill.css"
import "./choices.css"

interface ProductInfoProp {
  onContinue?: () => void;
}

function ProductInfo({ onContinue }: ProductInfoProp) {
  const handleClick = () => {
    onContinue();
  };

  return (
    <div className="absolute top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 opacity-100 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
      <h5 className="mb-0 font-bold dark:text-white">Product Information</h5>
      <div>
        <div className="flex flex-wrap mt-4 -mx-3">
          <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
            <label
              className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              htmlFor="ProductName"
            >
              Name
            </label>
            <input
              type="text"
              name="ProductName"
              placeholder="eg. Off-White"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
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
              name="Weight"
              placeholder="eg. 42"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
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
            <div  id="editor" className="editor-quill !h-1/2">
              <p>
                Some initial <strong>bold</strong> text
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-3 flex flex-col gap-5 sm:mt-0 sm:w-6/12">
            <div className="w-full max-w-full  flex flex-col sm:mt-0 sm:w-full">
              <label
                className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                htmlFor="choices-category"
              >
                Category
              </label>
              <select
                name="choices-category"
                className="choices focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                choices-select
              >
                <option value="Choice 1" selected>
                  Clothing
                </option>
                <option value="Choice 2">Real Estate</option>
                <option value="Choice 3">Electronics</option>
                <option value="Choice 4">Furniture</option>
                <option value="Choice 5">Others</option>
              </select>
            </div>
            <div className="w-full max-w-full  flex flex-col sm:mt-0 sm:w-full">
              <label
                className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                htmlFor="Sizes"
              >
                Sizes
              </label>
              <select
                name="choices-sizes"
                className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                choices-select
              >
                <option value="Choice 1" selected>
                  Medium
                </option>
                <option value="Choice 2">Small</option>
                <option value="Choice 3">Large</option>
                <option value="Choice 4">Extra Large</option>
                <option value="Choice 5">Extra Small</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <button
            type="button"
            aria-controls="media"
            onClick={handleClick}
            className="  next-form-btn inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
