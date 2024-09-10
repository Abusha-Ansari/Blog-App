// import React, { useState } from 'react'
// import {useOutletContext} from 'react-router-dom'


// function CreateBlog() {
//   const { Data, setData , Valid , setValid } = useOutletContext();
//   const [newTitle,setnewTitle] = useState("");
//   const [newBody,setnewBody] = useState("");

//   const handleAddBlog = (e) => {
//     e.preventDefault();

//     const newBlog = {
//       id: Data.length + 1,
//       title: newTitle,
//       body: newBody
//     };

//     setData([...Data, newBlog]);
//     setValid(true)
//     console.log('data added')
//   };

//   return (
//     <>
//       <form onSubmit={handleAddBlog}>
//         <label htmlFor="title">Title</label>
//         <br />
//         <input
//           id="title"
//           type="text"
//           value={newTitle}
//           onChange={(e) => setnewTitle(e.target.value)}
//           placeholder="Write Title"
//         />
//         <br />

//         <label htmlFor="blog">Blog</label>
//         <br />
//         <input
//           id="blog"
//           type="text"
//           value={newBody}
//           onChange={(e) => setnewBody(e.target.value)}
//           placeholder="Write your blog"
//         />
//         <br />

//         <button type="submit">ADD</button>
//       </form>
//     </>
//   )
// }

// export default CreateBlog



import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function CreateBlog() {
  const { Data, setData, Valid, setValid } = useOutletContext();
  const [newTitle, setnewTitle] = useState("");
  const [newBody, setnewBody] = useState("");

  const handleAddBlog = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Data.length + 1,
      title: newTitle,
      body: newBody,
    };

    setData([...Data, newBlog]);
    setValid(true);
    console.log("data added");
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-blue-50 p-4">
      <form
        onSubmit={handleAddBlog}
        className="w-full max-w-lg bg-blue-100 p-8 rounded-lg shadow-lg border border-blue-200"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Create a New Blog
        </h2>

        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-blue-700 font-semibold">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={newTitle}
            onChange={(e) => setnewTitle(e.target.value)}
            placeholder="Write Title"
            className="w-full mt-2 p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blog Body Input */}
        <div className="mb-6">
          <label htmlFor="blog" className="block text-blue-700 font-semibold">
            Blog
          </label>
          <textarea
            id="blog"
            value={newBody}
            onChange={(e) => setnewBody(e.target.value)}
            placeholder="Write your blog"
            className="w-full mt-2 p-3 h-32 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
