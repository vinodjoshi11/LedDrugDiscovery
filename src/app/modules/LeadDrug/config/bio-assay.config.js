const BIOAssayTableHeaders=[
    {key:"",title:"Select",isRadio:true,},
    {key:"aid",title:"AID"},
    {key:"bioAssay",title:"BIO Assay"},
    {key:"sourceName",title:"Source Name"},
    {key:"substanceType",title:"Substance Type"},
    {key:"outcomeType",title:"Outcome Type"},
    {key:"geneID",title:"Gene ID"}
]
const BIOAssayTableData=[ 
    {isChecked:false,aid:"Text 001",bioAssay:"Text 001",sourceName:"Text 001",substanceType:"Text 001",
    outcomeType:"Text 001",geneID:"Text 001"}, 
    {isChecked:false,aid:"Text 001",bioAssay:"Text 001",sourceName:"Text 001",substanceType:"Text 001",
    outcomeType:"Text 001",geneID:"Text 001"}, 
    {isChecked:false,aid:"Text 001",bioAssay:"Text 001",sourceName:"Text 001",substanceType:"Text 001",
    outcomeType:"Text 001",geneID:"Text 001"}, 
    {isChecked:true,aid:"Text 001",bioAssay:"Text 001",sourceName:"Text 001",substanceType:"Text 001",
    outcomeType:"Text 001",geneID:"Text 001"}, 
    {isChecked:false,aid:"Text 001",bioAssay:"Text 001",sourceName:"Text 001",substanceType:"Text 001",
    outcomeType:"Text 001",geneID:"Text 001"}, 
    {isChecked:false,aid:"Text 001",bioAssay:"Text 001",sourceName:"Text 001",substanceType:"Text 001",
    outcomeType:"Text 001",geneID:"Text 001"}, 
    {isChecked:false,aid:"Text 001",bioAssay:"Text 001",sourceName:"Text 001",substanceType:"Text 001",
    outcomeType:"Text 001",geneID:"Text 001"}, 
]
const BIOAssayFilters=[
    {
    title:"Bio Assay Type :",
    select:true,
    options:[{value:"Screening"},{value:"One"}], 
},{
    title:"Source Type :",
    select:true,
    options:[{value:"3 options selected"},{value:"2 options selected"}],  
},{
    title:"Bio Assay Category :",
    select:true,
    options:[{value:"2 options selected"},{value:"2 options selected"}],  
}
]
export {
    BIOAssayTableData,
    BIOAssayFilters,
    BIOAssayTableHeaders
}