import React from "react"
import { Link } from "gatsby"
import { Button, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Login from "../components/display-components/Login"
import CatCard from "../components/display-components/CatCard"
import MagicBox from "../components/display-components/MagicBox"
import DoubleSlide from "../components/display-components/DoubleSlide"
import Clock from "../components/display-components/Clock"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="Page two" />
      <Card>
        <Card.Body>
          <h4>Welcome!</h4>
          <h6>Inside there are five components demonstrating some smaller projects I've been working on.
            These projects were inspired by the '50 Days 50 Projects' course hosted by Brad Traversy.
            This is the first version and deployment, I will be updating with changes to the site, as well as new projects regularly.
            Thank you for visiting!</h6>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h5>Clock with switchable dark and light mode.</h5>
        </Card.Body>
      </Card>

      <Clock />

      <Card>
        <Card.Body>
          <h5>Click on each collumn for dynamic content!</h5>
        </Card.Body>
      </Card>

      <CatCard />

      <Card>
        <Card.Body>
          <h5>3-D Boxes/Media Container</h5>
        </Card.Body>
      </Card>

      <MagicBox />

      <Card>
        <Card.Body>
          <h5>Click Up and Down arrows to reveal dynamic content!</h5>
        </Card.Body>
      </Card>

      <DoubleSlide />

      <Card>
        <Card.Body>
          <h5>Click in form fields to reveal animation!</h5>
        </Card.Body>
      </Card>

      <Login />
  </Layout>
)

export default SecondPage
