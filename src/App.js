import Collapse from "./components/Collapse";
import Paragraph from "./components/Paragraph";
import 'App.css';
import React, {useState} from "react";

function App() {
    const [expanded, setExpanded] = useState(true)
    const handleExpandedChange = () => {
        setExpanded((expanded) => !expanded)
    }
    return (
        <div>
            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      expanded={expanded}
                      handleExpandedChange={handleExpandedChange}>
                <Paragraph>
                    Альфа-Банк, основанный в 1990 году, является универсальным банком,
                    осуществляющим все основные виды банковских операций, представленных
                    на рынке финансовых услуг, включая обслуживание частных и корпоративных
                    клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
                </Paragraph>
            </Collapse>
        </div>
    );
}

export default App;
