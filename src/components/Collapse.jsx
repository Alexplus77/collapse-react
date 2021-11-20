import 'App.css'
import cn from 'classnames'
import React,  {useState} from "react";

const Collapse = ({children, collapsedLabel, expandedLabel, isExpanded}) => {
    const [expanded, setExpanded] = useState(isExpanded)
    const handleExpandedChange = () => {
        setExpanded((expanded) => !expanded)
    }
    return (
        <div className='container'>
            {expanded && children}
            <div className='container-btn'>
                <button className='btn'
                        onClick={handleExpandedChange}>{expanded ? expandedLabel : collapsedLabel}</button>
                <i className={cn("fa fa-chevron-up", {"fa fa-chevron-down": !expanded})} aria-hidden="true"/>
            </div>
        </div>
    )
}
Collapse.defaultProps = {
    collapsedLabel: 'Подробнее',
    expandedLabel: 'Скрыть'
}

export default Collapse