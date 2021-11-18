import 'App.css'

const Collapse = ({children, handleExpandedChange, expanded, collapsedLabel, expandedLabel}) => {
    return (
        <div>
            {expanded && children}
            <button onClick={handleExpandedChange}>{expanded ? expandedLabel : collapsedLabel}</button>
        </div>
    )
}

export default Collapse