import React from 'react'
import Header from '../head/Header'
import Navbar from '../nav/Navbar'
import Footer from '../footer/Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout