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
		(props.issueList.length !== 0) && setPhotoLink(Object.values(props.issueList[props.pagination])[3])
		console.log(photoLink)
	}, [props.pagination]);

	var link =
		"https://lh3.googleusercontent.com/B3iuJcN8-p7zf4Mp7nNVlChrkakecDXzu_q7v4AIH79TQiKAsK-LYcrHzv6BV4yFHlhvfyUcFiDOkI8gO50j9ak81a0Qbu58guWlspRK_qrNHnm9F1WOk65GDMpTXU4NYWIIqOVF9LvM2quwdccY4_27sMLulEG9iHo0Uv4_nAEO2iXa8klAqXtLVoTXuJEiOXsK-KZKd0MmZYBorkiuZ0pMFnQAX1-k7SWrGIwoSQcFVQp_BhkVMnpYokExpjCFCaQPwoDOT1yVm2-bxanXnha3lAys5qO8OCjnbX7GWA8aIl5Vrb6cbRmEIk55j6tjfmXIYwfJtRH3KDQiuT6vaXyCo-Kx1iJ23I9aRKFO8DTHUB_tmOruHGGQe8VF9diK8FnnzX0S7nIfI18Yr3frZUiiCqk30YCG3GLUXL1qThSZB4_wMQUDFVNUPmjr2Ad9XJB7oapNHsn8d3OJ3DgcLfeJ24QbYRAN4Ne_vWCXwOZBZH_kJtmVfHj80JTR6ikCAZ0tDCQt4QsByCa1KEwQTNc0t-B7VOGVrRcX61HkVofHfXZS8O--QNiD2fJt7C1o93UxBhv_8Z3jktAyepqbBhPc35YPYL4d16kzmRGLqPIwXAZNxs469cUPbdX2q_RrDOZRckp1QX8ptnSJQCt1X9ZfpTFtFSfrILnKTrGJrpbCeiKpfyIZ_2v5lGWplQ=w800-h488-no";

	return (
		<Content>
			<Stage
				width={800}
				height={488}
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
