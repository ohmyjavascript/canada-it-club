import styled from "styled-components"

export const Wrapper = styled.div`
  > p,
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    max-width: 1250px;
  }

  > h1 {
    margin-bottom: 1rem;
  }

  > p {
    margin: 1rem 0;
  }
`

export const ImageWrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  max-height: 600px;
  overflow: hidden;
  border-radius: 10px;
`
