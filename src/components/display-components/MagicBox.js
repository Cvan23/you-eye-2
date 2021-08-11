import React, { useState, useEffect } from 'react';

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
    <div id="site-magicbox">
      <div className="wrap">
			<button className="magic" onClick={onClickHandler}>Magic Box!</button>
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
  )
}

export default MagicBox