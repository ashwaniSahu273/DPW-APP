import React from 'react';

interface PricingProps {
  register: any;
  errors: any;
  onBack: () => void;
  onSubmit: () => void; // Handle submit function passed from ProductForm
}

function Pricing({ register, errors, onBack, onSubmit }: PricingProps) {
  return (
    <div className="absolute top-0 left-0 flex flex-col w-full h-auto min-w-0 p-4 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
      <h5 className="font-bold dark:text-white">Pricing</h5>
      <div>
        <div className=" relative  flex items-center content-center flex-wrap mt-4 -mx-3  ">
          <div className=" w-3/12 max-w-full px-3 flex-0 ">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Price">Price</label>
            <input
              type="text"
              {...register('Price', { required: 'Price is required' })}
              placeholder="99.00"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
            {errors.Price && <p className="absolute bottom-12
             left-4 text-red-500">{errors.Price.message}</p>}
          </div>

          <div className="w-4/12 max-w-full flex flex-col px-3 mt-2 flex-0">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Currency">Currency</label>
            <select
              {...register('Currency', { required: 'Currency is required' })}
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
              <option value="INR">INR</option>
              <option value="BTC">BTC</option>
            </select>
            {errors.Currency && <p className="text-red-500">{errors.Currency.message}</p>}
          </div>

          <div className="w-5/12 max-w-full px-3 flex-0">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="SKU">SKU</label>
            <input
              type="text"
              {...register('SKU')}
              placeholder="71283476591"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
          </div>

          <div className="w-full max-w-full px-3 mt-6 flex-0">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Tags">Tags</label>
            <input
              type="text"
              {...register('Tags')}
              placeholder="In Stock, Out of Stock"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
          </div>


        </div>

        <div className="flex mt-6">
          <button
            type="button"
            aria-controls="socials"
            onClick={onBack}
            className="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800"
          >
            Prev
          </button>

          <button
            type="submit"
            className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
            onClick={onSubmit} // Submit the form via onSubmit prop
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
