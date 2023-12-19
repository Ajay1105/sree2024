"use client"
import { useState } from 'react';

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);    
      console.log(selectedFile); 

    try {
      
      const response = await fetch('/api/uploadFile', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('File uploaded successfully. File ID:', data.fileId);
      } else {
        const errorData = await response.json();
        console.error(errorData.error || 'Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Next.js Google Drive Upload</h1>

      <input type="file" onChange={handleFileChange} formEncType='multipart/form-data'/>
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default HomePage;
