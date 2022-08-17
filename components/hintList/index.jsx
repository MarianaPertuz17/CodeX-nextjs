import { ListItem } from '../listItem';


export function HintList ({hintList}) {
  
  
  return(
    <>
      {hintList && hintList.map((hint) => <ListItem key={0} item={hint} list={hintList} type='hint'/>)}
    </>
    
  )
}