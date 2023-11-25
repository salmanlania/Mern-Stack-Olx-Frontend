import React, { useRef, useState } from 'react'
import '../css/AddProduct.css'
import { baseUrl } from "../../core.mjs"
import axios from "axios"
import { RiImageAddFill } from "react-icons/ri";
const PostAdd = () => {

    const [selectedImage, setSelectedImage] = useState("")

    const imageRef = useRef()
    const titleRef = useRef()
    const priceRef = useRef()
    const descRef = useRef()

    const addProduct = (event) => {
        event.preventDefault()

        let formData = new FormData();

        formData.append("title", titleRef.current.value);
        formData.append("description", descRef.current.value);
        formData.append("files", imageRef.current.files[0]);
        formData.append("price", priceRef.current.value);

        axios
            .post(`${baseUrl}/api/v1/product`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                console.log(response.data);
                setSelectedImage("")
                event.target.reset()
            })
            .catch(function (error) {
                console.log(error)
            });


    }

    return (
        <div className='PostAdd'>
            <form className='productForm' onSubmit={(event) => addProduct(event)}>

                <input hidden type="file" id='image' accept='image/*' ref={imageRef} onChange={(e) => {
                    const base64Url = URL.createObjectURL(e.target.files[0]);
                    setSelectedImage(base64Url);
                }} />
                <span className='selectImg'>
                    <label htmlFor="image" style={{ cursor: 'pointer' }}><RiImageAddFill className='uploadImage' /></label>
                    {selectedImage && <img className='selectedImagePro' src={selectedImage} />}
                </span>

                <input type="text" placeholder='Enter Product Title' ref={titleRef} />
                <input type="number" placeholder='Enter Product Price' ref={priceRef} />
                <textarea placeholder='Enter Product Description' ref={descRef}></textarea>
                <button type='submit'>Add</button>

            </form>

        </div>
    )
}

export default PostAdd