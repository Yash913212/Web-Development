import React, { useState } from 'react';

function ImageUploadComponent() {

 const [imagePath1, SetImagePath1] = useState(null);
const [imagePath2, SetImagePath2] = useState(null);

    const handleInput1 = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          SetImagePath1(reader.result);
        }
        // const path = URL.createObjectURL(file);
        // SetImagePath(path);
    }
    const handleInput2 = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          SetImagePath2(reader.result);
        }
        // const path = URL.createObjectURL(file);
        // SetImagePath(path);
    }
    

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleInput1} />
      <div>
        {imagePath1 && <img src={imagePath1} alt="Preview 1" />}
      </div>
      <input type='file' accept='image/*' onChange={handleInput2} />
      <div>
        {imagePath2 && <img src={imagePath2} alt="Preview 2" />}
      </div>
    </div>
  );

}
export default ImageUploadComponent