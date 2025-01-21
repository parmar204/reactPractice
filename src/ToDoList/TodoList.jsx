import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [text, setText] = useState('');
  const [res, setRes] = useState([]);
  const [loaded, setLoaded] = useState(false)

  // Load from local storage when the component mounts
  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem('todos')) || [];
    setRes(savedToDos);
    setLoaded(true)
  }, []);

  // Save to local storage whenever the to-do list updates
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('todos', JSON.stringify(res));
    }
  }, [res, loaded]);

  const handleAdd = (e) => {
    if (e.key === 'Enter' && text.trim()) {
      if (res.includes(text.trim())) {
        alert(`${text} is already in your list`);
        return;
      }

      setRes([...res, text.trim()]);
      setText(''); // Clear the input field
    }
  };

  const handleRemove = (i) => {
    setRes(res.filter((_, index) => index !== i));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-3 mt-5 w-full md:w-[500px] rounded-md shadow-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={text} // Bind the input field to `text` state
            onKeyDown={handleAdd}
            className="border w-full p-1 rounded-md bg-slate-100 focus:outline-blue-500"
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here..."
          />
        </div>
        <div className="p-2 mt-2">
          <p>Your To-Do List Here:</p>
          <div className="flex flex-col items-center gap-2">
            {res.map((r, i) => (
              <div
                key={i}
                className="flex w-full text-white justify-between items-center py-1 px-2 rounded-md bg-blue-400 hover:bg-blue-500"
              >
                <p>{r}</p>
                <button onClick={() => handleRemove(i)}>X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
