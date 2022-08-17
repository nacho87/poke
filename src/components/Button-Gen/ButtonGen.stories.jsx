import React from 'react';
import ButtonGen from './ButtonGen';
import SvgSprites from '../SvgSprites';

import '../../css/base.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pokedex/Button-Gen',
  component: ButtonGen,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <>
      <SvgSprites />
      <ButtonGen {...args} />
    </>
  )
}
;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'I',
  active: true
};
