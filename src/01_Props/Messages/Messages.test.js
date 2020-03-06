import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';


describe('Messages component', ()=> {

    // Smoke Test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot Test
    // Will Render the component and create a human-readable JSON file
    // Compare the rendered component to a saved version of the component

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={4}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    // if there are no messages
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={0}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
