import React from "react";
import { Layout, Button } from "antd";
import { Stage, Layer } from "react-konva";
import "../App.css";
import Rectangle from "./Rectangle";

const { Content } = Layout;

const Canvas = () => {
	const [rectangles, setRectangles] = React.useState([]);
	const [selectedId, selectShape] = React.useState(null);

	const checkDeselect = (e) => {
		const clickedOnEmpty = e.target === e.target.getStage();
		if (clickedOnEmpty) {
			selectShape(null);
		}
	};

	const addRect = () => {
		let array = [...rectangles];
		const newRect = {
			x: Math.floor(Math.random() * 300),
			y: Math.floor(Math.random() * 300),
			width: 100,
			height: 100,
			id: array.length,
		};
		array.push(newRect);
		setRectangles(array);
	};

	const removeRect = () => { 
		let array = [...rectangles];
		array.pop();
		setRectangles(array);
	}

	return (
		<Content>
			<Stage
				width={600}
				height={600}
				onMouseDown={checkDeselect}
				onTouchStart={checkDeselect}
			>
				<Layer>
					{rectangles.map((rect, i) => {
						return (
							<Rectangle
								key={i}
								shapeProps={rect}
								isSelected={rect.id === selectedId}
								onSelect={() => {
									selectShape(rect.id);
								}}
								onChange={(newAttrs) => {
									const rects = rectangles.slice();
									rects[i] = newAttrs;
									setRectangles(rects);
								}}
							/>
						);
					})}
				</Layer>
			</Stage>
			<div className="btn-section">
				<Button type="primary" onClick={addRect}>
					Add rect
				</Button>
				<Button onClick={removeRect} danger>Remove rect</Button>
			</div>
		</Content>
	);
};

export default Canvas;
