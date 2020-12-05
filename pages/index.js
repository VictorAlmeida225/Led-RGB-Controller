import React from 'react';
import { ChromePicker } from 'react-color';

function App() {
    return (
        <div>
            <ColorPicker />
        </div>
    )
}

class ColorPicker extends React.Component {
    state = {
        color: {
            r: '25',
            g: '133',
            b: '247',
            a: '1',
        },
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    render() {
        return (
            <div className="content">
                <ChromePicker 
                color={this.state.color} 
                onChange={this.handleChange} />
                <h1></h1>
            </div>
        )
    }
}

export default App