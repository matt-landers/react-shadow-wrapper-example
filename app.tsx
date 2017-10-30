import * as React from 'react';
import { render } from 'react-dom';
import ShadowWrapper from 'react-shadow-wrapper';


class App extends React.Component {

    render() {
        return (<ShadowWrapper>
            <span>Matt</span>
            <span>Landers</span>
        </ShadowWrapper>);
    }
}

render(<App />, document.getElementById('app'));