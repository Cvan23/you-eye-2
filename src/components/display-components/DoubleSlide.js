import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp, faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"

const leftSlideList = [
	{
		"title": "Tuxie Kitty",
		"content": "a dapper cat!",
		"style": "#393e47ad"
	},
	{
		"title": "Black Kitty!",
		"content": "a beautiful void",
		"style": "#0e072c"
	},
	{
		"title": "Ginger Cat!",
		"content": "house lion!",
		"style": "#c37a1a"
	},
	{
		"title": "Tortie Kitty",
		"content": "so much sass!",
		"style": "#3d2100"
	},
]

const rightSlideList = [
	{
		"bgImage": 'https://images.unsplash.com/photo-1559509299-f804c0578556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9ydGllJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
	},
	{
		"bgImage": 'https://images.unsplash.com/photo-1585838904386-1c86ceea945e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpbmdlciUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
	},
	{
		"bgImage": 'https://images.unsplash.com/photo-1548707519-d9908cfebe7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
	},
	{
		"bgImage": 'https://images.unsplash.com/photo-1487160342031-439ea29c3c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHV4ZWRvJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
	},

]

const slidesLength = rightSlideList.length;

const DoubleSlide = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
	const [slideLeftTranslateY, setslideLeftTranslateY] = useState("translateY(0px)")
	const [slideRightTranslateY, setslideRightTranslateY] = useState("translateY(0px)")

	const sliderRef = useRef()

	useEffect(() => {
		if (activeSlideIndex > slidesLength - 1) {
			setActiveSlideIndex(0);
		}
		if (activeSlideIndex < 0) {
			setActiveSlideIndex(slidesLength - 1);
		}

		const sliderHeight = sliderRef.current.clientHeight;

		setslideLeftTranslateY(`translateY(${activeSlideIndex * sliderHeight}px)`)
		setslideRightTranslateY(`translateY(-${activeSlideIndex * sliderHeight}px)`)
	}, [activeSlideIndex])


	const changeSlide = (direction) => {

		if (direction === 'up') {
			setActiveSlideIndex(activeSlideIndex + 1)

		} else if (direction === 'down') {
			setActiveSlideIndex(activeSlideIndex - 1)
		}

	}
  return (
    <Container fluid>
      <Row >
        <Col>
					<h1>Click Up and Down arrows to reveal dynamic content!</h1>
          <div id="site-doubleslide">
            <div className="slider-container" ref={sliderRef}>
              <div className="left-slide" style={{ "top": `-${(slidesLength - 1) * 100}vh`, "transform": slideLeftTranslateY }}>
                {
                  leftSlideList.map((slide, idx) => {
                    return (
                      <div key={idx} style={{ "backgroundColor": slide.style }}>
                        <h1>{slide.title}</h1>
                        <p>{slide.content}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div className="right-slide" style={{ "transform": slideRightTranslateY }}>
                {
                  rightSlideList.map((slide, idx) => {
                    return (
                      <div key={idx} style={{ "backgroundImage": `url(${slide.bgImage})` }} />
                    )
                  })
                }
              </div>
              <div className="action-buttons">
                <button className="down-button" onClick={() => changeSlide('down')}>
								<FontAwesomeIcon icon={faArrowAltCircleDown} />
                </button>
                <button className="up-button" onClick={() => changeSlide('up')}>
								<FontAwesomeIcon icon={faArrowAltCircleUp} />
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DoubleSlide
