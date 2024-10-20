const Header=()=>{
    return(
        <div className="header">
            <div>
            <span className="easy">Easy</span><span className="buy">Buy</span>
            </div>
            <div>
                <div className="input"><img src="./magnifying-glass-solid.svg" alt="" /><input type="text"  placeholder="Search for anything"/></div>
            </div>
            <div>
                <img src="./cart-shopping-solid.svg" alt="" />
            </div>
        </div>
    );
}
export default Header