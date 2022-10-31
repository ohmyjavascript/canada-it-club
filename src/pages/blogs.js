import React from "react"
import { AllBlogs, Layout } from "../components"
import { StaticImage } from "gatsby-plugin-image"
const blogs = () => {
  return (
    <Layout>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <StaticImage
                      alt="alt image"
                      placeholder="traced_svg"
                      src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-black uppercase">
                Yes, You're serious now, don't you?
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">
                Go through the blogs below and see which one you found it useful
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left">
                Inspired? Contributions are always welcome, we will tag you for
                the credits too.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AllBlogs />
    </Layout>
  )
}

export default blogs
