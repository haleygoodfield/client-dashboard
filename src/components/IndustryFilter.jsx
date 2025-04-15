// IndustryFilter component allows the user to filter clients by industry.
function IndustryFilter({ setIndustry }) {
    return (
        // Dropdown menu to select an industry filter.
        <select onChange={e => setIndustry(e.target.value)}>
            {/* Option to show all clients */}
            <option value="All">All</option>
            
            {/* Option to filter clients in the Finance industry */}
            <option value="Finance">Finance</option>
            
            {/* Option to filter clients in the Tech industry */}
            <option value="Tech">Tech</option>
            
            {/* Option to filter clients in the Retail industry */}
            <option value="Retail">Retail</option>
        </select>
    );
}

export default IndustryFilter;