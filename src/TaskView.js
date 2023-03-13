import React, {useState} from 'react';
import {TaskProvider, useTask} from './TaskContext';
import NewTask from './NewTask'
import flag from './assets/flag.png' 
import clock from './assets/clock.png' 
import search from './assets/search.png'

export default function TaskView() {
    const { task, clearTask } = useTask();
    const [searchContent, setSearchContent] = useState('');
    const taskList = task.map(item => {
        return <div key={item.id} className="task-card" id={item.id}>
            <p className="task-title">{item.title}</p>
            <div className="task-details">
                <div className="task-priority">
                    <img src={flag} alt="" />
                    <p className="task-priority">{item.priority}</p>
                </div>
                <div className="task-due-date">
                    <img src={clock} alt="" />
                    <p className="task-due-date">{item.dueDate}</p> 
                </div>
            </div>
            <p className="task-description">{item.description}</p>
            </div>
    });

    return(
        <div className="total-view">
        <div className="task-overview">
            <div className="search-container"><label htmlFor="searchbar"><img src={search} alt="" id="search-icon"/></label>
                <input type="text" name="searchbar" id="searchbar" placeholder="search..." value={searchContent} onChange={e => setSearchContent(e.target.value)} />
            </div>
            <div className="task-list">
            {taskList}
            </div>
            <button type="button" disabled={!task} onClick={clearTask}>clear tasks</button>
        </div>
        <NewTask />
        </div>
    )

}