import React from "react";
import { Layout, Button, Alert, Space } from "antd";
import { Stage, Layer } from "react-konva";
import "../App.css";
import URLImage from "./URLImage";
import Rectangle from "./Rectangle";

const { Content } = Layout;

const Canvas = (props) => {
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

    const addRect = () => {
        let array = [...props.rectangles];
        const newRect = {
            x: Math.floor(Math.random() * 300),
            y: Math.floor(Math.random() * 300),
            width: 100,
            height: 100,
            id: array.length,
        };
        array.push(newRect);
        props.setRectangles(array);
    };

    const removeRect = () => {
        let array = [...props.rectangles];
        array.pop();
        props.setRectangles(array);
    };

    React.useEffect(() => {
        const loadRects = () => {
            if (
                props.rectanglesList.length !== 0 &&
                props.issueList.length !== 0
            ) {
                const active_issue_id = props.issueList[props.pagination].id;
                const filtered_rect = props.rectanglesList.filter(
                    (rec) => rec.issue === active_issue_id
                );

                let array = [...props.rectangles];

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
                    props.setRectangles(array);
                });
            }
        };

        props.issueList.length !== 0 &&
            setPhotoLink(Object.values(props.issueList[props.pagination])[5]);
        props.issueList.length !== 0 &&
            setImageWidth(Object.values(props.issueList[props.pagination])[4]);
        props.issueList.length !== 0 &&
            setImageHeight(Object.values(props.issueList[props.pagination])[3]);
        loadRects();
    }, [props.pagination]);

    return (
        <Content>
            <Space direction="vertical" size="large">
                {props.alert && <Alert message="Sauvegarde réussi !" type="success" showIcon />}
                <Stage
                    width={imageWidth}
                    height={imageHeight}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                >
                    <Layer>
                        <URLImage src={photoLink} />
                        {props.rectangles.map((rect, i) => {
                            return (
                                <Rectangle
                                    key={i}
                                    shapeProps={rect}
                                    isSelected={rect.id === selectedId}
                                    onSelect={() => {
                                        selectShape(rect.id);
                                    }}
                                    onChange={(newAttrs) => {
                                        const rects = props.rectangles.slice();
                                        rects[i] = newAttrs;
                                        props.setRectangles(rects);
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
            </Space>
        </Content>
    );
};

export default Canvas;
