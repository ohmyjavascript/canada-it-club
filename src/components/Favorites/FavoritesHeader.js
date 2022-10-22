import React from "react"
import { ArrowLottieLogo } from "components"
import styled from "styled-components"

export const LottieWrapper = styled.div`
  max-width: 50px;
  margin: 0 auto;
`

export const FavoritesHeader = () => {
  return (
    <div className="px-5 pt-16 pb-2 mx-auto">
      <LottieWrapper>
        <ArrowLottieLogo />
      </LottieWrapper>
      <div className="text-center">
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Top Favories!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          These are the most requested questions in our inbox for this week!
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
        </div>
      </div>
    </div>
  )
}
