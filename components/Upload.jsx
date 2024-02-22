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

  function uploadFile() {
    setUploading(true);
    const file = selectedFile;
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(file); //start conversion...
    reader.onload = async function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      await fetch(
        "https://script.google.com/macros/s/AKfycbyp29L9OSThsh7lEy5m12WssGU4cA98nXRnyHFiIL-Ed8ZN5n-Xqa8cn5q2YHl_M_jddQ/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          setIsUploaded(true);
        })
        .catch((e) => console.log(e)); // Or Error in console
      setUploading(false);
    };
  }

  return (
    <div className="flex flex-col md:flex-row mb-5 md:ml-20">
      <input
        type="file"
        onChange={handleFileChange}
        formEncType="multipart/form-data"
      />
      {selectedFile && !uploading && !isUploaded && (
        <button
          onClick={uploadFile}
          className="ml-5 mt-4 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
        >
          Upload
        </button>
      )}
      {uploading && (
        <Image
          src={loading}
          className="mt-5 md:mt-0 md:ml-5"
          height={50}
          width={50}
          alt="uploading"
        />
      )}
      {isUploaded && (
        <p
          src={loading}
          className="mt-5 md:mt-0 md:ml-5 font-medium text-green-600 text-xl"
        >
          Successfully Uploaded
        </p>
      )}
    </div>
  );
};

export default Upload;
