import React, { useState } from "react";

const Uploud = () => {
  const [file, setFile] = useState();
  console.log(file);
  return (
    <section className="w-full h-[100vh] bg-[#272727] flex items-center justify-center">
      <div>
        <input type="file" />
      </div>
    </section>
  );
};

export default Uploud;
