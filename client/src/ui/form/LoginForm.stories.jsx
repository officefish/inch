import React from 'react';
import LoginForm from "./LoginForm";

export default {
    title: 'ui/form/LoginForm',
    component: LoginForm,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <LoginForm {...args} />;

const Children = <React.Fragment>Welcome <br/> Back</React.Fragment>

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: Children
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    children: Children
};