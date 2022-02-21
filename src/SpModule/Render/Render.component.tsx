import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SpFacade from "../sound-poems.facade";



interface RenderComponentProps {
    uid: string | undefined;
}
export default function RenderComponent(props: RenderComponentProps) {

    const { 
        selectCurrentPoem
    } = SpFacade();


    useEffect(() => {
        if (!selectCurrentPoem) {
            console.log('TODO: fetch poem from poem-db if no poem is cached in state --> ' + props.uid)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.uid])

    console.log(selectCurrentPoem);

    const renderLines = () => selectCurrentPoem ? 
        <div className="sp-render-wrapper">
            <h2>{selectCurrentPoem.title}</h2>
            <h3>{selectCurrentPoem.author}</h3>
            <p>{selectCurrentPoem.lines}</p>
        </div> 
        : <div className="sp-render-error">
            <p>There was a problem viewing this poem.</p>
        </div>

    return (
        renderLines()
    )
}