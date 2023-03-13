import React, {useState} from 'react';
import {TaskProvider, useTask} from './TaskContext';

export default function NewTask() {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('medium');
    const [description, setDescription] = useState('');
    const [taskId, setTaskId] = useState(0)

    const selectPriorities = [
        {
            "id": 0,
            "name": "low",
        },
        {
            "id": 1,
            "name": "medium",
        },
        {
            "id": 2,
            "name": "high",
        },
        {
            "id": 3,
            "name": "very high",
        },
    ];

    const priorities = selectPriorities.map(item => {
        return <option key={item.id} value={item.name}>{item.name}</option>
    });

    const valid = title && priority && dueDate && description


    const { addTask } = useTask();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskId(taskId+1)
        let newTask = {
            taskId,
            title,
            priority,
            dueDate,
            description
            }
        setTitle('');
        setPriority('medium');
        setDueDate('');
        setDescription('');
        addTask(newTask)
    }

    return(
        <div>
        <form onSubmit={handleSubmit} className="create-task">
            <fieldset>   
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} />

                <label htmlFor="priorities">priority</label>
                <select name="priorities" id="priorities" value={priority} onChange={e => setPriority(e.target.value)}>
                    {priorities}
                </select>

                <label htmlFor="date">Pick a due date</label>
                <input type="date" name="dueDate" id="dueDate" value={dueDate} onChange={e => setDueDate(e.target.value)} />
                
                <label htmlFor="description">Task description</label>
                <textarea name="description" id="description" value={description} onChange={e => setDescription(e.target.value)} />
                
                <button type="submit" disabled={!valid}>save task</button>
            </fieldset>
        </form>
        </div>
    )

}