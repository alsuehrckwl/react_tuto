// react 모듈은 Component를 만들때 사용
import React from 'react';

// 모든 react component는 첫문자가 대문자인 CamelCase로 작성된다. 
class App extends React.Component {

    sayHey() {
        alert('hey');
    }

    render() {
        
        let text = 'Dev Server';

        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };
        
        // react JSX 에서는 ""로 감싸지 않는다. ()는 가독성을 위하여 사용
        // Component에서 여러 Element를 렌더링 해야 할때는 element들을 container element 안에 포함시켜줘야한다.
        // line 11에서 ()이 붙어있지않음. ()이 붙어있으면 페이지가 로드 될때도 실행되고, 클릭할 때도 실행된다. 
        // jsx 안에서는 if-else 문이 사용불가, 삼항연산을 사용.
        return (
            <div>
                <h1>Hello JW KIM</h1>
                <h2> Welcome to {text}</h2>
                { /* <button onClick={this.sayHey}> Click Me </button>  주석 작성하는법 브라우저 source 에 나타나지 않음  */ }
                <button onClick={this.sayHey}> Click Me </button>
                <p style = {pStyle}>{ 1 == 1 ? 'True' : 'False' }</p>
            </div>
        );
    };
};

export default App;