/* eslint-disable jsx-a11y/anchor-is-valid */
const bioAssayResultTableHeaders = [ 
    { key: "aid", title: "AID",
    custom: (row) => {
        return <a href="#" >{row.leadId}</a>
    } },
    { key: "bioAssay", title: "BIO Assay" },
    { key: "activity", title: "Activity" },
    { key: "aidSourceName", title: "Aid Source Name" },
    { key: "aidName", title: "Aid Name" },
    { key: "targetName", title: "Target Name" }
]
const bioAssayResultTableData = [
    {
        leadId: "01",
        bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "02",
         bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "03",
         bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "04",
         bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "05",
         bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "06",
         bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    }, 
]
const bioAssayResultFilters = [
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
    bioAssayResultTableData,
    bioAssayResultFilters,
    bioAssayResultTableHeaders

}