import "./ProcessCardList.css";
import ProcessCard from "../ProcessCard/ProcessCard";

function ProcessCardList({processes}) {
    return (
        <section className="processes">
            <ul className="processes-list">
                {
                    processes.map(process => <ProcessCard process={process}/>)
                }
            </ul>
        </section>
    )
}

export default ProcessCardList;