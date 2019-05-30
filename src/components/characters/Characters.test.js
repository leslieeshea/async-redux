import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Character component', () => {
  it('renders a character', () => {
    const wrapper = shallow(<Characters characters={[{ id: '1', name: 'aang', img: '/img' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
