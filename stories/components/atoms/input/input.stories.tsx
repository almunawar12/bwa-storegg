import { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input";

export default {
    title: "Components/Atoms/Input",
    components: Input,
} as Meta;


const Tempalte = (args: InputProps) => <Input {...args} />;

export const Default = Tempalte.bind({});
Default.args = {
    label: "Nama Lengkap",
};