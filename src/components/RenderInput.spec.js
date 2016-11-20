import React from 'react';
import {render} from 'enzyme';
import RenderInput from './RenderInput.jsx';

describe('<RenderInput />', () => {
  it('renders input.text-box correct type', () => {
    const wrapper = render(<RenderInput input={{type: 'hidden'}} touched={false} />);
    const wrappedInput = wrapper.find('input.text-box');

    expect(wrappedInput.length).toEqual(1);
    expect(wrappedInput[0].attribs.type).toEqual('hidden');
  });

  it('outputs an error', () => {
    const errorText = 'Please enter a value!';
    const props = {
      input: {
        type: 'text'
      },
      touched: true,
      error: errorText
    };
    const wrapper = render(<RenderInput {...props} />);
    const wrappedError = wrapper.find('span.error');

    expect(wrappedError.length).toEqual(1);
    expect(wrappedError.text()).toEqual(errorText);
  });
});
