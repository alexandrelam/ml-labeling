import React from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Layout, PageHeader } from "antd";


const { Header } = Layout;

class HeaderBar extends React.Component {
	render() {
		return (
			<Header className="header">
				<PageHeader
					className="site-page-header head"
					title="ML-Labeling"
					subTitle="Aidez nous à améliorer nos algorithmes !"
				/>
			</Header>
		);
	}
}

export default HeaderBar;
