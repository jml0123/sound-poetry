

interface RenderProps {
    text: string;
}

export default function RenderComponent(props: RenderProps) {
    return (
        <p>{props.text}</p>
    )
}