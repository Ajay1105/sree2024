"use client";
import { loading } from "@/assets";
import Image from "next/image";
import { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/uploadFile", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully. File ID:", response.data);
      } else {
        const errorData = await response.json();
        console.error(errorData.error || "Failed to upload file");
      }
      setIsUploaded(true);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setUploading(false);
  };

  return (
    <div className="flex flex-col md:flex-row mb-5 md:ml-20">
      <input
        type="file"
        onChange={handleFileChange}
        formEncType="multipart/form-data"
      />
      {selectedFile && !uploading && !isUploaded && (
        <button onClick={handleUpload} className="ml-5 mt-4 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">Upload</button>
      )}
      {uploading  && <Image src={loading} className="mt-5 md:mt-0 md:ml-5" height={50} width={50} alt="uploading"/>}
      {isUploaded  && <p src={loading} className="mt-5 md:mt-0 md:ml-5 font-medium text-green-600 text-xl">Successfully Uploaded</p>}
    </div>
  );
};

export default Upload;
