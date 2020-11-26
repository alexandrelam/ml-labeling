import React, { useState } from "react";
import { Modal, Layout, Button, Input, Alert } from "antd";
const { TextArea } = Input;

function Sidebar(props) {
    const { Sider } = Layout;
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reportTxt, setReportTxt] = useState("");
    const [alert, setAlert] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const postReport = (e) => {
        setLoading(true);

        let formData = new FormData();
        formData.append("reportMsg", reportTxt);
        formData.append("issue", props.issueList[props.pagination].id);

        fetch(
            "http://127.0.0.1:8000/report/",

            {
                method: "POST",
                headers: new Headers({
                    Authorization:
                        "token 46654af99a9f660cf865ebc44da19dd044049348",
                }),
                body: formData,
            }
        )
            .then(setAlert(true))
            .then(
                setTimeout(() => {
                    setAlert(false);
                    setVisible(false);
                    setLoading(false);
                }, 2000)
            );
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
                <Button type="primary" onClick={props.save}>
                    Envoyer
                </Button>
                <Button type="danger" onClick={showModal}>
                    Signaler
                </Button>
                <Button type="default" onClick={props.deleteAll}>
                    Tout supprimer
                </Button>
            </div>
            <Modal
                visible={visible}
                title="Décrivez l'erreur"
                onOk={postReport}
                onCancel={handleCancel}
                footer={[
                    <Button key="retour" onClick={handleCancel}>
                        Retour
                    </Button>,
                    <Button
                        key="envoyer"
                        type="primary"
                        loading={loading}
                        onClick={postReport}
                    >
                        Envoyer
                    </Button>,
                ]}
            >
                {alert && (
                    <Alert
                        message="Merci de votre feedback !"
                        type="success"
                        showIcon
                    />
                )}
                <TextArea
                    placeholder="280 caractères maximum"
                    onChange={(e) => setReportTxt(e.target.value)}
                    autoSize={{ minRows: 6, maxRows: 6 }}
                />
            </Modal>
        </Sider>
    );
}

export default Sidebar;
