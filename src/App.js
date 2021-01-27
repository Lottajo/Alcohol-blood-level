
import './App.css';
import {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcblood, setAlcblood] = useState(0);


  function handleSubmit(e) {
    let result = 0;
    e.preventDefault();

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - (burning * time);

    if (gender === 'male') {
       result = gramsleft / (weight * 0.7);
    } else {
       result = gramsleft / (weight * 0.6);
    }
    setAlcblood(result);
  }


  return (
    <div className="container alert alert-secondary" style={{margin: 30}}>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label>Weight</label>
          <input className="form-control" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Bottles</label>
          <input className="form-control" type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input className="form-control" type="number" value={time} onChange={e => setTime(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <label><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} ></input>Male</label>
          <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} ></input>Female</label>
        </div>
        <div className="form-group">
          <label>Alcohol blood level: </label>
          <output>{alcblood.toFixed(2)}</output>
        </div>
        <button className="btn btn-info">Calculate</button>
      </form>
    </div>
  );
}

export default App;
