import React from 'react'
import { useEffect,useState } from 'react'
const IntroPage = () => {
  const [data, setData] = useState([]);       // to store API data
    const [loading, setLoading] = useState(true); // to show loading
    const [error, setError] = useState(null);     // to handle errors
    const[index,setindex]=useState(0)
    const [isDark, setIsDark] = useState(false);
   useEffect(() => {
      fetch('https://portfolio-admin-view.onrender.com/projects/api') // replace with your API URL
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
    }, []); 
  
  
  
  return (

    <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-md ">
       <img src="/public/profile-image.jpeg" alt="" className='w-32 float-right mr-60 mt-16'/> 
    <div className="m-20">
    <button
  onClick={() => {
    document.documentElement.classList.toggle('dark');
   
  }}
 className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded flex- "
>
  
  Toggle Dark Mode
</button>
    <div>
    <h1 className='text-2xl '>Abhiraj</h1>
      <h2 className='text-xl'>full-stack devolper</h2>
      <p className='text-green-300 underline'>i am full stack javascript Devolper</p>
      <p>React.js, Node Js ,Express & Tailwind CSS</p>
    </div>

    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  {data.map(project => (
    <div
      key={project._id}
      className="bg-slate-950 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 "
    >
      <h2 className="text-xl font-semibold text-white mb-2  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">{project.name}</h2>
      <p className="text-gray-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">{project.description}</p>
      <a href={project.tech} target="_blank" rel="noopener noreferrer" className="text-blue-500">
  Visit Tech
</a>
    </div>
  ))}
</div>
 
  

      {/* <div className="mt-16 ml-20 mb-4">
      <h2 >Projects</h2>
      </div>
      <hr className='border-t border-gray-700 my-4' />
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='bg-gray-800 p-5 bg-opacity-25 m-5  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer '>
        <a target="_self" className="" href="/blog"/>
        <h3 className=""></h3>
        <p>Here is my Projects</p>
        </div>
        
        <div className='bg-gray-800 p-5 bg-opacity-25 m-5  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
        <a target="_self" className="" href="/blog"/>
        <h3 className="">Blog</h3>
        <p>Here is my blog page</p>
        </div>
        <div className='bg-gray-800 p-5 bg-opacity-25 m-5  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
        <a target="_self" className="" href="/blog"/>
        <h3 className="">Blog</h3>
        <p>Here is my blog page</p>
        </div>
        
        <div className='bg-gray-800 p-5 bg-opacity-25 m-5  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
        <a target="_self" className="" href="/blog"/>
        <h3 className="">Blog</h3>
        <p>Here is my blog page</p>
        </div>
        </div> */}

     

      
      



      {/* <p className="dark:text-gray-300 text-sm md:text-base mb-0">Here you can seee my blog</p></a>
      <a target="_self" classname="rounded-md p-5 bg-secondary/5 dark:bg-[#ffffff0a] dark:hover:bg-[#ffffff0f] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 delay-150" href="/portfolio">
      <h3 className="">Portfolio</h3>
      <p className="dark:text-grey-light-900 text-small md:text-base mb-0">Projects</p></a>
      <a target="_blank" className="rounded-md p-5 bg-secondary/5 dark:bg-[#ffffff0a] dark:hover:bg-[#ffffff0f] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 delay-300" href="">
      <h3 class="text-base mb-1 md:mb-2 md:font-medium">Spotify playlist</h3>
      <p className="dark:text-grey-light-900 text-small md:text-base mb-0"></p>Here is my spoify playlist</a>
      <a target="_self" class="rounded-md p-5 bg-secondary/5 dark:bg-[#ffffff0a] dark:hover:bg-[#ffffff0f] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 delay-500" href="mailto:rakbulut@live.nl">
      <h3 className="text-base mb-1 md:mb-2 md:font-medium">Let's talk</h3>
      <p class="dark:text-grey-light-900 text-small md:text-base mb-0">Open voor uitdagingen!</p></a> */}
   
    </div>
    
  )
}

export default IntroPage




