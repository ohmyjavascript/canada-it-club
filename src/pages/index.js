import React from "react"
import { Layout } from "../components/layout"
import { Banner } from "../components/Banner"
import { TopicIntro } from "../components/topic-intro/TopicIntro"
import { AllFavoriteBlogs } from "../components/Favorites/AllFavoriteBlogs"
import { ContactUsForm } from "../components/Forms/ContactUsForm"

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
