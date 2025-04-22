import React from 'react'
import { useEffect,useState } from 'react'

const Technology = () => {
  const [data, setData] = useState([]);       // to store API data
  const [loading, setLoading] = useState(true); // to show loading
  const [error, setError] = useState(null);     // to handle errors
  const[index,setindex]=useState(0)
  useEffect(() => {
    fetch('https://portfolio-admin-view.onrender.com/skills/api') // replace with your API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // empty array means run only once when the component mounts

  if (loading) return <p className=''>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return(
    <div>
      <div className='bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-md '>

      <h1 className='ml-20 mt-7'>Skills</h1>
      <hr className=' border-gray-700 my-1 ' />
      {data.length > 0 ? (
        <div className='grid grid-rows-3 grid-cols-2  gap-24 ml-20  bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-md  '>
          {data.map(skill => (
            <div key={skill._id}>
           <h1> {skill.name}   </h1>   
             <p>{skill.level}</p> 
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      </div>

    </div>
  )

}

export default Technology
