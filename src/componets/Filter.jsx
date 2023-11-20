import React from "react";

const Filter = ({ filter, setFilter, setSort }) =>{
    return(
        <div id="filter">
            <h2>Filtrar:</h2>
            <div id="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                      <option value="All">Todas</option>  
                      <option value="Completed">Completas</option>  
                      <option value="incomplete">Incompletas</option>  
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabetica:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>


        </div>
    )
}
export default Filter