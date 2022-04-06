import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from '../lib/components/Carousel/Carousel';

export default {
  title: 'Component/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const array = [
  <>
    <span>민순기</span>
  </>,
  <>
    <span>심서현</span>
  </>,
  <>
    <span>박우림</span>
  </>,
  <>
    <span>김지수</span>
  </>,
];

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  array: array,
};
