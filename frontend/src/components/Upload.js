import React, { useRef } from "react";
import S3 from "react-aws-s3";



const Upload = () => {
  const fileInput = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;

    console.log(`new file name is-- ${newFileName}`)

    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_ID,
      secrectAccessKey: process.env.REACT_APP_ACCESS_KEY,
    };

    console.log(`config is-- ${config}`)

    const ReactS3Client = new S3(config);

    console.log(`ReactS3Client is-- ${ReactS3Client}`)

    try {
      ReactS3Client.uploadFile(file, newFileName).then((data) => {
        console.log(`data is-- ${data}`);
        if (data.status === 204) {
          console.log("success");
        } else {
          console.log("fail");
        }
      });
    } catch (error) {
      console.log(`error caught is-- ${error}`)
      console.log(`error message is-- ${error.message}`)
      console.log("react s3 client not working")
    }


  };

  console.log("this will console log before returning - outside handleclick.")

  return (
 

    <form className="upload-steps" onSubmit={handleClick + console.log("handleclick clicked")}>
      <label>
        Image Upload:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;
