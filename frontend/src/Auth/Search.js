import React,{ createContext, useContext,useState} from 'react'
const SearchContext=createContext();
export const SearchProvider=({children})=>{
    const[value,setvalue]=useState({
        keyword:'',
        result:null,
    });
    
    return(
<SearchContext.Provider value={[value,setvalue]} >
{children}
</SearchContext.Provider>
    )
}
export const useSearch=()=>{
    const context=useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
      }
      return context;
}