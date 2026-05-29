import { useState } from 'react'
function Listmapping(){
  const [items, setItems]   = useState(["Apple", "Banana"])
  const [input, setInput]   = useState("")
  // Add item
  function addItem() {
    if (input.trim() === "") return
    setItems([...items, input])
    setInput("")
  }
  // Delete item
  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>Shopping List</h1>
      {/* Input */}
      <input
        type="text"
        placeholder="Add item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addItem()}
      />
      <button onClick={addItem}>Add ➕</button>
      {/* List */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      {/* Count */}
      <p>Total Items : {items.length}</p>
    </div>
  );
}
export default Listmapping;