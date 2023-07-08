const particularCompoundResultTableHeaders = [
    {
        key: "activity",
        title: "Activity",
        custom: (row) => {
            return <a href="#">{row.activity}</a>
        }
    },
    { key: "score", title: "Score" , isHeaderRadio:true},
    { key: "compoundMean", title: "Compound Mean",isHeaderRadio:true },
    { key: "hitMiss", title: "Hit/Miss",isHeaderRadio:true },
    { key: "percentHerg", title: "Percent HERG Blockade" ,isHeaderRadio:true},
    { key: "opener", title: "Opener",isHeaderRadio:true }, 
]
const particularCompoundResultTableData = [
    {
        activity: "01",
        score: "Text 001", compoundMean: "Text 001",
        hitMiss: "Text 001",  percentHerg: "Text 001",
        opener: "Text 001",
    },
    {
        activity: "02",
        score: "Text 001", compoundMean: "Text 001",
        hitMiss: "Text 001",  percentHerg: "Text 001",
        opener: "Text 001",
    },
    {
        activity: "03",
        score: "Text 001", compoundMean: "Text 001",
        hitMiss: "Text 001",  percentHerg: "Text 001",
        opener: "Text 001",
    },
    {
        activity: "04",
        score: "Text 001", compoundMean: "Text 001",
        hitMiss: "Text 001",  percentHerg: "Text 001",
        opener: "Text 001",
    },
    {
        activity: "05",
        score: "Text 001", compoundMean: "Text 001",
        hitMiss: "Text 001",  percentHerg: "Text 001",
        opener: "Text 001",
    },
    {
        activity: "06",
        score: "Text 001", compoundMean: "Text 001",
        hitMiss: "Text 001",  percentHerg: "Text 001",
        opener: "Text 001",
    }, 
]
const particularCompoundResultFilters = [
    {
        title: "Bio Assay Type :",
        select: true,
        options: [{ value: "Screening" }, { value: "One" }],
    },
    {
        title: "Source Name :",
        select: true,
        options: [{ value: "3 options selected" }, { value: "2 options selected" }],
    }
]
export {
    particularCompoundResultTableData,
    particularCompoundResultFilters,
    particularCompoundResultTableHeaders
}