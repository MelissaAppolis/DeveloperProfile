import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const projectTitle = {
    fontSize: '40px'
}

const projectText = {
    fontSize: '20px'
}

const projectButton = {
    fontVariantCaps: 'all-petite-caps',
    fontSize: '25px',
    fontWeight: 'bolder',
    letterSpacing: '2px',
    borderRadius: '0px'
}
// Projects page incorporated Layout and Header component.
// Bootstrap Cards are used to display my websites i created.
// An image was used to display the background image of my app using the static url to get the image.
// Style jsx is used to style some of the elements
const Projects = () => (
    <Layout>
        <Header />
        <div id="bg">
            <img id="background-image" src="/myimage2.jpg" alt="homepage image" />
            <div id="home-text-box">
                <h2>My Projects</h2>
            <Card style={{ width: '650px', boxShadow: '5px 5px 18px #888888' }}>
                <Card.Img variant="top" src="/project1.png"/>
                    <Card.Body>
                        <Card.Title style={projectTitle}>Online Clothing Store</Card.Title>
                        <Card.Text style={projectText}>
                            Baby Bouique Online Clothing Store that allows users to browse through product information and images, add products to cart, enter delivery details and checkout. This app was created with HTML, CSS and Javascript.
                        </Card.Text>
                        <Button href="https://melissaappolis.github.io/onlineStore/" style={projectButton} variant="outline-secondary">View website ▻▻</Button>
                    </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '650px', boxShadow: '5px 5px 18px #888888' }}>
                <Card.Img variant="top" src="/project3.png"/>
                    <Card.Body>
                        <Card.Title style={projectTitle}>iTunes Search Engine App</Card.Title>
                        <Card.Text style={projectText}>
                            A fullstack app using React, Node.js and Express where a user can search for content within the iTunes Store and Apple Book Store by typing the name and selecting the type of content. The app allows the user to create a favorites list. The Search API is handled in the backend of this app.
                        </Card.Text>
                        <Button href="https://i-tunes-app.herokuapp.com" style={projectButton} variant="outline-secondary">View website ▻▻</Button>
                    </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '650px', boxShadow: '5px 5px 18px #888888' }}>
                <Card.Img variant="top" src="/project2.png"/>
                    <Card.Body>
                        <Card.Title style={projectTitle}>Memory Game</Card.Title>
                        <Card.Text style={projectText}>
                            This is a memory game app built with React. It is a one player game where by the user can try and match up card numbers. The game is able to track game time as well as reset the game.
                        </Card.Text>
                        <Button href="https://melissaappolis.github.io/React-Memory-Game/" style={projectButton} variant="outline-secondary">View app ▻▻</Button>
                    </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '650px', boxShadow: '5px 5px 18px #888888' }}>
                <Card.Img variant="top" src="/project5.png"/>
                    <Card.Body>
                        <Card.Title style={projectTitle}>Rest-Countries API APP</Card.Title>
                        <Card.Text style={projectText}>
                            This App was created with Next.js that displays all the countries in the African region and allows a user to view details about the country selected. The app uses the restcountries API to fetch the country data.
                        </Card.Text>
                        <Button href="https://restcountries-8084onzmm.vercel.app" style={projectButton} variant="outline-secondary">View app ▻▻</Button>
                    </Card.Body>
            </Card>
            </div> 
        </div>
        <style jsx>{`
        #bg {
            top: -50%; 
            left: -50%;
            width: 100%; 
            height: 200%;
            position: absolute;   
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
            position: fixed;
            width: 100%
        }
        #background-image {
            filter: blur(4px);
        }
        #home-text-box {
            border: none;
            padding-top: 250px;
            padding-bottom: 30px;
            padding-left: 80px;
            padding-right: 80px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: 350px;
            margin-top: -500px;
            border-left: 1px solid black;
            border-right: 1px solid black;
        }
        h2 {
            font-variant-caps: all-petite-caps;
            font-size: 45px;
            margin-bottom: 20px;
            color: rgb(139, 122, 46);
            text-align: center;
        }
        `}</style>
    </Layout>
)

export default Projects;