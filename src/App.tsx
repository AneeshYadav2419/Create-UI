
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Cards'
import { CreateContentModal } from './components/CreateContentModal'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
   return (
    <div className='p-4'>
      <CreateContentModal open={true}/>
      <div className='flex justify-end gap-4'>

    <Button variant='primary' text="Add Content" startIcon={<PlusIcon />}></Button>
     <Button variant='secondary' text="Share brain" startIcon={<ShareIcon />}></Button>
      </div>
   
     <div className='flex gap-4'>
       <Card type="twitter"  link="https://x.com/YouTube/status/1937329834381762666/photo/1" title='First Tweet'/>

      <Card type="youtube"  link="https://www.youtube.com/embed/SeEQj02IrbA?si=ZIjtR8qSZ6JTiW_p" title='First Video'/>

     </div>
    
     </div>

  )
}

export default App
