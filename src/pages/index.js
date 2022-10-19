import React from "react"
import Banner from "../components/Banner"
import CustomLottie from "../components/CustomLottie"
import Layout from "../components/layout"
import TopicIntro from "../components/topic-intro/TopicIntro"

const index = () => {
  return (
    <Layout>
      <Banner />
      <TopicIntro />
    </Layout>
  )
}

export default index
