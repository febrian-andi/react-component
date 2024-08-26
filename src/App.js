import './App.css'
import { useState } from "react";
import items from './constants/items';
import CardItem from './components/CardItem';

function App() {
  const [item, setItem] = useState(items);
  console.log("Initial items:", item);
  const handleAddItem = () => {
    setItem(item => [
      ...item,
      {
        id: item.length + 1,
        title: "Card " + (item.length + 1),
        body: "Card " + (item.length + 1)
      }
    ]);
  };

  return (
    <div className='container'>
      <div>
        <h1>Task: Add three Card elements</h1>
        <div className='content-center'>
          <div className='wrapper'>
            {item.map(itm => (
              <CardItem title={itm.title} body={itm.body} key={itm.id} />
            ))}
          </div>
        </div>
        <div className='button-wrapper'>
          <button className='add-button' onClick={handleAddItem}>Tambah Item</button>
        </div>
      </div>
    </div>
  );
}
export default App;