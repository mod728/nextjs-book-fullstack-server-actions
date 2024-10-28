"use client"
import { useState } from "react"

const ImgInput = () => {
    const [image, setImage] = useState("")
    return (
        <>
            <ImgUpload setImage={setImage}/>
            <input defaultValue={image} type="text" name="image" placeholder="画像" required/>
        </>
    )
}

export default ImgInput

const ImgUpload = (props) => {
    const [imageFile, setImageFile] = useState("")

    const handleClick = async() => {
        try{
            const data = new FormData()
            data.append("file", imageFile)
            data.append("upload_preset", "upclpe2")
            data.append("cloud_name", "6fs9n32")
            const response= await fetch("https://api.cloudinary.com/v1_1/6fs9n32/image/upload", {method: "POST", body: data})
            const jsonData = await response.json()
            await props.setImage(jsonData.url)
            alert("画像アップロード成功")
        }catch(err){
            alert("画像アップロード失敗")
        }
    }
    return (
        <div className="img-input">
            <input type="file" onChange= {(e)=> setImageFile(e.target.files[0])} accept="image/png, image/jpg"/>
            <button onClick={handleClick} disabled={!imageFile}>画像Upload</button>
        </div>
    )
}