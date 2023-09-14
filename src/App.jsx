import { useEffect, useState } from "react"
import Cart from "./Cart/Cart";
import Bookmark from "./Bookmark/Bookmark";
import Bookmarkslength from "./Bookmark/Bookmarkslength";

function App() {
  const[data,setData]=useState([]);
  const[bookmarkdata,setBookmarkdata]=useState([]);
  
  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[]);

  const handleClick=(data)=>{
    const isExist =bookmarkdata.find(itemf=>itemf.id===data.id);
   
    if(isExist){
      return alert('already added')
    }
    else{
      setBookmarkdata([...bookmarkdata,data]);
    }
   
  }
  return (
    <>
     <div className="flex">
       <div>
       <h1 className="text-2xl font-extrabold text-red-600">hello</h1>
       <div className="grid grid-cols-2 w-2/3  gap-6">
      {
        data.map(data=><Cart key={data.id} handleClick={handleClick} data={data}></Cart>)
      }
       </div>
       </div>

       <div className="mt-32">
       <Bookmarkslength bookmarkdata={bookmarkdata}></Bookmarkslength>
        {
          bookmarkdata.map((emails,idx)=><Bookmark key={idx}  emails={emails}></Bookmark>)
        }
       
     </div>
     </div>
    
      
     

      
      
      
    </>
  )
}

export default App
