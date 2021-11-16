import { React, useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items'
import { CartContext } from './Cart'

const ContextCart = () => {
    //const [item, setItem] = useState(products);

    const { item, clearCart } = useContext(CartContext);

    if (item.length === 0) {
        return (
        <>
                <header>
                    <div className='continue-shopping'>
                        <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                        <h3>continue shoping</h3>
                    </div>

                    <div className="cart-icon">
                        <img src="./images/cart.png" alt="cart" />
                        <p>0</p>

                    </div>
                </header>
                <section className="main-cart-section">
                    <h1> shoping Cart</h1>
                    <p className="total-items">you have <span className='total-items-count'> 0</span> item in shoping cart</p>
                    </section>
                </>
                )
                 }

                return (<>
                    <header>
                        <div className='continue-shopping'>
                            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                            <h3>continue shoping</h3>
                        </div>

                        <div className="cart-icon">
                            <img src="./images/cart.png" alt="cart" />
                            <p>7</p>

                        </div>
                    </header>
                    <section className="main-cart-section">
                        <h1> shoping Cart</h1>
                        <p className="total-items">you have <span className='total-items-count'> 7</span> item in shoping cart</p>

                        <div className="cart-items">

                            <div className='cart-items-container'>
                                <Scrollbars >
                                    {
                                        item.map((curItem) => {
                                            return <Items key={curItem.id} {...curItem} />

                                        })
                                    }
                                </Scrollbars>
                            </div>

                        </div>
                        <div className="card-total">
                            <h3>Cart Total : <span>220000rs</span></h3>
                            <button>Chekout</button>
                            <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
                        </div>
                    </section>
                </>
                );

};

                export default ContextCart;