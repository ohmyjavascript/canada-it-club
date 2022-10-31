import React from "react"
import {
  Banner,
  Layout,
  TopicIntro,
  AllFavoriteBlogs,
  ContactUsForm,
} from "../components"

const index = () => {
  return (
    <Layout>
      <Banner />
      <TopicIntro />
      <AllFavoriteBlogs />
      <ContactUsForm />
    </Layout>
  )
}

export default index
