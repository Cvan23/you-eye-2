import React from "react"
import { Link } from "gatsby"

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
      <Login />
      <CatCard />
      <MagicBox />
      <DoubleSlide />
      <Clock />
  </Layout>
)

export default SecondPage
