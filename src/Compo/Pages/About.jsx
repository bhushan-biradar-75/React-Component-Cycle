import React from 'react';

const About = () => {
    return <div>
        <h4 className='mx-3'><b>Updating Phase In React Js</b></h4>
        <p className='mx-4'><span style={{color:"red",fontSize:"18px"}}>The</span> third stage starts when the component has been adopted on the browser. This can then grow by receiving new updates from the program. The user can interact with the program, and then the component can be updated accordingly.

            Developerscan typically update the component in a few main ways. They can either send new props to the command or update the state entirely. Depending on the complexity or the scale of work, they can choose either method and get the program running.

            Here are the following hook methods that are critical to understanding.

            “shouldComponentUpdate” – The method tells the program about the state of rendering when it is updated. If new props or rules are being updated, then a rendering can be done or skipped. This is important to code in properly as there are evolving states in the program as well. Updating the method as true/false is the proper approach. The default here is true, which can be changed as per the code.

            “component will update” – This is executed when the prior method returns the answer of true. It’s then used to prepare the upcoming render, in the case where some previous calculation is necessary before returning a response. For more complex programs, this method can be used as well.

            “componentDidUpdate” – This is then executed when the updated component has been updated in the DOM as well. You can then initiate new libraries to reload as well so that you can maintain an updated program throughout the process.

            Rendering can be triggered accordingly, as per the core requirement.</p>

            <div className='img-fluid , mt-5'>
    <img src="https://1.bp.blogspot.com/-eL2sbdeL9Qc/XdPR4RscrjI/AAAAAAAAVfc/zVXHv6vrPsswu5sZhGCYeOUAEZVGapSxgCLcBGAsYHQ/s1600/React-Components-Lifecycle.png" alt="" />
</div>

    </div>
    
};

export default About;
