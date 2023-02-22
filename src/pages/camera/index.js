import React, { useState } from "react";

const CameraComponent = () => {
    const [imageData, setImageData] = useState(null);

    const handleTakePicture = () => {
        navigator.camera.getPicture(
            (imageUri) => {
                setImageData(`data:image/jpeg;base64,${imageUri}`);
            },
            (error) => {
                console.log(`Error taking picture: ${error}`);
            },
            {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
            }
        );
    };

    return (
        <div>
            <button onClick={handleTakePicture}>Take Picture</button>
            {imageData && <img src={imageData} />}
        </div>
    );
};

export default CameraComponent;
