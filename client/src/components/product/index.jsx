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
                <div className="probox">
                    <ul key={item._id}>
                        <div className="up">
                            <li>{item.name}</li>
                        </div>
                        <div className="down">
                            <li className='info'>{item.info}</li>
                            <li> $ {item.price}</li>
                        </div>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Product