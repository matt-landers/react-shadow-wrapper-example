import * as React from 'react';
import { render } from 'react-dom';
import ShadowWrapper from 'react-shadow-wrapper';


class App extends React.Component {

    render() {
        return (<ShadowWrapper>
            <span>Matt</span>
            <br/>
            <span>Landers</span>
        </ShadowWrapper>);
    }
}

render(<App />, document.getElementById('app'));

class TypicalApp extends React.Component {
    
    render() {
        return (<div>
            <span>Matt</span>
            <br/>
            <span>Landers</span>
        </div>);
    }
}

render(<TypicalApp />, document.getElementById('typicalapp'));