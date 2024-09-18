import React from 'react'

interface PricingProps{

  onBack:()=>void;
}
function Pricing({onBack}:PricingProps) {

  const handleBack = ()=>{
      
    onBack();
  }
  // const handleSubmit = ()=>{

  //   onContinue()
  // }


  return (
    <div  className="absolute top-0 left-0 flex flex-col  w-full h-auto min-w-0 p-4 break-words bg-white border-0  dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
    <h5 className="font-bold dark:text-white">Pricing</h5>
    <div>
      <div className="flex items-center content-center flex-wrap mt-4 -mx-3">
        <div className="w-3/12 max-w-full px-3 flex-0">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Price">Price</label>
          <input type="text" name="Price" placeholder="99.00" className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
        </div>
        <div className="w-4/12 max-w-full flex flex-col  px-3 flex-0">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="choices-currency">Currency</label>
          <select name="choices-currency" choices-select  className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none">
            <option value="Choice 1" selected>USD</option>
            <option value="Choice 2">EUR</option>
            <option value="Choice 3">GBP</option>
            <option value="Choice 4">CNY</option>
            <option value="Choice 5">INR</option>
            <option value="Choice 6">BTC</option>
          </select>
        </div>
        <div className="w-5/12 max-w-full px-3 flex-0">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="SKU">SKU</label>
          <input type="text" name="SKU" placeholder="71283476591" className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
        </div>
        {/* <!-- </div> -->
        <!-- <div className="flex flex-wrap mt-4 -mx-3"> --> */}
        <div className="w-full max-w-full px-3 mt-4 flex-0">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Tags">Tags</label>
          <input name="Tags"  id="choices-multiple-remove-button" type="text" value="In Stock, Out of Stock" placeholder="Enter something" />
        </div>
      </div>
      <div className="flex mt-6">
        <button type="button" aria-controls="socials" prev-form-btn onClick={handleBack}  className="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800">Prev</button>
        <button type="button" send-form-btn  className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Send</button>
      </div>
    </div>
  </div>
  )
}

export default Pricing