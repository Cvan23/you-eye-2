import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Card } from "react-bootstrap"

import Landing from "./Landing"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div id="site-styles">
    <Container className="text-center">
      <Card>
        <Card.Body>
          <Landing />
        </Card.Body>
      </Card>
    </Container>
    </div>
  </Layout>
)

export default IndexPage
