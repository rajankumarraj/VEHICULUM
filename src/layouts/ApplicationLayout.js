
import React from 'react'

import Header from '../component/Header/Header.component';
import Footer from '../component/Footer/Footer.component';
import CoverPage from '../component/Cover/CoverPage';


class SieraLandingLayout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <CoverPage />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

export default SieraLandingLayout