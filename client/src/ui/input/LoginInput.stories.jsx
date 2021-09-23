import React from 'react';
import LoginInput from "./LoginInput";
import {LoginType} from "./LoginInput";

export default {
    title: 'ui/input/LoginInput',
    component: LoginInput,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <LoginInput {...args} />;

export const PrimaryNickname = Template.bind({});
PrimaryNickname.args = {
    primary: true,
    type: LoginType.Nickname,
};

export const SecondaryNickname = Template.bind({});
SecondaryNickname.args = {
    primary: false,
    type: LoginType.Nickname,
};

export const PrimaryEmail = Template.bind({});
PrimaryEmail.args = {
    primary: true,
    type: LoginType.Email,
};

export const SecondaryEmail = Template.bind({});
SecondaryEmail.args = {
    primary: false,
    type: LoginType.Email,
};

export const PrimaryTel = Template.bind({});
PrimaryTel.args = {
    primary: true,
    type: LoginType.Tel,
};

export const SecondaryTel = Template.bind({});
SecondaryTel.args = {
    primary: false,
    type: LoginType.Tel,
};