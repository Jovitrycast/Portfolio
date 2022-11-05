import React,{useState} from 'react';
import './index.scss';
import { Container,Nav, NavItem, NavLink,TabContent,TabPane,Row,Col } from 'reactstrap';

function Index(props) {
    
    // State for current active Tab
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }
    return (
        <div className='skillsWrapper p-2 text-light'>
            <Container>
                <h1 className='text-center fw-bold'>Skills</h1>
                <div className="text-center">
                    <div className="skills w-50">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                            className="fs-5 fw-bold bg-dark text-warning border-warning"
                            onClick={() => toggle('1')}
                            >
                            FRONTEND
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className="fs-5 fw-bold text-warning"
                            onClick={() => toggle('2')}
                            >
                            BACKEND
                            </NavLink>
                        </NavItem>
                        </Nav>
                        <TabContent activeTab={currentActiveTab}>
                            <TabPane tabId="1">
                                <Row>
                                <Col sm="12 d-flex justify-content-between p-2 flex-wrap">
                                    <img src={require('../../assets/images/skills-icon/html-5.png')} alt="HTML" />
                                    <img src={require('../../assets/images/skills-icon/css-3.png')} alt="CSS" />
                                    <img src={require('../../assets/images/skills-icon/JavaScript.png')} alt="JavaScript" />
                                    <img src={require('../../assets/images/skills-icon/typescript.png')} alt="typescript" />
                                    <img src={require('../../assets/images/skills-icon/react.png')} alt="react" />
                                    <img src={require('../../assets/images/skills-icon/bootstrap.png')} alt="bootstrap" />
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                <Col sm="12 d-flex justify-content-between p-2 flex-wrap">
                                    <img src={require('../../assets/images/skills-icon/html-5.png')} alt="HTML" />
                                </Col>
                                </Row>
                            </TabPane>  
                        </TabContent>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Index;