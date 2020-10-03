import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Icon from '@iconify/react';
import githubIcon from '@iconify/icons-topcoat/github';
import linkedinIcon from '@iconify/icons-il/linkedin';
// Contact page incorprated Layout component and Header
// Icons are used on this pages
// An image was used to display the background image of my app using the static url to get the image.
// Style jsx is used to style some of the elements
const Contact = () => (
    <Layout>
        <Header />
        <div id="bg">
            <img id="background-image" src="/myimage2.jpg" alt="homepage image" />
            <div id="home-text-box">
                <h1>Contact Me</h1>
                <p>074 905 6579</p>
                <a id="email" href="mailto:melissaappolis@gmail.com">melissaappolis@gmail.com</a>
                <p>
                    <a style={{ marginRight: '10px'}} href="https://github.com/MelissaAppolis">
                        <Icon icon={githubIcon} />
                    </a> 
                    <a href="https://www.linkedin.com/in/melissa-appolis-109b6b117/">
                        <Icon icon={linkedinIcon} />
                    </a> 
                </p>
            </div> 
        </div>
        <style jsx>{`
        #bg {
            top: -50%; 
            left: -50%; 
            width: 200%; 
            height: 200%;
            position: fixed;   
            z-index: -1;         
        }
        #bg img {
            top: 0; 
            left: 0; 
            right: 0; 
            bottom: 0; 
            margin: auto;
            min-width: 50%;
            min-height: 50%;
            position: absolute;
            
        }
        #background-image {
            filter: blur(4px);
        }
        #home-text-box {
            border: none;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 100px;
            padding-right: 100px;
            position: fixed;
            top: 50%;
            left: 50%;
            margin-left: -350px;
            margin-top: -200px;
            background-color: rgba(51, 51, 50, 0.397);
        }
        h1 {
            font-variant-caps: all-petite-caps;
            font-size: 70px;
            padding-bottom: 30px;
            text-align: center;
        }
        p {
            font-size: 40px;
            color: white;
            text-align: center;
        }
        #email {
            font-size: 50px;
            color: white;
        }
        #email:hover {
            text-decoration: none;
            color: peachpuff;
        }
        a {
            font-size: 50px;
            color: peachpuff;
        }
        a:hover {
            color: whitesmoke;
        }
        `}</style>
    </Layout>
)

export default Contact;