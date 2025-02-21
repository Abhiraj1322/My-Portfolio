import React from 'react'

const Technology = () => {
  return (
    <div className='bg-darkGreen text-white p-4'>
  <h2>Technology</h2>
  <p>Backend</p>
  <div className=''>
    <ul>
    <img className='w-6'   src="./public/node-js.svg" alt="Node-js" />
      <li> Node Js</li>
    </ul>
  </div>
  <div>
  <img className='w-6' src="./public/php-svgrepo-com.svg" alt="Php" />
  <p>Php</p>
  </div>
  <div>
  <img className='w-6' src="./public/vite.svg" alt="vite" />
  <p>Vite</p>
  </div>
  <div>
  <img className='w-7' src="./public/express-svgrepo-com.svg" alt="vite" />
  <p>Express</p>
  </div>
  <hr className='border-t border-gray-700 my-4' />
  <div>
      <p>Frontend</p>
<div>
  <div>
  <img className='w-6'  src="./public/react-javascript-js-framework-facebook-svgrepo-com.svg" alt="React" />
  <p>React</p>
    </div>
    <div>
    <img className='w-6' src="./public/java-script-logo-svgrepo-com.svg" alt="Javascript" />
    <p>Javascript</p>
    </div>
    <div>
    <img className='w-6' src="/public/tailwindcss-icon-svgrepo-com.svg" alt="Tailwind CSS" />
    <p>Tailwind css</p>
    </div>


    <div>

    </div>

</div>
    </div>
    </div>
    
  )
}

export default Technology
