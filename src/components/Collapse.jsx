import 'App.css'
import cn from 'classnames'

const Collapse = ({children, handleExpandedChange, expanded, collapsedLabel, expandedLabel}) => {
    return (
        <div className='container'>
            {expanded && children}
            <div className='container-btn'>
            <button className='btn' onClick={handleExpandedChange}>{expanded ? expandedLabel : collapsedLabel}
                <i className={cn({"fa fa-chevron-down": !expanded, "fa fa-chevron-up": expanded})} aria-hidden="true"/>
            </button>

        </div>
        </div>
    )
}
Collapse.defaultProps = {
    collapsedLabel: 'Подробнее',
    expandedLabel: 'Скрыть'
}

export default Collapse