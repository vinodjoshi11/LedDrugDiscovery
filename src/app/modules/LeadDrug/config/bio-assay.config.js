const BIOAssayTableHeaders = [
    { key: "", title: "Select", isRadio: true, },
    { key: "aid", title: "AID" },
    { key: "bioAssay", title: "BIO Assay" },
    { key: "sourceName", title: "Source Name" },
    { key: "substanceType", title: "Substance Type" },
    { key: "outcomeType", title: "Outcome Type" },
    { key: "geneID", title: "Gene ID" }
]
const BIOAssayTableData = [
    {
        isChecked: false, aid: "Text 001", bioAssay: "Text 001", sourceName: "Text 001", substanceType: "Text 001",
        outcomeType: "Text 001", geneID: "Text 001"
    },
    {
        isChecked: false, aid: "Text 001", bioAssay: "Text 001", sourceName: "Text 001", substanceType: "Text 001",
        outcomeType: "Text 001", geneID: "Text 001"
    },
    {
        isChecked: false, aid: "Text 001", bioAssay: "Text 001", sourceName: "Text 001", substanceType: "Text 001",
        outcomeType: "Text 001", geneID: "Text 001"
    },
    {
        isChecked: true, aid: "Text 001", bioAssay: "Text 001", sourceName: "Text 001", substanceType: "Text 001",
        outcomeType: "Text 001", geneID: "Text 001"
    },
    {
        isChecked: false, aid: "Text 001", bioAssay: "Text 001", sourceName: "Text 001", substanceType: "Text 001",
        outcomeType: "Text 001", geneID: "Text 001"
    },
    {
        isChecked: false, aid: "Text 001", bioAssay: "Text 001", sourceName: "Text 001", substanceType: "Text 001",
        outcomeType: "Text 001", geneID: "Text 001"
    },
    {
        isChecked: false, aid: "Text 001", bioAssay: "Text 001", sourceName: "Text 001", substanceType: "Text 001",
        outcomeType: "Text 001", geneID: "Text 001"
    },
]
const BIOAssayFilters = [
    {
        title: "Bio Assay Type :",
        select: true,
        selected:{label:"Screening", value: "Screening" },
        options: [{label:"Screening", value: "Screening" }, {label:"One", value: "One" }],
    }, {
        title: "Source Type :",
        select: true,    
        selected:{label:"3 options selected", value: "3 options selected" }, 
        options: [{label:"3 options selected", value: "3 options selected" }, {label:"2 options selected", value: "2 options selected" }],
    }, {
        title: "Bio Assay Category :",
        select: true,     
        selected:{label:"2 options selected", value: "2 options selected" }, 
        options: [{label:"2 options selected", value: "2 options selected" }, {label:"3 options selected", value: "3 options selected" }],
   
    }
]
export {
    BIOAssayTableData,
    BIOAssayFilters,
    BIOAssayTableHeaders
}