import { useEffect } from "react";
import { useState } from "react";

const Image = () => {
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    const imageInfo = e.target.files[0];
    const previewUrl = URL.createObjectURL(imageInfo);
    imageInfo.preview = previewUrl;
    setImage(imageInfo);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <div>{image.preview && <img width={200} src={image.preview} />}</div>
    </div>
  );
};

export default Image;
