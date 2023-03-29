import Button from 'react-bootstrap/Button';
import techImg from '../img/EF7C8E.jpg';
import { useEffect } from 'react';
import { getMeme } from '../services/meme-api';

function Home(){
    useEffect(()=>{
        const loadMeme = async() =>{
            const data = await getMeme();
            console.log(data);

        }
        loadMeme()

    },[]);
    
    return (
        <section id="home" className='py-5'>
            
            <h5>Hi, I am </h5>
            <h1> My Phung Tieu </h1>
            <h1>Frontend Developer | Software Developer</h1>
            <span>I am build and desgin things for website with user friendly interface</span>
            <br/>
            <img style={{width:500}} src={techImg} alt="tech.img"/>
            <br/>
            <Button>About me</Button>
        </section>
    )
}
export default Home;