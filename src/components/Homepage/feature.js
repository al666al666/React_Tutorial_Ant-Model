import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
    return (
        <div id="feature" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Modern Design" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Modern Design" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Modern Design" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Modern Design" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Modern Design" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Modern Design" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>



                </Row>
            </div>
        </div>
    );
}

export default AppFeature;