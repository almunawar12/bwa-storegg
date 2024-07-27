import { Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItem";

export default {
    title: "Components/Molecules/GameItem",
    components: GameItem,
} as Meta;


const Tempalte = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Tempalte.bind({});
Default.args = {
    title: "Mobile Legends",
    category: "Mobile",
    thumbnail: "/img/Thumbnail-1.png",
};