//lam viec voi checkbox
// import {useState} from 'react'
// function App() {
//   const [checked, setChecked] = useState([]);
//   console.log(checked);
//   const handleCheck = (id) => {
//     setChecked(prev => {
//       let isChecked = checked.includes(id);
//       if (isChecked){
//         return checked.filter(item => item !== id);
//       } else 
//         return [...prev, id];
//     })
//   }
//   const courses = [
//     {
//       id: 1,
//       name: 'HTML, CSS'
//     },
//     {
//       id: 2,
//       name: 'Javascript'
//     },
//     {
//       id: 3,
//       name: 'ReactJS'
//     }
//   ]
//   return (
//     <div>
//       {courses.map(e => (
//         <div key={e.id}>
//           <input  55
//             type = "checkbox"  
//             checked = {checked.includes(e.id)}
//             onChange = {() => handleCheck(e.id)}
//           />
//           {e.name}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



import {useState} from 'react'
function App() {
  
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() =>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    console.log(storageJobs);
    return storageJobs;
  });
  
  const handleClick = () => {
    setJobs(prev => {
      if (job === '') return [...prev];
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
    setJob('');
  }
  return (
    <div>
      <input
        value = {job}
        onChange = {e => setJob(e.target.value)}
      />
      <button onClick ={handleClick}>Add</button>
      <ul>
        {jobs.map((item, index) =>(
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;


