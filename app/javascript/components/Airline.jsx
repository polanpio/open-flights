import React, { useState, useEffect, Fragment } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import Header from "./Header"
import ReviewForm from "./ReviewForm";
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 60px;
`

const Airline = () => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  const { slug } = useParams()

  useEffect(() => {
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
      .then(res => {
        console.log(res)
        setAirline(res.data)
        setLoaded(true)
      })
    // .catch(res = console.log(res)) // You don't have access to the res variable here as it's outside the aboove .then call
  }, [])

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <Wrapper>
      {loaded &&
        <Fragment>
          <Column>
            <Main>
              <Header attributes={airline.data.attributes} reviews={airline.included} />
              <div className="reviews"></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Airline
