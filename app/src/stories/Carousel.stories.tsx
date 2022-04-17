import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from '../lib/components/Carousel/Carousel';

export default {
  title: 'Component/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel>
    <div>
      <span>민순기</span>
    </div>
    <div>
      <span>박우림</span>
    </div>
    <div>
      <span>심서현</span>
    </div>
    <div>
      <span>김지수</span>
    </div>
  </Carousel>
);

export const Primary = Template.bind({});
Primary.args = {};
