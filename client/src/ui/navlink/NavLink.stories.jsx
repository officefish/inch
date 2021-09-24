import React from 'react';
import NavLink from "./NavLink";

export default {
    title: 'ui/navLink/NavLink',
    component: NavLink,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

const Template = args => <NavLink {...args}>Hello world</NavLink> ;

export const Primary = Template.bind({});
Primary.args = {
    primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false
};