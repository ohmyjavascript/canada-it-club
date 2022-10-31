import React from "react"
import { Layout } from "../components/layout"
import { Faq } from "../components/Faq"
import { ContactUsForm } from "../components/Forms/ContactUsForm"

const contact = () => {
  return (
    <Layout>
      <ContactUsForm />
      <Faq />
    </Layout>
  )
}

export default contact
