import React from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Layout, PageHeader } from "antd";

function Headerbar() {
	const { Header } = Layout;

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

export default Headerbar;
