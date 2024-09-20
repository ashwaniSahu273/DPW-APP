import React from 'react'
import "./datatable.css"

function ProductList() {
  return (
    <div className="flex-auto p-6 px-0 pb-0">
    <div className="overflow-x-auto table-responsive">
      <table className="table" id="products-list">
        <thead className="thead-light">
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex">
                <div className="my-auto block min-h-6 pl-7">
                  <input className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" type="checkbox" id="customCheck1" checked />
                </div>
                <img className="ml-4 w-1/10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/adidas-hoodie.jpg" alt="hoodie" />
                <h6 className="my-auto ml-4 dark:text-white">BKLGO Full Zip Hoodie</h6>
              </div>
            </td>
            <td className="leading-normal text-sm">Clothing</td>
            <td className="leading-normal text-sm">$1,321</td>
            <td className="leading-normal text-sm">243598234</td>
            <td className="leading-normal text-sm">0</td>
            <td>
              <span className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">Out of Stock</span>
            </td>
            <td className="leading-normal text-sm">
              <a href="javascript:;" >
                <i className="fas fa-eye text-slate-400 dark:text-white/70"></i>
              </a>
              <a href="javascript:;" className="mx-4" >
                <i className="fas fa-user-edit text-slate-400 dark:text-white/70"></i>
              </a>
              <a href="javascript:;" >
                <i className="fas fa-trash text-slate-400 dark:text-white/70"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex">
                <div className="my-auto block min-h-6 pl-7">
                  <input className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" type="checkbox" id="customCheck2" checked />
                </div>
                <img className="ml-4 w-1/10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/macbook-pro.jpg" alt="mac" />
                <h6 className="my-auto ml-4 dark:text-white">MacBook Pro</h6>
              </div>
            </td>
            <td className="leading-normal text-sm">Electronics</td>
            <td className="leading-normal text-sm">$1,869</td>
            <td className="leading-normal text-sm">877712</td>
            <td className="leading-normal text-sm">0</td>
            <td>
              <span className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">Out of Stock</span>
            </td>
            <td className="leading-normal text-sm">
              <a href="javascript:;" >
                <i className="fas fa-eye text-slate-400 dark:text-white/70"></i>
              </a>
              <a href="javascript:;" className="mx-4" >
                <i className="fas fa-user-edit text-slate-400 dark:text-white/70"></i>
              </a>
              <a href="javascript:;" >
                <i className="fas fa-trash text-slate-400 dark:text-white/70"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex">
                <div className="my-auto block min-h-6 pl-7">
                  <input className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" type="checkbox" id="customCheck3" />
                </div>
                <img className="ml-4 w-1/10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/metro-chair.jpg" alt="metro-chair" />
                <h6 className="my-auto ml-4 dark:text-white">Metro Bar Stool</h6>
              </div>
            </td>
            <td className="leading-normal text-sm">Furniture</td>
            <td className="leading-normal text-sm">$99</td>
            <td className="leading-normal text-sm">0134729</td>
            <td className="leading-normal text-sm">978</td>
            <td>
              <span className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-lime-600 bg-lime-200">in Stock</span>
            </td>
            <td className="leading-normal text-sm">
              <a href="javascript:;" >
                <i className="fas fa-eye text-slate-400 dark:text-white/70"></i>
              </a>
              <a href="javascript:;" className="mx-4" >
                <i className="fas fa-user-edit text-slate-400 dark:text-white/70"></i>
              </a>
              <a href="javascript:;" >
                <i className="fas fa-trash text-slate-400 dark:text-white/70"></i>
              </a>
            </td>
          </tr>
      
        </tbody>
       
      </table>                  
    </div>
  </div>
  )
}

export default ProductList