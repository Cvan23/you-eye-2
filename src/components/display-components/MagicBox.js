import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MagicBox = () => {
  const [boxes, setBoxes] = useState([])
	const [magic, setMagic] = useState(true)

	useEffect(() => {
		const createBox = () => {
			for (let i = 0; i < 4; i++) {
				for (let j = 0; j < 4; j++) {
					setBoxes(boxes => [...boxes, `${-j * 125}px ${-i * 125}px`])
				}
			}
		}
		createBox()
	}, [])

	const onClickHandler = () => {
		setMagic(magic => !magic)
	}
  return (
    <Container fluid>
      <Row>
        <Col>
          <div id="site-magicbox">
            <div className="wrap">
            <button className="magic" onClick={onClickHandler}>Click For Magic!</button>
              <div className={`boxes ${magic ? "big" : ""}`}>
                {
                  boxes.map((box, idx) => {
                    return (
                      <div key={idx} className="box" style={{ "backgroundPosition": box }}></div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MagicBox
