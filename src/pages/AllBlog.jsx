import React, { useEffect, useState } from "react";
import { deleteData, getData } from "../Api/FetchData";
import {useOutletContext} from 'react-router-dom'

function AllBlog() {

  const { Data, setData , Valid , setValid } = useOutletContext();

  const fetchData = async () => {
      if(Valid===false){
        try {
          const res = await getData();
          setData(res.data);
        } catch (error) {
          console.log(error);
        }
      }
  };

  useEffect(() => {
    fetchData();
  },[]);

  const handleDelete = async (id) => {
    try {
      const response = await deleteData(id);
      if(response.status === 200){
        const newData = Data.filter((currItem)=>{
          return currItem.id != id;
        });
        setData(newData);
      }

    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <ul className="w-[100%] h-auto flex flex-row flex-wrap gap-4 justify-center items-center ">
      {Data.map((currBlog) => {
        const { id, title, body } = currBlog;
        return (
          <li key={id}>
            <div
              
              className="h-[310px] w-[300px] ml-8 mt-4 bg-blue-500 border-black rounded-lg p-4 hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 relative"
            >
              <div className="flex-grow h-[240px] overflow-y-scroll no-scrollbar">
                <p className="text-black font-bold">Post: {id}</p>
                <p className="text-black font-semibold">Tittle: {title}</p>
                <p className="text-black font-semibold">Desc: {body}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                <button onClick={() => handleDelete(id)} className="h-[40px] w-[45%] bg-green-200 hover:bg-green-400">
                  Delete Blog
                </button>
                <button className="h-[40px] w-[45%] bg-red-200 hover:bg-red-500">
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