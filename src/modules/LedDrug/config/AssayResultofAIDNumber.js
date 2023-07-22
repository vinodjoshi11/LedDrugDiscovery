
/* eslint-disable jsx-a11y/anchor-is-valid */
const assayResultAIDResultTableHeaders = [
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
    { key: "opener", title: "Opener",isHeaderRadio:true ,isChecked:true}, 
]
const assayResultAIDResultTableData = [
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
const assayResultAIDResultFilters = [
    {
        title: "Bio Assay Type :",
        select: true,
        selected:{label:"Screening", value: "Screening" },
        options: [{label:"Screening", value: "Screening" }, {label:"One", value: "One" }],
    },
    {
        title: "Source Name :",
        select: true,
        selected:{label:"3 options selected", value: "3 options selected" }, 
        options: [{label:"3 options selected", value: "3 options selected" }, {label:"2 options selected", value: "2 options selected" }],
    }
]
export {
    assayResultAIDResultTableData,
    assayResultAIDResultFilters,
    assayResultAIDResultTableHeaders
}