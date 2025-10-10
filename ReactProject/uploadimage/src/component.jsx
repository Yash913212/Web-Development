import React from "react";
import { use } from "react";
import { useState } from "react";

function UploadImage(){

    const [img1,Setimg1] = useState(null);
    const [img2,Setimg2] = useState(null);

    const handle1 = event =>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            Setimg1(reader.result);
        }

        //the above will convert to string and it will show in less kb than below

        //This function will take as it is size of pdf
        //const path = URL.createObjectURL(file);
        //setImagePath(path);
    }

    const handle2 = event =>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            Setimg2(reader,result);
        }
    }

    return(
        <div>
            <input type="file" onChange={handle1} />
            <div>
                {img1 && <img src={img1} alt="prev 1"/>}
            </div>
            <input type="file" onChange={handle2} />
            <div>
                {img2 && <img src={img2} alt="prev 2"/>}
            </div>
        </div>
    )

}
export default UploadImage