const ProductCard = (props)=>{
    return (
        <div className="productCard">
            <div className="productImg">
                <img  src={props.image} alt="" />
            </div>
            <p><b>Product Name:</b></p> <span>{props.name}</span>
            <br />
            <br />
            <p><b>Price: $</b><span>{props.price}</span></p>
            <br />
            <br />
            <p><b>Description:</b></p><span> {props.desc1}</span>
            <span>{props.desc2}</span>
            <span>{props.desc3}</span>
        </div>
    );
}

export default ProductCard