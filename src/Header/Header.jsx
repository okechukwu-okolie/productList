const Header=()=>{
    return(
        <div  className="header">
                <div className='logo'>
                    <span className="easy">Easy</span><span className="buy">Buy</span>
                </div>
        
                <div className='input'>
                    <img src="./magnifying-glass-solid.svg" alt="" />
                    <input type="text"  placeholder="Search for anything"/>
                </div>
            
                <div className='cart'>
                    <img src="./cart-shopping-solid.svg" alt="" />
                </div>
                <div className='ham'>
                    <img src="./hamburger.png" alt="" />
                </div>
        </div>
    );
}
export default Header