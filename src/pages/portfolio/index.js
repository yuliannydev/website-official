import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { Link } from 'gatsby'

const PortfolioHome = () => {
    return (
        <Layout>
        <Seo title="Portafolio" />
        <h1>
        <br />
          Proximamente{" "}
          <span role="img" aria-label="Rock U">
            🤟
          </span>
        </h1>
        <br /><br />
        <Link to="/">Regresar al Inicio</Link>
        </Layout>
    )
}

export default PortfolioHome
