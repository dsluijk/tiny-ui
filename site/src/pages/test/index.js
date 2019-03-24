import React, { useState } from 'react';
import { Button, Alert, Icon, Flip, Avatar, Collapse, Message, Modal, Overlay, Badge, Divider } from 'core/component';
import './test.css';

const { Group } = Button;
// const { Item } = Flip;
const { Panel } = Collapse;

const Test = () => {
    const [activeKeys, setActiveKeys] = useState([2]);
    const [visible, setVisible] = useState(false);

    const getHeader = (status) => {
        return (
            <div><Icon type={`${status ? 'add-user' : 'del-user'}`}/>自定义 header</div>
        );
    };

    const _click = () => {
        Message.open('abc');
    };

    return (
        <div style={{ padding: '20px' }}>
            <Button onClick={_click}>Default</Button>
            <Button color="primary" onClick={() => setVisible(true)}>Modal Visible</Button>

            <div>

                {/*<Button link size="xs" color="pink" round>Primary Button</Button>*/}
                {/*<Button color="blue" round>Info Button</Button>*/}
                {/*<Button color="green">Success Button</Button>*/}
                {/*<Button disabled ripple size="sm" color="pink">Primary Button</Button>*/}
                {/*<Button ripple size="sm" color="yellow" round link dash>Primary Button</Button>*/}
                {/*<Button ripple size="sm" color="yellow" round outline dash>Primary Button</Button>*/}
                {/*<Button ripple color="pink" dash onClick={() => console.log('dasdasd')}>Primary*/}
                {/*Button</Button>*/}
                {/*<Button size="lg" color="pink" block round loading>Primary Button</Button>*/}
                {/*<Button color="pink" round outline>Primary Button</Button>*/}
                {/*<Button size="lg" color="pink" loading outline disabled>Primary Button</Button>*/}
            </div>

            <div>
                {/*<Group ripple>*/}
                {/*<Button>Left</Button>*/}
                {/*<Button dash>Middle</Button>*/}
                {/*<Button>Right</Button>*/}
                {/*</Group>*/}
                {/*<Group ripple color="primary" round>*/}
                {/*<Button>Left</Button>*/}
                {/*<Button>Middle</Button>*/}
                {/*<Button>Right</Button>*/}
                {/*</Group>*/}
                {/*<Group ripple color="blue" round>*/}
                {/*<Button>Left</Button>*/}
                {/*<Button>Middle</Button>*/}
                {/*<Button>Right</Button>*/}
                {/*</Group>*/}
                {/*<Group ripple color="green">*/}
                {/*<Button disabled>Left</Button>*/}
                {/*<Button>Right</Button>*/}
                {/*</Group>*/}
            </div>

            <div>
                {/*<Alert closable onClose={() => console.log('abc')}>alert</Alert>*/}
                {/*<Alert type="error" closeText="close now" afterClose={()=> console.log('done')}>alert</Alert>*/}
                {/*<Alert type="warning" closable>alert</Alert>*/}
                {/*<Alert type="success" closable>alert</Alert>*/}

                <Icon type="Info"/>
            </div>

            <div>
                {/*<Flip height={100} style={{width: 400}}>*/}
                {/*<Item style={{backgroundColor: '#f50'}}>*/}
                {/*<div>abc</div>*/}
                {/*</Item>*/}
                {/*<Item style={{backgroundColor: '#9a7'}}>*/}
                {/*<div>efg</div>*/}
                {/*</Item>*/}
                {/*</Flip>*/}
            </div>

            <div>
                {/*<Avatar size={40}>U</Avatar>*/}
                {/*<Avatar>Usa</Avatar>*/}
                {/*<Avatar size={60}>Uus343r</Avatar>*/}
                {/*<Avatar size={100}>Uus343r</Avatar>*/}
                {/*<Avatar shape="square"/>*/}
                {/*<Avatar icon="Info"/>*/}
                {/*<Avatar src="https://ysf.nosdn.127.net/ausunifcvhchdzbexjvxcswemqeojqdf"/>*/}
                {/*<Avatar style={{backgroundColor: '#f56a00'}} onClick={() => {console.log('abs')}}><Icon type="wallet" size={20}/></Avatar>*/}
            </div>

            <Collapse bordered={true} deletable defaultActiveKey={[1, 4]}>
                <Panel header={getHeader} itemKey={1}>
                    <Collapse accordion activeKey={activeKeys} onChange={(keys) => {
                        // console.log(keys);
                        setActiveKeys(keys);
                    }}>
                        <Panel header="abc header" itemKey={2}>
                            Inside collapse
                        </Panel>
                        <Panel header="abc header" itemKey={3}>
                            Inside collapse 2
                        </Panel>
                        <Panel header="abc header" itemKey={4}>
                            Inside collapse 3
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="abc2 header" itemKey={4}>
                    abc2
                </Panel>
            </Collapse>

            <Modal
                // centered
                confirmLoading={false}
                unmountOnClose={false}
                maskClosable={true}
                header="Basic Modal"
                visible={visible}
                animation="slide"
                onCancel={() => {
                    setVisible(false);
                }}
                afterClose={() => {
                    console.log('closed');
                }}
                confirmText="Yes">
                <label>some content...0</label>
                <p>some content...</p>
                <label>some content...</label>
            </Modal>

            {/*<Overlay unmountOnExit={false} isShow={visible} clickCallback={() => setVisible(false)}>*/}
            {/*abc overlay*/}
            {/*</Overlay>*/}

            <div>
                Home
                <Divider type="vertical" dashed/>
                List
                <Divider type="vertical" />
                Details
            </div>

            <Divider>Hello</Divider>
            <Divider dashed>Hello</Divider>
            <Divider/>
            <Divider dashed/>
        </div>
    );
};

export default Test;
