import React from 'react'
import Layout from '../components/layout/Layout'
import Products from '../components/productSection/Products'
import Banner from '../components/bannerBox/Banner'

function HomePage() {
    return (
        <Layout>
            <Banner />
            <Products />
        </Layout>
    )
}

export default HomePage