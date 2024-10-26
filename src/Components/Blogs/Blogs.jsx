import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs,setBlogs]= useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <h2 className='text-3xl font-extrabold bg-slate-700 text-red-500'>Knowledge cafe length : {blogs.length}</h2>
        </div>
    );
};

export default Blogs;