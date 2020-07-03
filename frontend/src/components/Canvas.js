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
    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target.attrs.draggable !== true;
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    const suivant = () => {
        if (props.pagination < props.issueList.length - 1) {
            props.setPagination(props.pagination + 1);
            emptyRectangles();
        }
    };

    const precedent = () => {
        if (props.pagination > 0) {
            props.setPagination(props.pagination - 1);
            emptyRectangles();
        }
    };

    const emptyRectangles = () => {
        setRectangles(() => []);
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
    };

    React.useEffect(() => {
        console.log(props);
        console.log(props.rectanglesList);
        const loadRects = () => {
            if (
                props.rectanglesList.length !== 0 &&
                props.issueList.length !== 0
            ) {
                const active_issue_id = props.issueList[props.pagination].id;
                const filtered_rect = props.rectanglesList.filter(
                    (rec) => rec.issue === active_issue_id
                );

                let array = [...rectangles];

                filtered_rect.map((rec) => {
                    const { width, height, x_coord, y_coord } = rec;
                    const newRect = {
                        x: x_coord,
                        y: y_coord,
                        width: width,
                        height: height,
                        id: array.length,
                    };
                    array.push(newRect);
                    setRectangles(array);
                });
            }
        };

        emptyRectangles();
        props.issueList.length !== 0 &&
            setPhotoLink(Object.values(props.issueList[props.pagination])[5]);
        props.issueList.length !== 0 &&
            setImageWidth(Object.values(props.issueList[props.pagination])[4]);
        props.issueList.length !== 0 &&
            setImageHeight(Object.values(props.issueList[props.pagination])[3]);
        loadRects();
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
                <Button onClick={removeRect} danger>
                    Remove rect
                </Button>
                <Button type="default" onClick={precedent}>
                    Précédent
                </Button>
                <Button type="default" onClick={suivant}>
                    Suivant
                </Button>
            </div>
        </Content>
    );
};

export default Canvas;
