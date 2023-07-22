
const predictiveAITableHeaders = [
    {
        key: "index",
        title: "Index" 
    },
    { key: "smiles", title: "SMILES"},
    { key: "", title: "Actions", 
      custom:()=>{
        return (<img src={"./images/delete.png"} alt={""} style={{width: "30px"}}/>)
      }
    },
    { key: "smiles", title: "SMILES"}, 
]
const predictiveAITableData = [
    {
        index: "01",
        smiles: "Text 001",    
    },
    {
        index: "02",
        smiles: "Text 001",  
    },
    {
        index: "03",
        smiles: "Text 001" 
    },
    {
        index: "04",
        smiles: "Text 001" 
    },
    {
        index: "05",
        smiles: "Text 001" 
    },
    {
        index: "06",
        smiles: "Text 001" 
    }
] 
const predictPropertyTableHeader=[
    {
        key: "index",
        title: "Index" 
    },
    { key: "smiles", title: "SMILES"}, 
    { key: "property", title: "Properties"}
];
const predictPropertyTableData=[
    {
        index: "01",
        smiles: "Text 001",  
        property:"Text 001"  
    },
    {
        index: "02",
        smiles: "Text 001",  
        property:"Text 001"  
    },
    {
        index: "03",
        smiles: "Text 001",
        property:"Text 001"   
    },
    {
        index: "04",
        smiles: "Text 001",
        property:"Text 001"   
    },
    {
        index: "05",
        smiles: "Text 001",
        property:"Text 001"   
    },
    {
        index: "06",
        smiles: "Text 001",
        property:"Text 001"   
    }
]
export {
    predictiveAITableData, 
    predictiveAITableHeaders,
    predictPropertyTableHeader,
    predictPropertyTableData
}