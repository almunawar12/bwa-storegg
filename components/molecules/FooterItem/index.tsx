interface FooterItemProps{
    desc: string;
    link?: string;
}
export default function FooterItem(props: Partial<FooterItemProps>) {
    const {desc, link} = props;
    return (
        <li className="mb-6">
            <a href={link} className="text-lg color-palette-1 text-decoration-none">{desc}</a>
        </li>
    )
}
