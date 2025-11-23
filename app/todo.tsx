import React, { useState } from 'react';

// --- Icons ---
const Icons = {
  BarChart: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  TrendingUp: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Plus: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Trash: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
  ),
  Check: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
};

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAddTask();
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Tasks</h2>
        <p className="text-gray-500 mt-1">Manage your daily tasks and track progress</p>
      </div>

      {/* Weekly Report Banner */}
      <div className="bg-[#F3E8FF] border border-purple-100 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-md shadow-purple-200 flex-shrink-0">
            <Icons.BarChart className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Weekly Report Available</h3>
            <p className="text-gray-600 text-sm">See how you've progressed this week</p>
          </div>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm text-sm whitespace-nowrap">
          View Weekly Report
        </button>
      </div>

      {/* Main Tasks Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        
        {/* Card Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Icons.TrendingUp className="text-blue-600" />
            <h3 className="font-bold text-gray-900 text-lg">Today's Tasks</h3>
          </div>
          <p className="text-gray-500 text-sm">Manage your daily health and wellness tasks</p>
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-3 mb-8">
          <input 
            type="text" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
          />
          <button 
            onClick={handleAddTask}
            className="bg-[#0EA5E9] hover:bg-sky-600 text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all active:scale-95"
          >
            <Icons.Plus className="text-white" />
          </button>
        </div>

        {/* Task List or Empty State */}
        {tasks.length === 0 ? (
          <div className="text-center py-12 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-sm">No tasks yet. Add your first task above!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`group flex items-center justify-between p-4 rounded-xl border transition-all ${
                  task.completed 
                    ? 'bg-gray-50 border-gray-100' 
                    : 'bg-white border-gray-100 hover:border-blue-100 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                      task.completed 
                        ? 'bg-green-500 border-green-500' 
                        : 'bg-white border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {task.completed && <Icons.Check className="text-white" />}
                  </button>
                  <span className={`text-gray-700 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    {task.text}
                  </span>
                </div>
                
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2"
                  title="Delete task"
                >
                  <Icons.Trash />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}