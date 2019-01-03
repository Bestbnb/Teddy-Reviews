import React from 'react';
import Page from '../client/src/components/Page.jsx';
import { shallow, mount, render } from 'enzyme';

describe('tests', () => {
  it('should exist', () => {
    const wrapper = shallow(<Page />);
    expect((wrapper).find('.page').exists()).toBe(true);
  });
});
