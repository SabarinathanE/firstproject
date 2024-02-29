import './App.css'
import X from './squareComponent'

function App() {
const data = [
  {title: "square 1",
   value:10},
  {title: "square 2",
  value:20}, 
  {title: "square 3",
  value:30}
];
  return (
 <section>
{
  data.map((d, index) => (
  <X key={index} title={d.title} value={d.value} />
  ))
}
  </section>
  )
}

export default App;
