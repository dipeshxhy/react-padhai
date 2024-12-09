import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'

const TodoDialog = ({show,onClose,todo}) => {
  return (
    <Dialog open={show} onOpenChange={onClose} >
        <DialogContent>
            <DialogHeader>
                
                <h1>{todo.id}</h1>
                <h3 className='text-lg font-semibold'> {todo.todo}</h3>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default TodoDialog