import { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Img, ImgProps } from "./index";

export default {
    title: "UIFenextjs/Img",
    component: Img,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ImgProps>> = (args: any) => (
    <Img {...args} />
);

export const Index = Profile.bind({});
const args: ImgProps = {
    src: "",
};
Index.args = args;
