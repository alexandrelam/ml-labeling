import React from "react";
import { Layout, Button } from "antd";
import { Stage, Layer } from "react-konva";
import "../App.css";
import URLImage from "./URLImage";
import Rectangle from "./Rectangle";

const { Content } = Layout;

const Canvas = (props) => {
	const [rectangles, setRectangles] = React.useState([]);
	const [selectedId, selectShape] = React.useState(null);
	const [photoLink, setPhotoLink] = React.useState("");
    const [imageWidth, setImageWidth] = React.useState(0);
    const [imageHeight, setImageHeight] = React.useState(0);

	//********Rectangles Handlers********//
	const checkDeselect = e => {
		const clickedOnEmpty = e.target.attrs.draggable !== true;
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
			id: array.length
		};
		array.push(newRect);
		setRectangles(array);
	};

	const removeRect = () => {
		let array = [...rectangles];
		array.pop();
		setRectangles(array);
	};

	React.useEffect(() => {
		(props.issueList.length !== 0) && setPhotoLink(Object.values(props.issueList[props.pagination])[5]);
		(props.issueList.length !== 0) && setImageWidth(Object.values(props.issueList[props.pagination])[4]);
		(props.issueList.length !== 0) && setImageHeight(Object.values(props.issueList[props.pagination])[3]);
	}, [props]);

	return (
		<Content>
			<Stage
				width={imageWidth}
				height={imageHeight}
				onMouseDown={checkDeselect}
				onTouchStart={checkDeselect}
			>
				<Layer>
					<URLImage src={photoLink} />
					{rectangles.map((rect, i) => {
						return (
							<Rectangle
								key={i}
								shapeProps={rect}
								isSelected={rect.id === selectedId}
								onSelect={() => {
									selectShape(rect.id);
								}}
								onChange={newAttrs => {
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
				<Button onClick={removeRect} danger>
					Remove rect
				</Button>
			</div>
		</Content>
	);
};

export default Canvas;
