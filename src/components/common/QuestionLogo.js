import React, { useRef } from "react"

export const QuestionLogo = () => {
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
        src="https://assets2.lottiefiles.com/packages/lf20_vyrigtxe.json"
        style={{ width: "100%", height: "100%" }}
      ></lottie-player>
    </div>
  )
}
