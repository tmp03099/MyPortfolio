
function About(){
    return (
        <section id="about">
            <h2 className="heading">About Me</h2>
            <div className="d-flex ">
                <div className="about-content">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                        ecently with desktop publishing software like Aldus PageMaker including versions 
                        of Lorem Ipsum.
                    </p>
                    <p>Here are a few technologies I've been working with recently</p>
                    <div className="d-flex">
                        <ul>
                            <li> JavaSCript </li>
                            <li> React </li>
                            <li> Node.js </li>
                        </ul>

                        <ul>
                            <li> Node.js </li>
                            <li> Node.js </li>
                            <li> Node.js </li>
                        </ul>
                    </div>
                </div>
                <div className="about-img">
                    <img style={{width: 200}} src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000" />
                </div>
            </div>
        </section>
    )
}
export default About;