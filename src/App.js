import React from 'react';
import './App.css';
import { Button, List, Layout  } from 'antd';
const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var items = data.items.filter(x => x.title != null);
        this.setState({
          items: items
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Content>
            <List
              header={<div>$ print("iOS有人要")</div>}
              footer={<div>$ <a href="https://github.com/yourenyao/yourenyao-website" target="__blank">提交职位</a> </div>}
              bordered
              dataSource={this.state.items}
              renderItem={item => (
                <List.Item>
                  👋 {item.title} <br/>
                  职位要求：{item.requirement} <br/>
                  工作地点：{item.city.join(",")} <br/>
                  微信联系：{item.wechat}
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App;

