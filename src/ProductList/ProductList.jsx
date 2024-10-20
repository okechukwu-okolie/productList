import ProductCard from "../Component/ProductCard";
import './ProductList.css'
import '../index.css'

const ProductList =()=>{
    return(
        <div className="productList">
            <ProductCard image='/comp1.webp' 
                         name='DELL INSPIRON' 
                         price='701.45'
                         desc1='15.6" FHD i5 10300H 8Gb 512 GB'
                         desc2='SSD GTX 1650,'
                         desc3=' VN9-00266'
                         />

            <ProductCard image='/comp2.webp' 
                         name='Dell INSPIRON 3530 Laptop' 
                         price='524.56'
                         desc1='Touch PC intel i5-13'
                         desc2='Gen 16GB Ram, '
                         desc3=' 512GB SSD'
                         />

            <ProductCard image='/comp3.webp' 
                         name='ASUS ROG Strix' 
                         price='744.89'
                         desc1='G15 15" FHD Ryzen 7 6800H/HS 16.'
                         desc2='512GB SSD RTX 3050'
                         desc3=' '
                         />

            <ProductCard image='./comp4.webp' 
                         name='LENOVO IdeaPadFlex 7' 
                         price='536.20'
                         desc1='82Y2 14" 2.2K Touch.'
                         desc2='i7-1355U 16GB 1TB '
                         desc3=' SSD'
                         />

            <ProductCard image='./comp5.webp' 
                         name='DELL LATITUDE 3340 Laptop' 
                         price='520.05'
                         desc1='Touch PC intel i5-13th Gen'
                         desc2='16GB Ram 256GB SSD'
                         desc3=' '
                         />

            <ProductCard image='./comp6.webp' 
                         name='ASUS TN3604YA-DS74T' 
                         price='501.23'
                         desc1='16" WUXGA Touch Ryzen 7'
                         desc2=' 7730U 2.0GHz 16GB'
                         desc3=' '
                         />

                         
            <ProductCard image='./comp7.webp' 
                         name='HP ENVY x360 ' 
                         price='623.11'
                         desc1='15.6" FHD Touch 2-in1 Laptop'
                         desc2='i7-1355U 32GB 1TB'
                         desc3=' SSD W11'
                         />

            <ProductCard image='./comp8.webp' 
                         name='' 
                         price=''
                         desc1='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                         desc2='tempore necessitatibus velit nihil doloremque'
                         desc3=' recusandae eos placeat maxime fugiat eligendi itaque ab.'
                         />

            <ProductCard image='./comp9.webp' 
                         name='HP Victus' 
                         price='450.78'
                         desc1=''
                         desc2='tempore necessitatibus velit nihil doloremque'
                         desc3=' recusandae eos placeat maxime fugiat eligendi itaque ab.'
                         />

            <ProductCard image='./comp10.webp' 
                         name='' 
                         price=''
                         desc1='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                         desc2='tempore necessitatibus velit nihil doloremque'
                         desc3=' recusandae eos placeat maxime fugiat eligendi itaque ab.'
                         />
        </div>
    );
}

export default ProductList;