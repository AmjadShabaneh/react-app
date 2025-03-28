import React from 'react'

const Card = ({product,addToCart,remove}) => {

  return (
   

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#222">
        <img class="rounded-t-lg" src={product.imageUrl} alt="" />
    </a>
    <div class="p-5">
        <a href="#22">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <p class="mb-3 font-normal  text-gray-700 dark:text-gray-400">{product.description}</p>
       
        { product.id>=0?<button onClick={()=>{remove(product.id)}} class="block  w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ">
            remove product  
        </button>  :<button onClick={()=>{addToCart(product)}} class="block  w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to cart     
        </button> }
    </div>
</div>

  )
}

export default Card
