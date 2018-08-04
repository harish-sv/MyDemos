import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// const color = Math.random() > 0.5 ? 'green' : 'red';

// ReactDOM.render(
//     // React.createElement('h2', null, 'Hello React by Harishhh!'),
//     <h2 className="text-center" style={{color}}>Hello React with JSX!!-- {Math.random()}</h2>,
//     document.getElementById('root')
// );

const App = (props) => {
    return(
        <h2 className="text-center">
           {props.headerMessage}
        </h2>
    );
};

App.propTypes = {
    headerMessage: React.PropTypes.string
};

App.defaultProps = {
    headerMessage: "Hello default!!"
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);