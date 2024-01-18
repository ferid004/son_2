import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
function Product() {
    const [product, setProduct] = useState([])
    const axiosAllData = async () => {
        const res = await axios.get('http://localhost:3000/')
        const data = res.data.data
        setProduct(data)
    }
    useEffect(() => {
        axiosAllData()
    }, [])


    return (
        <div id='product'>  
        <div className="uptext">
            <div className="icon">
            <i class="fa-solid fa-bowl-food"></i>
            </div>
            <div className="outtext">
                <div className="line"></div>
                <h3>Our Menu</h3>
                <div className="line"></div>
            </div>
        </div>
        <div className="downtext">
            <p>Breackfast</p>
            <p>Brunch</p>
            <p>Lunch</p>
            <p>Dinner</p>
        </div>
        <div className="pp">
            {product && product.map((item) => (
                <ul className="probox" key={item._id}>
                    <div className="up">
                        <li>{item.name}</li>
                    </div>
                    <div className="down">
                        <li className='info'>{item.info}</li>
                        <li className='price'> $ {item.price}</li>
                    </div>
                </ul>
            ))}
        </div>
        </div>
    )
}

export default Product