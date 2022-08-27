import React from 'react';
import Search from './Search';
import SvgSprites from '../SvgSprites';

import '../../css/base.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pokedex/Search',
  component: Search,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <>
      <SvgSprites />
      <Search {...args} />
    </>
  )
}
;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'medium',
  active: true
};