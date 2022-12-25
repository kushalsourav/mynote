import React from "react"
import "./FilterCard.css"
const FilterCard = ({labels, toggle,setData, filterLabel, priority, filterPriority, date, setToggle}) => {
    return (
        <div className="filters" style={{display: toggle ? "block" :"none"}}>
            <div className="filter-card">
                <div className="filter-labels">
                    Labels
                    {labels.map(({labelName}) => {
                        return (
                            <label htmlFor={labelName} key={labelName}>
                                <input type="checkbox" id={labelName} className="filter-input" 
                                value={labelName}
                                checked={filterLabel.filterChecked && filterLabel.filterLabelName === labelName}
                                onChange={(e) =>setData({type:"FILTER" ,filterChecked: e.target.checked, filterLabelName:labelName}) }
                                /> {labelName}
                            </label>
                        )
                    })}
                </div>
                <div className="filter-priority">
                    Priority
                    {
                        priority.map(({priorityLevel}) => {
                            return (
                                <label htmlFor={priorityLevel} key={priorityLevel}>
                                <input type="checkbox" id={priorityLevel} className="filter-input"
                                 value={priorityLevel} 
                                 checked={filterPriority.filterChecked && filterPriority.filterPriorityLevel === priorityLevel}
                                onChange={(e) =>setData({type:"PRIORITY" ,filterChecked: e.target.checked, filterPriorityLevel:priorityLevel}) }
                                /> {priorityLevel}
                            </label>
                            )
                        })
                    }
                    <div className="filter-date">
                        Sort By Date
                         <label htmlFor="newest">
                            <input type="checkbox" id="newest"  checked={date === "NEW_TO_OLD"}  
                            onChange={() => {setData({type:"FILTER_DATE", filterByDate:"NEW_TO_OLD"})}}
                            /> new to old
                         </label>
                         <label htmlFor="oldest">
                            <input type="checkbox" id="oldest"  checked={date === "OLD_TO_NEW"}  
                            onChange={() => {setData({type:"FILTER_DATE", filterByDate:"OLD_TO_NEW"})}}
                            /> old to new
                         </label>
                    </div>
                </div>
                <div className="filter-button-clear"><button className="cta-btn btn" onClick={() => setData({type:"CLEAR_FILTER"})}>clear filter</button></div>
                
                <div className="filter-button-close"><button className="cta-btn btn" onClick={() => setToggle()}>Close</button></div>
            </div>
        </div>
    )
}

export default FilterCard