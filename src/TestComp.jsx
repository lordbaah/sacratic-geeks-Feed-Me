import { useState } from "react"

const TextComp = () => {
  // initailly the modal is open so it is fale
  const [ModalOpen, setMOdalOpen] = useState(false);
  const [activeGenderCategory, setactiveGenderCategory] = useState('All');
  const [Search, setSearch] = useState('');
  // this is used to open the modal initially it is set empty
  const [viewHistory, setviewHistory] = useState({ id: null, name: '', history: [] });

  // ...new Set removes duplicate items
  const genderList = ['All', ...new Set(people.map(person => person.gender))]
  // console.log(genderList);

  const filterPersons = people.filter( person =>
    // initail category is All
    (activeGenderCategory === 'All' || person.gender === activeGenderCategory) &&
    (person.name.toLowerCase().includes(Search.toLowerCase()))
  )

  console.log(people.filter( person => person.name.toLowerCase().includes('a')));

  // here open modal is now true and setviewHistory will take the peron id,name and history
  const handleModalOpen = (id, name, history) =>{
    setMOdalOpen(true)
    setviewHistory({id, name, history})
    console.log(viewHistory);
    // console.log('hello it is opened')
  }

  const handleModalClose = () =>{
    setMOdalOpen(false)
    // console.log('hello it is closed')
  }

  return (
    <div className="custom-screen">
        <div>
          <input type="text" placeholder="enter name...." className="border border-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>search</button>
        </div>

        <div className="flex gap-4">
          {
            genderList.map((gender) => (
              <button 
              key={gender}
              onClick={() => setactiveGenderCategory(gender)}
              className={`py-3 px-4 
                ${activeGenderCategory === gender
                  ?`bg-green-500`
                  :`bg-gray-400`
                }`}
              >{gender}</button>
            ))
          }
        </div>

        <div className="grid grid-cols-3 gap-4">
          {
            filterPersons.map((person) => (
              <div key={person.id} className="border border-red-600 p-8">
                <p>{person.name}</p>
                <p>{person.gender}</p>
                {/* clicking on this accept id,name and history as parameter to display modal */}
                 <button onClick={() => handleModalOpen(person.id, person.name, person.history)} 
                 className={`bg-green-800 text-white 
                  ${ModalOpen == true
                  ? `bg-orange-500 text-black`
                  : ``
                  }`}>view History</button>
              </div>
            ))
          }
        </div>


        {
          ModalOpen && (
          <div className="w-full h-full fixed inset-0 bg-black bg-opacity-50 grid place-items-center">
            {/* setViewHistroy now contains items so map them where neccessary */}
            <div className={`bg-orange-300 p-8 max-w-96`}>
              <p>{viewHistory.name}</p>
              <ul>
                {
                  viewHistory.history.map((personhistory, index) =>(
                    <li key={index}>{personhistory}</li>
                  ))
                }
              </ul>
              <button onClick={handleModalClose} className='bg-red-600'>close</button>
            </div>
          </div>
          )
        }
    </div>
  )
}

const people = [
  {
    'id' : 1,
    'name' : 'John',
    'gender' : 'male',
    'history' :[
      'born in Kumasi',
      'lived in Accra',
      'Work as a Trader'
    ]
  },
  {
    'id' : 2,
    'name' : 'Mary',
    'gender' : 'Female',
    'history' :[
      'born in Bolga',
      'lived in Tamale',
      'Work as a Teacher'
    ]
  },
  {
    'id' : 3,
    'name' : 'Joe',
    'gender' : 'male',
    'history' :[
      'born in Suyani',
      'lived in Kumasi',
      'Work as a Police officer'
    ]
  },
  {
    'id' : 4,
    'name' : 'Adwoa',
    'gender' : 'Female',
    'history' :[
      'born in Ho',
      'lived in Kumasi',
      'Work as a Imigration officer'
    ]
  },
  {
    'id' : 5,
    'name' : 'Andy',
    'gender' : 'male',
    'history' :[
      'born in Nigeria',
      'lived in Ghana',
      'Work as a Bank Manager'
    ]
  },
]

export default TextComp
