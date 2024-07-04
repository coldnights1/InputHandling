import React,{useEffect, useState}from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ email: "", firstname: "", lastname: "",comments:"",isVisible:true,favCar:"Lambo"});
  console.log(formData);
  function changeHandler(event){
   const {value,name,checked,type}=event.target;
    setFormData((prevState)=>{
      return{
        ...prevState,
        [name]:type==="checkbox"? checked:value
      };
    });
  }
  function submitHandler(event){
      event.preventDefault();
      console.log(formData);
  }
    return (
      <div className="gap-10 py-10 border-2">
        <form onSubmit={submitHandler}> 
             <input className="bg-cyan-700 gap-10"
         type="email"
         placeholder="email"
         name="email"
         onChange={changeHandler}
         value={formData.email}
        />    
        <br></br>
         <input className="bg-slate-400 gap-10"
        type="text"
        placeholder="First Name"
        name="firstname"
        onChange={changeHandler}
        value={formData.firstname}
       />
       <br></br>
        <input className="bg-orange-500 gap-10"
         type="text"
         placeholder="last name"
         name="lastname"
         onChange={changeHandler}
         value={formData.lastname}
        />
        <textarea
        placeholder="Enter your comment here "
        name="comments"
        onChange={changeHandler}
        value={formData.comments}
        />
        <input 
         type="checkbox"
         onChange={changeHandler}
         name="isVisible"
         id="isVisible"
         checked={formData.isVisible}
         />
         <label htmlFor='isVisible'>I am a label</label>
         <br></br>
         <input
         type="radio"
           name="mode"
           id="is-Online"
          value="is-Online"
          onChange={changeHandler}
          checked={formData.mode=="is-Online"}
           />
           <label htmlFor='is-Online'>Is Online</label>
           <input
         type="radio"
           name="mode"
           id="is-Offline"
          value="is-Offline"
          onChange={changeHandler}
          checked={formData.mode=="is-Offline"}
           />
           <label htmlFor='is-Offline'>Is Offline</label>
           <br></br>
           <label htmlFor='favCar'>Favourite Car</label>
           <select
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}
           >
          <option value="Lambo">Lambo</option>
          <option value="Mercedes">Mercedes</option>
          <option value="RollsRoyce">RollsRoyce</option>
           </select>
           <br></br>
           <button type='submit'>Submit</button>
           </form>
      </div>
    );
}

export default App;
