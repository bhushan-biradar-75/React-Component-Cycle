import React,{useEffect} from 'react';

const Contact = () => {

   

  return( 
      <div>
            <h4 className='mx-3'><b>Unmounting Phase In React Js</b></h4>
        <p className='mx-4'><span style={{color:"red",fontSize:"18px"}}>The</span> final stage of unmounting is essential as it doesn’t require the component and gets unmounted from the DOM. As the final state, it is designed to produce the outcome via unmounting.

Here is the essential method used in unmounting –

“componentWillUnmount” – This is the last method in the lifecycle as it pertains to the core unmounting and removal from the DOM. The cleaning up of the component is also performed here. This is also used in the logging out of users when they want to clear out the program from their browser.

Conclusion
As we go from Initialization to Unmounting, the lifecycle provides developers with a robust module. Components can follow a charted path, which can then be scaled up as needed. This is a more organised format of coding complex user interfaces. At every junction, the right amount of information and processing is necessary.</p>

            <div className='img-fluid , mt-5'>
    <img src="https://1.bp.blogspot.com/-eL2sbdeL9Qc/XdPR4RscrjI/AAAAAAAAVfc/zVXHv6vrPsswu5sZhGCYeOUAEZVGapSxgCLcBGAsYHQ/s1600/React-Components-Lifecycle.png" alt="" />
</div>

      </div>

  
  
)};

export default Contact;
