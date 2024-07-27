interface RowProps {
    label: string;
    vlaue: string | number;
    className?: string;
}

export default function Row(props: Partial<RowProps>) {
    const { label, vlaue, className } = props;
    return (
        <p className={`text-lg color-palette-1 mb-20 ${className}`}>{label} <span
            className="purchase-details">{vlaue}</span></p>
    )
}
