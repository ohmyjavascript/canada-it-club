import React, { useRef } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 100px;
  margin: 0 auto;
  padding: 0;
`
export const FAQLottieLogo = () => {
  const ref = useRef(null)
  React.useEffect(() => {
    import("@lottiefiles/lottie-player")
  })
  return (
    <Wrapper>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets5.lottiefiles.com/packages/lf20_wco7gt1s.json"
        style={{ width: "100%", height: "100%" }}
      ></lottie-player>
    </Wrapper>
  )
}
