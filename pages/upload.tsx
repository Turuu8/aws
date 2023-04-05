import { CallTracker } from "assert";
import axios from "axios";

const Upload = () => {
  let formData = new FormData();
  const handleFile = async (e: React.SyntheticEvent) => {
    formData.append("image", e.target.files[0]);
    try {
      const result = await axios.put(
        "https://leap-3-bucket.s3.amazonaws.com/home.jpeg?AWSAccessKeyId=AKIASVURILT4YDWYSHON&Content-Type=image%2Fjpeg&Expires=1680668506&Signature=3VnTjoRxVWBws4NtvxZ2kEF79nc%3D&X-Amzn-Trace-Id=Root%3D1-642cf62d-261a04fa5d54400a32b20dca%3BParent%3D1c5171b97c9e8d09%3BSampled%3D0",
        formData.get("image"),
        {
          headers: {
            "Content-Type": "image/jpeg",
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-full h-[100vh] bg-[#272727] flex items-center justify-center">
      <div>
        <input type="file" accept="image/jpg" onChange={async (e) => await handleFile(e)} />
      </div>
    </section>
  );
};

export default Upload;
