import './App.css'
import { useState } from 'react'
import useToast from 'toasty-react'

function App() {
  const [Toast, open, Location] = useToast()
  const [popupText, setPopupText] = useState("Time to set the CSS Styling 😎")
  const [fontSize, setFontSize] = useState(16)
  const [color, setColor] = useState("black")
  const [fontStyle, setFontStyle] = useState("normal")
  const [fontWeight, setFontWeight] = useState(400)
  const [fontFamily, setFontFamily] = useState("default")
  const [border, setBorder] = useState("2px solid transparent")
  const [backgroundColor, setBackgroundColor] = useState("#fafafa")

  return (
    <>
      <Toast style={{ color: color, fontFamily: fontFamily, fontStyle: fontStyle, fontWeight: fontWeight, border: border, backgroundColor: backgroundColor }}/>
      <p className="read-the-docs" style={{marginBottom: 0, color: "black"}}>
        Text that will be display on the toast
      </p>
      <input type="text" style={{ width: "100%", marginBottom: "10px" }} onChange={e => setPopupText(e.currentTarget.value)}  placeholder={popupText}/>
      <div>
        <button onClick={() => Location.update(Location.topLeft)} style={{marginRight: 5}}>Top Left</button>
        <button onClick={() => Location.update(Location.bottomLeft)} style={{marginRight: 5}}>Bottom Left</button>
        <button onClick={() => Location.update(Location.topRight)} style={{marginRight: 5}}>Top Right</button>
        <button onClick={() => Location.update(Location.bottomRight)} style={{marginRight: 5}}>Bottom Right</button>
        <button onClick={() => Location.update(Location.topCenter)} style={{marginRight: 5}}>Top Center</button>
        <button onClick={() => Location.update(Location.bottomCenter)} style={{marginRight: 5}}>Bottom Center</button>
      </div>
      <div>
        <label style={{marginRight: 5}}>Font Size:</label>
        <input type="number" value={ fontSize } onChange={e => setFontSize(parseInt(e.currentTarget.value))} style={{ width: 40, marginRight: 5 }} />
        <label style={{marginRight: 5}}>Color:</label>
        <select value={color} onChange={e => setColor(e.currentTarget.value)} style={{marginRight: 5 }}>
          <option>black</option>
          <option>red</option>
          <option>blue</option>
          <option>green</option>
        </select>
        <label style={{marginRight: 5}}>Font Style:</label>
        <select value={fontStyle} onChange={e => setFontStyle(e.currentTarget.value)} style={{marginRight: 5 }}>
          <option>italic</option>
          <option>normal</option>
          <option>oblique</option>
        </select>
        <label style={{marginRight: 5}}>Font Weight:</label>
        <input type="number" value={ fontWeight } onChange={e => setFontWeight(parseInt(e.currentTarget.value))} style={{ width: 40, marginRight: 5 }} />
        <label style={{marginRight: 5}}>Font Family:</label>
        <select value={fontFamily} onChange={e => setFontFamily(e.currentTarget.value)} style={{marginRight: 5 }}>
          <option>"Times New Roman", Times, serif</option>
          <option>Arial, Helvetica, sans-serif</option>
          <option>'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif</option>
          <option>default</option>
        </select>
        <label style={{marginRight: 5}}>Border:</label>
        <input type="text" value={ border } onChange={ e => setBorder(e.currentTarget.value) } style={{ width: 150, marginRight: 5 }} />
        <label style={{marginRight: 5}}>Background Color:</label>
        <input type="text" value={ backgroundColor } onChange={ e => setBackgroundColor(e.currentTarget.value) } style={{ width: 50, marginRight: 5 }} />
      </div>
      <br/>
      <div>
        <button onClick={() => open(<>{popupText}</>)}>Open Pop-up</button>
      </div>
    </>
  )
}

export default App
