import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../static/assets/images/logo.png';
// Import for custom styles...
import '../../static/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop} from '../../components/xamin';


//Components
import Portfolio from '../../components/portfolio';
import Footer from '../../components/home-section/landing-page1/footer';
import Item from '../../components/ourcases-section/items';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#our-cases','#portfolio','/portfolio-2-columns'],
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>Xamin - Data Science &amp; Analytics ReactJs Template</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Xamin - Data Science &amp; Analytics HTML5 Template" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="./static/assets/images/favicon.ico" />
                </Head>

                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle
                    className={"style-one"}
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<a className={"button bt-black pull-right"} href="#">Download</a>)}
                />

                <Portfolio />

                <ScrollTop />
                <Footer />

            </>
        );
    }
}

export default Index;