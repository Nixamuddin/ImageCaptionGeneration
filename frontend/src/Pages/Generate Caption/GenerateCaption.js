import React, { useState, useEffect } from 'react';
import './GenerateCaption.css';
const GenerateCaption = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [bool, setBool] = useState(false);
  const [caption, setCaption] = useState('');
  const [cap, setCap] = useState('');

  const handleImageChange = (event) => {
    const img = event.target.files[0];
    setSelectedFile(img);
  };

  const handleGenerateCaption = () => {
    if (selectedFile) {
      setBool(true);
      fetchCaption();
    } else {
      window.alert('Select an image first');
    }
  };

  const fetchCaption = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const url = 'http://localhost:5000/after';
      const response = await fetch(url, {
        method: 'Post',
        body: formData,
      });

      const data = await response.json();
      setCaption(data.caption);
      setCap(data.caption);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  }, [selectedFile]);

  return (
    <div className="imagecaption">
      <div className="container py-5">
        <div className="row py-2">
          <div className="col-lg-6 mx-auto">
            <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
              <input
                id="upload"
                type="file"
                onChange={handleImageChange}
                className="form-control border-0"
              />
              <label htmlFor="upload" className="font-weight-light text-muted">
                {selectedFile ? selectedFile.name : 'Choose file'}
              </label>
              <div className="input-group-append">
                <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4">
                  <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                  <small className="text-uppercase font-weight-bold text-muted">Choose file</small>
                </label>
              </div>
            </div>

            <p className="font-italic text-white text-center">
              The image uploaded will be rendered inside the box below.
            </p>
            <div className="image-area mt-4">
              {preview && (
                <img
                  id="imageResult"
                  src={preview}
                  alt=""
                  className="img-fluid rounded shadow-sm mx-auto d-block"
                />
              )}
            </div>
            <button className="btn btn-primary captionss" onClick={handleGenerateCaption}>
              Generate Caption
            </button>
            {bool && caption ? (
              <p className="result-caption">{caption}</p>
            ) : (
              bool && <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateCaption;
