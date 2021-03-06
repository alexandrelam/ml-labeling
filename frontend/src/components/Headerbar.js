import React, { Fragment } from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Divider, PageHeader, Button } from "antd";

function Headerbar({ token, setToken, username }) {
    const disconnect = () => {
		setToken("");
		localStorage.clear();
    };

    return (
        <Fragment>
            {token.length !== 0 ? (
                <PageHeader
                    ghost={false}
                    title="ML-Labeling"
                    subTitle="Aidez-nous à améliorer nos algorithmes"
                    extra={[
                        <Button key="2">{username}</Button>,
                        <Button key="1" type="primary" onClick={disconnect}>
                            se déconnecter
                        </Button>,
                    ]}
                ></PageHeader>
            ) : (
                <PageHeader
                    ghost={false}
                    title="ML-Labeling"
                    subTitle="Aidez-nous à améliorer nos algorithmes"
                ></PageHeader>
            )}

            <Divider className="diviseur" />
        </Fragment>
    );
}

export default Headerbar;
