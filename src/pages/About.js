function About(){
    return (
        <section id="about" className="w-screen h-screen">
            <h2 className="heading">About Me</h2>
            <div className="flex">
                <div className="about-content">
                    <p>
                        Hi! My name is Phung is a junior developer and enjoying create creative website. 
                        I was interest about internet and coding when I was young. When I moved to US that have a big opportunity for me 
                        to pursure back to school to pursure my interest. When I work with coding, I realized it would be the perfect fit. 
                    
                        I always improving my skills and learn new skills to help me become a better developer. 
                        I'm done college, done a training software engineer and excited to start a new career as a developer.
                        My main focus to build accessible products with attractive and user friendly interface.
                        
                        I also recently working with React to build different web app and apply the backend in there.

                        Here are a few technologies I've been working with recently
                    </p>
                    <div className="flex justify-center">
                        <ul>
                            <li> JavaSCript </li>
                            <li> React </li>
                            <li> Angular </li>
                            <li> HTML5 </li>

                        </ul>

                        <ul>
                            <li> CSS3 </li>
                            <li> Bootstraps </li>
                            <li> Java </li>
                            <li> Node.js </li>
                        </ul>
                    </div>
                </div>
                <div className="about-img">
                    <img style={{width: 200, height:300}} src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000" />
                </div>

            </div>
        </section>
    )
}
export default About;