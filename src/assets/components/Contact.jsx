import { useState } from "react";
import Header from "./Header";
const Contact = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const blockSubmit = (e) => {
    e.preventDefault(); 
  }
  return (
    <>
      <Header con="bg-gray-500" />
      <body className="h-screen flex flex-col px-1.5 items-center ">
        <h1 className="text-gray-400 text-bold font-bold text-5xl pt-12">
          Contact Me
        </h1>
        <form onSubmit={blockSubmit}>
          <div className="pt-5">
            <label className="px-5 text-4xl">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formInfo.name}
              onChange={handleForm}
              required
            />
          </div>
          <div className="pt-6">
            <label className="px-5 text-4xl">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formInfo.email}
              onChange={handleForm}
              required
            />
          </div>
          <div className="pt-6 flex ">
            <label className="px-5 text-4xl">Message:</label>
            <textarea
              id="msg"
              name="msg"
              value={formInfo.msg}
              onChange={handleForm}
              rows="4"
              required
            />
          </div>
          <div className="pt-12 flex items-center justify-center">
            <button className="pt-6 flex items-center justify-center text-2xl bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </body>
    </>
  );
};

export default Contact;
