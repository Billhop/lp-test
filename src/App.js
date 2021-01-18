import { Layout, Row, Col } from 'antd';
import logo from './assets/billhop-logo.svg';
import './App.less';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{minHeight: "100vh"}}>
    <Header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </Header>
    <Row justify="center">
      <Col span={20}>
        <Content className="App">
          Your empty canvas 🧑‍🎨
        </Content>
      </Col>
    </Row>
    </Layout>
  );
}

export default App;
