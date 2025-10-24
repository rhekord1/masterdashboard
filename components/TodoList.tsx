import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'

const TodoList = () => {
  return (
    <div className=''>
        Calender
        {/* LIST */}
        <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
           {/* LIST ITEM */}
           <Card>
            <div className='flex items-center gap-4'>
              <Checkbox id='item1'/>  
              <label htmlFor='item1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.      
              </label>
            </div>
           </Card>
        </ScrollArea>


    </div>
  )
}

export default TodoList