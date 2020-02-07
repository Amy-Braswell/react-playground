import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

describe('Messages component', ()=> {

    //array of accordion sections each with title and content
    const sectionsProp = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]

    // Smoke Test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
/*
    // Snapshot Test
    // Will Render the component and create a human-readable JSON file
    // Compare the rendered component to a saved version of the component

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={4}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    */

    // Snapshot Test
    //Had to install enzyme and enzyme-adapter-react-16 to test buttons
    //Enzyme creates a wrapper so we can interact with components
    //Also need to install enzyme-to-json --save-dev to Enzyme can return a JSON snapshot
    it('renders empty given no buttons are clicked', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no active sections by default', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it ('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} /> )
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it ('only opens the last section when multiple sections are clicked', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

});