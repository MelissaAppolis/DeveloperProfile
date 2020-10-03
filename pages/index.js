import Layout from '../components/Layout';
import Link from 'next/link';

// inline css
const aboutLink = {
    textDecoration: 'none',
    color: 'rgb(212, 180, 34)',
    fontSize: '30px',
    fontVariantCaps: 'all-petite-caps',
    fontWeight: '900',
    border: '1px solid rgb(212, 180, 34)',
    padding: '3px 8px 8px 8px',
    boxShadow: '5px 5px 15px #888888'
}
// Home page with Layout component added a Link API to go to the about page.
// An image was used to display the background image of my app using the static url to get the image.
// Style jsx is used to style some of the elements
const Home = () => (
    <Layout>
        <div id="bg">
            <img src="/myimage2.jpg" alt="homepage image" />
            <div id="home-text-box">
                <h1>Hi</h1><h2>, I am Melissa...</h2>
                <h3>A Full Stack Web Developer</h3>
                <Link href="/about">
                    <a style={aboutLink}>Let's get to know me ▻▻</a>
                </Link>
            </div> 
        </div>
    <style jsx>{`
        #bg {
            top: -50%; 
            left: -50%; 
            width: 200%; 
            height: 200%;            
            position: fixed;
        }
        #bg img {
            position: absolute; 
            top: 0; 
            left: 0; 
            right: 0; 
            bottom: 0; 
            margin: auto;
            min-width: 50%;
            min-height: 50%;
            z-index: -1;
  
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
            margin-left: -350px;
            margin-top: -315px;
        }
        h1 {
            color: rgb(173, 104, 63);
            font-weight: bold;
            display: inline-flex;
            font-size: 90px;
            margin: 5px;
            font-variant-caps: petite-caps;
        }
        h2 {
            display: inline-flex;
            font-size: 80px;
            margin: 5px;
            font-variant-caps: all-petite-caps;
            color: black;
            
        }
        h3 {
            font-size: 40px;
            margin-top: 0px;
            margin-bottom: 10px;
            font-variant-caps: all-petite-caps;
            color: rgb(173, 104, 63);
        }

        a:hover {
            background-color: rgb(212, 180, 34);
            color: black !important;
        }
    `}</style>
    <style global jsx>{`
        html,
        body {
            font-family: Poiret One;
        }
    `}</style>
    </Layout>
        

)

export default Home;
