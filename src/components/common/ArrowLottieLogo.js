import React, { useRef } from "react"

export const ArrowLottieLogo = () => {
  const ref = useRef(null)
  React.useEffect(() => {
    import("@lottiefiles/lottie-player")
  })
  return (
    <div>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets8.lottiefiles.com/packages/lf20_yldhnnml.json"
        style={{ width: "100%", height: "100%" }}
      ></lottie-player>
    </div>
  )
}
