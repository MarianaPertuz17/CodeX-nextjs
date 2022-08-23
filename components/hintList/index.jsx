import { ListItem } from '../listItem';


export function HintList ({hintList}) {
  
  
  return(
    <>
      {hintList && hintList.map((hint, index) => <ListItem key={index} item={hint} list={hintList} type='hint'/>)}
    </>
    
  )
}