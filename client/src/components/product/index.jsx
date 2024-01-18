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
    )
}

export default Product