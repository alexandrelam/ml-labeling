import React from "react";
import { Layout, Button } from "antd";
import { Stage, Layer } from "react-konva";
import "../App.css";
import Rectangle from "./Rectangle";

const { Content } = Layout;

const initialRectangles = [
	{
		x: 10,
		y: 10,
		width: 100,
		height: 100,
		id: "rect1",
	},
	{
		x: 150,
		y: 150,
		width: 100,
		height: 100,
		id: "rect2",
	},
];

const Canvas = () => {
	const [rectangles, setRectangles] = React.useState(initialRectangles);
	const [selectedId, selectShape] = React.useState(null);

	const checkDeselect = (e) => {
		const clickedOnEmpty = e.target === e.target.getStage();
		if (clickedOnEmpty) {
			selectShape(null);
		}
	};

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
				<Button type="primary">Add rect</Button>
				<Button danger>Remove rect</Button>
			</div>
		</Content>
	);
};

export default Canvas;
