import React from 'react';

const Home = () => {
  return( 
  <div>
  <h4 className='mx-3'><b>Mounting In React Js</b></h4>
    <p className='mt-2, mx-4'><span style={{color:"red",fontSize:"18px"}}> This</span> is the next stage in the lifecycle and a critical one for launch. After you have prepared the code with basic requirements, states and props, you need your component to mount in the browser. This is done via browser DOM, and the phase gives you the right ReactJS hooks methods for a before and after fitting. Here are the critical terms that you should be adept in.

“render” – Render is what mounts the component onto the browser in this state. It is a classic method that gives the same output every time the same input is provided. It’s a standard function that is used extensively in the ReactJS coding framework.

“componentWillMount” – This is a critical function to remember as it is executed just before the reach component is about the mount. The mounting on the DOM is done after this stage, wherein you can enter all the things that you want to the program to do. It is also executed once in a lifecycle of a component and occurs before you render the program for the first time. It is also used for initialising the states or props as well, making it a robust component to leverage.

“componentDidMount” – This is the final ReactJS hook method that is executed after the component mounts the DOM. It’s also performed once in the lifecycle and occurs after the first rendering. Engineers can access the DOM via this method and initialise the appropriate JS libraries. You can access the DOM efficiently using this component. You can also initialise using several other libraries that can be incorporated into the final output. You can also make the right API calls under this method so that you can retrieve the data the right way</p>

<div className='img-fluid ,mt-5'>
    <img src="https://1.bp.blogspot.com/-eL2sbdeL9Qc/XdPR4RscrjI/AAAAAAAAVfc/zVXHv6vrPsswu5sZhGCYeOUAEZVGapSxgCLcBGAsYHQ/s1600/React-Components-Lifecycle.png" alt="" />
</div>
  </div>
  )};

export default Home;
