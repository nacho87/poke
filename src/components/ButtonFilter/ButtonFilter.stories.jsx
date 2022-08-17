import React from 'react';
import ButtonFilter from './ButtonFilter';
import SvgSprites from '../SvgSprites';

import '../../css/base.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pokedex/Button-Filter',
  component: ButtonFilter,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <>
      <SvgSprites />
      <ButtonFilter {...args} />
    </>
  )
}
;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'bug',
  active: true
};
