import React, { useState } from "react";
import { Modal, Layout, Button, Input } from "antd";
const { TextArea } = Input;

function Sidebar(props) {
	const { Sider } = Layout;
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setVisible(false);
		}, 3000);
	};

	const handleCancel = () => {
		setVisible(false);
	};

	return (
		<Sider width={300} className="site-layout-background">
			<div className="description">
				<h3>Description</h3>
				{props.issueList.length !== 0 && (
					<p>{Object.values(props.issueList[props.pagination])[2]}</p>
				)}
				<Button type="default" onClick={props.precedent}>
					Précédent
				</Button>
				<Button type="default" onClick={props.suivant}>
					Suivant
				</Button>
				<Button type="primary">Envoyer</Button>
				<Button type="danger" onClick={showModal}>
					Signaler
				</Button>
				<Button type="default" onClick={props.incrementReload}>
					Reload
				</Button>
			</div>
			<Modal
				visible={visible}
				title="Décrivez l'erreur"
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="retour" onClick={handleCancel}>
						Return
					</Button>,
					<Button key="envoyer" type="primary" loading={loading} onClick={handleOk}>
						Submit
					</Button>
				]}
			>
				<TextArea
					placeholder="280 caractères maximum"
					autoSize={{ minRows: 6, maxRows: 6 }}
				/>
			</Modal>
		</Sider>
	);
}

export default Sidebar;