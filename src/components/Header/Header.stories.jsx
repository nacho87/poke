import SvgSprites from '../SvgSprites';
import Header from './Header';

export default {
  title: 'Pokedex/Header',
  component: Header
}

const Template = (args) => {
  return (
    <>
      <SvgSprites />
      <Header {...args} />
    </>
  )
};

export const Primary = Template.bind({});