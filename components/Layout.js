import styles from './layout.module.css';
import Header from './Header';
import Head from 'next/head';
//Create a common Layout component and use it for each of the pages
// <style global is used to style the body of the app
function Layout ({ children }) {
    return <div className={styles.container}>
        {children}
    <Head>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
        />
        <link href='https://fonts.googleapis.com/css?family=Poiret One' rel='stylesheet'/>
    </Head>
    <style global jsx>{`
        html,
        body {
            font-family: Poiret One;
        }
    `}</style>
    </div>
}

export default Layout;