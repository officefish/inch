import React from 'react';
import ToggleEyeInput from "./ToggleEyeInput";

export default {
    title: 'ui/input/ToggleEyeInput',
    component: ToggleEyeInput,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <ToggleEyeInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    checked: false,
};

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = {
    primary: true,
    checked: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    checked: false,
};

export const SecondaryChecked = Template.bind({});
SecondaryChecked.args = {
    primary: false,
    checked: true,
};
