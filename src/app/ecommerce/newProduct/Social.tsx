import React from 'react'

interface SocialProps{
  onContinue: ()=>void;
  onBack:()=>void;
}

function Social({onContinue,onBack}:SocialProps) {

  const handleBack = ()=>{
      
    onBack();
  }
  const handleOnContinue = ()=>{

    onContinue()
  }

  return (
    <div  className="absolute top-0 left-0 flex flex-col  w-full h-auto min-w-0 p-4 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
              <h5 className="font-bold dark:text-white">Socials</h5>
              <div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0">
                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Shoppify Handle">Shoppify Handle</label>
                    <input type="text" name="Shoppify Handle" placeholder="@soft" className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0">
                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Facebook Account">Facebook Account</label>
                    <input type="text" name="Facebook Account" placeholder="https://..." className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0">
                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" htmlFor="Instagram Account">Instagram Account</label>
                    <input type="text" name="Instagram Account" placeholder="https://..." className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </div>
                </div>
                <div className="flex mt-6">
                  <button type="button" aria-controls="media" prev-form-btn onClick={handleBack} className="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800">Prev</button>
                  <button type="button" aria-controls="pricing" next-form-btn onClick={handleOnContinue} className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Next</button>
                </div>
              </div>
            </div>
  )
}

export default Social