import React, { createRef, useEffect, useState } from 'react'

interface Product{
  category:string;
}

interface FetchResponse{
  products:Product[]
}



const Sidebar = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [keywords] = useState<string[]>([
        'apple',
        'watch',
        'fashion',
        'trend',
        'shoes',
        'shirt',
    ])

    useEffect(()=>{
        const FetchCategory = async()=>{
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data:FetchResponse = await response.json()
                
                const uniqueCategories = Array.from(new Set(data.products.map((product)=>product.category)))
                // console.log(uniqueCategories)

                setCategories(uniqueCategories)
                
            } catch (error) {
                console.error('Error fetching product', error)
            }
        }
        FetchCategory()
    },[])

  return (
    <div className='w-64 p-5 h-screen'>
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>

    <section>
      <input type="text" className='border-[0.5px] rounded px-2 py-1 sm:mb-0' placeholder='Search Product' />

      <div className="flex justify-center items-center">
        <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" placeholder='Min' />
        <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" placeholder='Max' />
      </div>

      {/* category section */}
      <section>
        <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
      </div>

      {categories.map((category,index)=>(
        <label key={index} className='block mb-2 font-semibold text-[12px] cursor-pointer items-center flex'>
          <input type="radio" name='category' value={category} className='mr-2 w-[16px] h-[16px] cursor-pointer' />
          {category.toUpperCase()}
        </label>
      ))}

      </section>

      {/* keyword section */}

      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3 mt-4">Keywords</h2>

        <div>
          {keywords.map((keyword,index)=>(
            <button key={index} className="block mb-2 px-4 py-2 w-full text-left border round hover:bg-gray-200 cursor-pointer">
              {keyword.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
<button className='w-full mb-[4rem] py-2 bg-black text-white rounded mt-5 cursor-pointer'>Reset Filter</button>

    </section>



    </div>
  )
}

export default Sidebar
