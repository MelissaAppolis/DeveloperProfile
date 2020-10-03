//use Next.js’ Link API to support client-side navigation
import Link from 'next/link';

//inline css
const headerStyle = {
    fontVariantCaps: 'all-petite-caps',
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: 'rgba(245, 245, 245, 0.651)',
    position: 'sticky'
}

const linkStyle = {
    textDecoration: 'none',
    margin: '7px',
    color: 'black',
    fontSize: '30px'
}

const homeStyle = {
    textDecoration: 'none',
    margin: '10px',
    marginRight: '50px',
    color: 'rgb(173, 104, 63)',
    fontSize: '35px',
    fontWeight: 'bolder'
}


// Navigation bar - adding a Links
//Style jsx is used to style some of the elements
const Header = () => (
    <div style={headerStyle}>
        <Link href="/">
            <a style={homeStyle}>Melissa Appolis</a>
        </Link>
        <Link href="/about">
            <a className="link" style={linkStyle}>About</a>
        </Link>
        <Link activeClassName="active" href="/projects">
            <a className="link" style={linkStyle}>Projects</a>
        </Link>
        <Link activeClassName="active" href="/contact">
            <a className="link" style={linkStyle}>Contact</a>
        </Link>
    <style jsx>{`
        .link:hover {
            border-bottom: 2px solid rgb(173, 104, 63);
            padding-bottom: 7px;
        }
        a:active {
            color: pink;
        }
    `}</style>
    </div>
)

export default Header;