import React from 'react'

function Home(props) {
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
            </div>
        </div>
    )
}
export default Home

