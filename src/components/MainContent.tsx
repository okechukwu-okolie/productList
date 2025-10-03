import { useState } from "react"
import { useFilter } from "./FilterContext"


const MainContent = () => {
    const {searchQuery, selectedCategory,minPrice,maxPrice,keyword}=useFilter()

    const [products,setProducts]=useState<any>([])
    const [filter,setFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [dropdownOpen, setDropDownOpen] = useState(false)
    const itemsPerPage = 12



  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[43rem] w-xs">

      main content
    </section>
  )
}

export default MainContent
