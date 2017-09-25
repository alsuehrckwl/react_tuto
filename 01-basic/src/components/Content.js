import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p> { this.props.body } </p>
            </div>
        );
    };
};

// props의 Type Validate
// Type이 일치하지않을 때 콘솔에서 오류 메시지가 나타난다.
Content.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired
};

export default Content;