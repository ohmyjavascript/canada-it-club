import React from "react"
import {
  Banner,
  Layout,
  TopicIntro,
  AllFavoriteBlogs,
  Thumbnail,
} from "components"

const index = () => {
  return (
    <Layout>
      <Banner />
      <TopicIntro />
      <AllFavoriteBlogs />
      {/* <Thumbnail /> */}
    </Layout>
  )
}

export default index
