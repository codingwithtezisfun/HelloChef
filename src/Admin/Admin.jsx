import React, { useState } from "react";
import { db, storage } from "../config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Admin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");

  // Function to handle form submission
  let Product = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (image) {
        const imageRef = ref(storage, "Product-Images/" + image.name);
        const uploaded = await uploadBytes(imageRef, image);
        console.log("Uploaded:", uploaded);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "products"), {
        title,
        price,
        desc,
        imageUrl,
      });

      alert("Product added successfully!");
    } catch (error) {
      console.log("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <>
      <div className="admin d-flex align-items-center">
        <form onSubmit={Product} className="">
          <input
            type="text"
            placeholder="Enter product title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            placeholder="Choose image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
}

export default Admin;
