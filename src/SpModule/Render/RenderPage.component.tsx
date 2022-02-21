import { useParams } from "react-router-dom";
import RenderComponent from "./Render.component";

export default function RenderPage() {
    let { uid } = useParams();

    return (
        <RenderComponent uid={uid}/>
    )
}