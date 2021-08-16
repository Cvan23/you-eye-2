import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const imageList = [
	{
		id: '1',
		url: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		title: 'Give This Kitty Some Love!',
	},
	{
		id: '2',
		url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		title: 'Cat Nap',
	},
	{
		id: '3',
		url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		title: 'What Is This Cat Thinking?',
	},
	{
		id: '4',
		url: 'https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		title: 'Big Yawn!',
	},
	{
		id: '5',
		url: 'https://images.unsplash.com/photo-1600867638314-f90dd845afbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		title: 'Cat Having Existential Crisis',
	},
];

const CatCard = () => {
  const [open, setOpen] = useState('1');

	const openHandler = (id) => {
		setOpen(id);
	};

  return (
		<Container fluid>
			<Row>
				<Col>
					<div id="site-catcard">
						<div className='container'>
							{imageList.map((image) => {
								return (
									<div
										key={image.id}
										className={`panel ${open === image.id ? 'active' : ''}`}
										style={{
											backgroundImage: `url(${image.url})`,
										}}
										onClick={(id) => openHandler(image.id)}
									>
										<h3>{image.title}</h3>
									</div>
								);
							})}
						</div>
					</div>
				</Col>
			</Row>
		</Container>
  )
}

export default CatCard
