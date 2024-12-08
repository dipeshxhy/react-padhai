import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import TodoDialog from './TodoDialog'

const TodoItem = ({data}) => {
    const [showDialog,setShowDialog]=useState(false)
    console.log(data)
  return (
    <div>
        <Card className="min-w-[25%] min-h-60 flex flex-col justify-between items-center">
            <CardContent>
                <CardHeader className="text-lg font-bold text-ellipsis line-clamp-2">
                    {data.todo}
                </CardHeader>
            </CardContent>
            <CardFooter>
                <Button onClick={()=>setShowDialog(true)}>Details</Button>
            </CardFooter>
        </Card>
        {
            showDialog &&
            <TodoDialog
                show={showDialog}
                onClose={()=>setShowDialog(false)}
                todo={data}
            />
        }
    </div>
  )
}

export default TodoItem