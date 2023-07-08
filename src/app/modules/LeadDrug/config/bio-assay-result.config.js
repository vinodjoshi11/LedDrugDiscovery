const bioAssayResultTableHeaders = [
    {
        key: "",
        title: "Select",
        custom: (row) => {
            return <a href="#" >{row.leadId}</a>
        }
    },
    { key: "aid", title: "AID" },
    { key: "bioAssay", title: "BIO Assay" },
    { key: "activity", title: "Activity" },
    { key: "aidSourceName", title: "Aid Source Name" },
    { key: "aidName", title: "Aid Name" },
    { key: "targetName", title: "Target Name" }
]
const bioAssayResultTableData = [
    {
        leadId: "01",
        aid: "Text 001", bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "02",
        aid: "Text 001", bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "03",
        aid: "Text 001", bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "04",
        aid: "Text 001", bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "05",
        aid: "Text 001", bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    },
    {
        leadId: "06",
        aid: "Text 001", bioAssay: "Text 001",
        activity: "Text 001", aidSourceName: "Text 001", aidName: "Text 001",
        targetName: "Text 001",
    }, 
]
const bioAssayResultFilters = [
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
    bioAssayResultTableData,
    bioAssayResultFilters,
    bioAssayResultTableHeaders

}