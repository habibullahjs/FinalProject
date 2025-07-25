import React from 'react'
import Container from './Container'
import clock from "../assets/clock.png"
const Clock = () => {
  return (
    <div>
        <Container>
            <div className="w-full pb-[100px]">
                <img src={clock} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Clock