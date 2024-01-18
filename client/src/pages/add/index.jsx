import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function Add() {
  const [product, setProduct] = useState([])
  const axiosAllData = async () => {
    const res = await axios.get('http://localhost:3000/')
    const data = res.data.data
    setProduct(data)
  }
  useEffect(() => {
    axiosAllData()
  }, [])

  const deledata = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`)
    axiosAllData()
  }
  const postdata = async (data) => {
    await axios.post('http://localhost:3000/', data)
    axiosAllData()
  }

  return (
    <div>
      <Helmet>
        <title>add</title>
      </Helmet>
      <div className="addpage">
        <div className="forms">
          <Formik
            initialValues={{ name: '', info: '', price: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required('Required'),
              info: Yup.string()
                .required('Required'),
              price: Yup.number().required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              postdata(values)
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm()
              }, 400);
            }}
          >
            <Form className='form'>
              <label htmlFor="name">name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />

              <label htmlFor="info">info</label>
              <Field name="info" type="text" />
              <ErrorMessage name="info" />

              <label htmlFor="price">price</label>
              <Field name="price" type="number" min={1} />
              <ErrorMessage name="price" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>

        </div>
        <div className="inputbox">
          <input type="text" />
        </div>
        <div className="sortbut">
          <button>asd</button>
          <button>asdd</button>
          <button>asd</button>
          <button>asd</button>
          <button>dasd</button>
        </div>
        <div className="tap">
          <table border={1}>
            <thead>
              <tr>
                <th>name</th>
                <th>info</th>
                <th>price</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {product && product.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.info}</td>
                  <td>$ {item.price}.00</td>
                  <td onClick={() => deledata(item._id)}>delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Add