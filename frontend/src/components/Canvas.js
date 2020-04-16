import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

class Canvas extends React.Component {
	render() {
		return (
			<Content className="site-layout-background">
				<canvas>hello</canvas>
			</Content>
		);
	}
}

export default Canvas;
