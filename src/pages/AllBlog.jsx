import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {BlogContext} from '../Context/UserContext.jsx'
function AllBlog() {
  const {Blogs,setBlogs} = useContext(BlogContext);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newBlogs = Blogs.filter((currItem) => currItem.id !== id);
    setBlogs(newBlogs);
  };

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <>
      { Blogs && Blogs.length > 0 ? (<ul className="w-[100%] min-h-screen max-h-auto flex flex-row flex-wrap gap-4 justify-center items-center">
      {Blogs.map((currBlog) => {
        const { id, title, body } = currBlog;

        return (
          <li key={id}>
            <div className="h-[300px] w-[250px] m-[2rem] bg-blue-100 border border-blue-200  rounded-lg p-4 hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 relative">
              <div className="flex-grow h-[240px] overflow-y-scroll no-scrollbar">
                <p className="text-black font-semibold">Title: {title}</p>
                <p className="text-black font-semibold">Desc: {body}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                <button
                  onClick={() => handleDelete(id)}
                  className="h-[40px] w-[45%] bg-green-200 hover:bg-green-400"
                >
                  Delete Blog
                </button>
                <button
                  onClick={() => handleEdit(id)}
                  className="h-[40px] w-[45%] bg-red-200 hover:bg-red-500"
                >
                  Edit Blog
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>) : (<h1>WRITE A BLOG</h1>)}
    </>
  );
}

export default AllBlog;
