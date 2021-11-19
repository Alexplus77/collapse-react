import 'App.css'
import cn from 'classnames'

const Collapse = ({children, handleExpandedChange, expanded, collapsedLabel, expandedLabel}) => {
    return (
        <div className='container'>
            {expanded && children}
            <div className='container-btn'>
            <button className='btn' onClick={handleExpandedChange}>{expanded ? expandedLabel : collapsedLabel}</button>
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