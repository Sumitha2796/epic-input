import React, { useState } from "react"

const Content = () => {
  let [input, setInput] = useState("")
  let [items, setItems] = useState([])
  let [editindex, setEditindex] = useState(null)
  let [isEditing, setIsediting] = useState(false)
  let handleInput = (event) => {
    setInput(event.target.value)
  }
  let handleButton = () => {
    if (!isEditing) {
      if (input.trim()) {
        setItems((previnput) => {
          return [...previnput, input]
        })
        setInput("")
      }
    } else {
      let updateitem = [...items]
      updateitem[editindex] = input
      setItems(updateitem)
      setIsediting(false)
      setEditindex(null)
      setInput("")
    }
  }
  let handleDelete = (id) => {
    let newlistitem = items.filter((items, index) => id !== index)
    setItems(newlistitem)
    setIsediting(false)
    setEditindex(null)
  }
  let handleupdate = (id) => {
    setInput(items[id])
    setEditindex(id)
    setIsediting(true)
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleButton} style={{ backgroundColor: "lightblue" }}>
        {isEditing ? "Save" : "Add"}
      </button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              {index + 1}.{item}
              <button
                onClick={() => handleDelete(index)}
                style={{ backgroundColor: "lightcoral", marginRight: "10px" }}
              >
                Delete
              </button>
              <button
                onClick={() => handleupdate(index)}
                style={{ backgroundColor: "lightgreen", marginRight: "10px" }}
              >
                Update
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Content
