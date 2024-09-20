import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

interface MerchantFormProps {
    onSubmit:()=>void;
   
}

function MerchantForm({onSubmit}:MerchantFormProps) {
    const [isButtonDisabled,setIsButtonDisabled] = useState(false)
    const [isSubmitted,setIsSubmitted] = useState(false);
  

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const personalTaxNumber = watch("personalTaxNumber");
      const enterpriseTaxNumber = watch("enterpriseTaxNumber");
      const govRegistryURL = watch("govRegistryURL");
      const allowedInternetAddress = watch("allowedInternetAddress");

      useEffect(() => {
        // Enable the button if all fields have values, otherwise disable it
        if (personalTaxNumber && enterpriseTaxNumber && govRegistryURL && allowedInternetAddress ) {
          setIsButtonDisabled(false);
        } else {
          setIsButtonDisabled(true);
        }
      }, [personalTaxNumber, enterpriseTaxNumber, govRegistryURL,allowedInternetAddress]);

      
    const onFormSubmit = (data:any)=>{
      console.log("Merchant info : ",data)
      setIsSubmitted(true)
      if(data){
        setTimeout(() => {
            onSubmit()
        }, 5000);

      }

    }


  return (
    <div className="absolute top-0 left-0 flex flex-col w-full h-auto min-w-0 p-4 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
      <h5 className="font-bold dark:text-white">Merchant Info</h5>
      <div>
        <form action="" onSubmit={handleSubmit(onFormSubmit)}>

       
        <div className="flex flex-wrap mt-4 -mx-3">
          <div className="w-full max-w-full px-3 flex-0">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="personalTaxNumber">Personal Tax Number</label>
            <input
          
              type="text"
              {...register("personalTaxNumber", { required: "Personal Tax Number is required" })}
              placeholder="000"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
            {/* {errors.personalTaxNumber && <p className="text-red-500">{errors.personalTaxNumber.message}</p>} */}
          </div>
        </div>

        <div className="flex flex-wrap mt-4 -mx-3">
          <div className="w-full max-w-full px-3 flex-0">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="enterpriseTaxNumber">Enterprise Tax Number</label>
            <input
              type="text"
              {...register("enterpriseTaxNumber", { required: "Enterprise Tax Number is required" })}
              placeholder="000"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-4 -mx-3">
          <div className="w-full max-w-full px-3 flex-0">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="govRegistryURL">GovRegistry URL</label>
            <input
              type="text"
              {...register("govRegistryURL", { required: "GovRegistry URL is required" })}
              placeholder="https://instagram.com/..."
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-4 -mx-3">
          <div className="w-full max-w-full px-3 flex-0">
            <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="allowedInternetAddress">Allowed Internet Address</label>
            <input
              type="text"
              {...register("allowedInternetAddress", { required: "allowedInternetAddress is required" })}
              placeholder="127.0.0.1"
              className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex mt-6">
     
          <button
            type="submit"
            className={`next-form-btn inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs ${
                isButtonDisabled
                  ? "bg-gradient-to-tl from-gray-900 to-slate-800 cursor-not-allowed opacity-70"
                  : "bg-gradient-to-tl from-gray-900 to-slate-800"
              } leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25`}
          >
           {isSubmitted?"Sent to Verification":"Submit"} 
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default MerchantForm