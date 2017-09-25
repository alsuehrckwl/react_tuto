import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {

    constructor(props) {
        super(props);

        /* 
            state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정.
            -----------
            props와 state의 특성
            ----------------------------------------------------------------------------------
            | 특성                                                  props           state     |
            ----------------------------------------------------------------------------------
            | parent컴포넌트에 의해 값이 변경 될 수 있는가?                   예             아니오     |
            | 컴포넌트 내부에서는 변경 될 수 있는가?                         아니오            예       |
            ----------------------------------------------------------------------------------
        */
        this.state = {
            value: Math.round(Math.random()*100)
        };

        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(randomValue) {
        /* 
            state 를 업데이트 할 때는 this.setState() 메소드를 사용. 
            ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 해줘야함. 
            (bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 할 수 없다.) 
        */
        this.setState({
            value: randomValue
        });
    };

    render() {
        return (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                          body={ this.props.contentBody }/>
                    { /* 
                        state 사용 
                        state 를 렌더링 할 때는 { this.state.stateName } 을 사용.
                    */ }
                    <RandomNumber number={ this.state.value }
                                onUpdate={ this.updateValue } />
            </div>
        );
    };
};

// props의 default 값을 정의해준다.
App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;