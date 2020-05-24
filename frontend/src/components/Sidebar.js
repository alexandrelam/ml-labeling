import React from "react";
import { Layout, Button } from "antd";

function Sidebar() {
	const { Sider } = Layout;

	return (
		<Sider width={300} className="site-layout-background">
			<div className="description">
				<h3>Description</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Velit architecto deleniti laudantium, numquam, eos magni
					aliquid tenetur labore sed officiis pariatur debitis quos
					sapiente alias mollitia! Iure hic, est quia.
				</p>
				<Button type="primary">Envoyer</Button>
				<Button type="danger">Signaler</Button>
			</div>
		</Sider>
	);
}

export default Sidebar;
