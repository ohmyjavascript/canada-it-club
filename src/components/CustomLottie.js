import React, { useRef } from "react"

const CustomLottie = ({ url }) => {
  const ref = useRef(null)
  React.useEffect(() => {
    import("@lottiefiles/lottie-player")
  })
  return (
    <div>
      <lottie-player
        id="customLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src={url}
        style={{ width: "100%", height: "100%" }}
      ></lottie-player>
    </div>
  )
}

export default CustomLottie
