import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const imageStyle = {
    maxWidth: '95%',
    filter: 'grayscale(70%)',
    borderRadius: '200px'
}

const paragraphStyle = {
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: 'bolder',
    backgroundColor: 'rgba(65, 100, 24, 0.418)',
    padding: '300px 20px 200px 20px'
}

const projectsLink = {
    textDecoration: 'none',
    color: 'whitesmoke',
    fontSize: '25px',
    fontVariantCaps: 'all-petite-caps',
    textAlign: 'center',
    border: '1px solid white',
    padding: '3px 8px 8px 8px',
    letterSpacing: '2px'
}

const containerBox = {
    marginTop: '0px'
}
// About page with bootstrap Container, Row, and Col. Added Next Link API and style jsx
// Link API is used to navigate to the projects page.
// Style jsx is used to style some of the elements
const About = () => (
    <Layout>
        <Header />
        <div id="bg">
            <img id="background-image" src="/myimage2.jpg" alt="homepage image" />
            <div id="home-text-box">
                <Container style={containerBox}>
                    <Row>
                        <Col sm={5}>
                            <img style={imageStyle} src="/profile2.png" alt="about image" />
                        </Col>
                        <Col sm={7}>
                            <p style={paragraphStyle}>
                                I am an aspiring Full Stack Web Developer in Cape Town, South Africa. I'm currently studying a course in Full Stack Web Development at Hyperion Dev, this is where my passion for design and development began. My goal is to develop as much skills as possible in web development to become a professional web developer. I have experience in Project Management and Event Management with a demonstrated history of working in the design and event industry.
                                <br/>
                                <br/>
                                <Link href="/projects">
                                    <a style={projectsLink}>View My Projects ▻▻</a>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
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
            padding-top: 250px;
            padding-bottom: 180px;
            padding-left: 50px;
            padding-right: 50px;
            position: fixed;
            top: 50%;
            left: 50%;
            margin-left: -550px;
            margin-top: -670px;
        }
        a:hover {
            background-color: white;
            color: black !important;
        }
        `}</style>
    </Layout>
)

export default About;