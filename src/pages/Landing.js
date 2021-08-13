import React, { useState } from 'react';
import { Link } from "gatsby"
// import { Button } from "react-bootstrap"

const Landing = () => {
  const [leftHover, setLeftHover] = useState(false);
	const [rightHover, setRightHover] = useState(false);

	const leftMouseEnterHandler = () => {
		setLeftHover(true);
	};

	const rightMouseEnterHandler = () => {
		setRightHover(true);
	};

	const leftMouseLeaveHandler = () => {
		setLeftHover(false);
	};

	const rightMouseLeaveHandler = () => {
		setRightHover(false);
	};
  return (
    <div id="site-landing">
      <div
			className={`container ${leftHover ? 'hover-left' : ''} ${
				rightHover ? 'hover-right' : ''
			}`}
		  >
			<div
				className='split left'
				onMouseEnter={leftMouseEnterHandler}
				onMouseLeave={leftMouseLeaveHandler}
			>
				<h1>You</h1>
				<Link to="/page-2">
          <a className="btn">
            Jump In!
          </a>
        </Link >
			</div>
			<div
				className='split right'
				onMouseEnter={rightMouseEnterHandler}
				onMouseLeave={rightMouseLeaveHandler}
			>
				<h1>Eye</h1>
				<Link to="/page-2">
          <a className="btn">
            Jump In!
          </a>
        </Link >
			</div>
		</div>
    </div>
  )
}

export default Landing
