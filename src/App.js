import Collapse from "./components/Collapse";
import Paragraph from "./components/Paragraph";
import 'App.css';


const App=()=> {

    return (
        <div>
            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={false}
            >

                <Paragraph>
                    Альфа-Банк, основанный в 1990 году, является универсальным банком,
                    осуществляющим все основные виды банковских операций, представленных
                    на рынке финансовых услуг, включая обслуживание частных и корпоративных
                    клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
                </Paragraph>
            </Collapse>
            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={false}
            >
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi ea eius eligendi
                    exercitationem minus mollitia perferendis quidem reprehenderit sint.
                </Paragraph>
            </Collapse>
            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={false}
            >
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quae!
                </Paragraph>
            </Collapse>

        </div>
    );
}

export default App;
