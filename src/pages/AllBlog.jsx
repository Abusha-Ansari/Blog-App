import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function AllBlog() {
  const { Data, setData } = useOutletContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newData = Data.filter((currItem) => currItem.id !== id);
    setData(newData);
  };

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <ul className="w-[100%] min-h-screen max-h-auto flex flex-row flex-wrap gap-4 justify-center items-center">
      {Data.map((currBlog) => {
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
    </ul>
  );
}

export default AllBlog;
