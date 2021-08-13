import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup, Card, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div id="site-styles">
    <Container className="text-center">
      <Card>
        <Link className="btn" to="/page-2">
          <Button variant="primary" size="lg">
            Jump In!
          </Button>
        </Link >
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Link className="btn" to="/page-2">
            <Button variant="primary" size="lg">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
    </div>
  </Layout>
)

export default IndexPage
