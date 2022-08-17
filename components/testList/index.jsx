import { ListItem } from "../listItem"
// import { TestItem } from "../testItem"


export function TestList ({functionToTest, tests}) {
  console.log(tests, 'lll')
  return(
    <>
      {tests && tests.map((test) => <ListItem key={0} item={test} list={tests} type='test'/>)}
    </> 
  )
}