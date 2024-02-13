import React from 'react'

function Home(props) {
  console.log("home",props.data)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://kompletmobil.cz/206657-large_default/apple-iphone-12-pro-256gb.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper">
                  <button className="addButton" onClick={()=>props.addToCartHandler({name:"Iphone 16", price:142000})}>Add To Cart</button>
                  <button className="removeButton" onClick={()=>props.removeFromCartHandler()}>Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home

