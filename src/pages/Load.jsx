

import './load.css';

function App() {

  return (
    <div className=" main overflow-hidden h-[111vh] border bg-transparent  flex justify-center items-center">
      <div className={`left w-1/2 h-full border bg-gradient-to-br  from-[#EE10B0] to-[#0E9EEF] left-door-open`}></div>
      <div className={`right w-1/2 h-full border bg-gradient-to-tl  from-[#EE10B0] to-[#0E9EEF] right-door-open`}></div>
    </div>
  );
}

export default App;
