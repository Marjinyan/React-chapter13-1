import {useFetch} from './hooks/useFetch'

const URL = 'https://randomuser.me/api?results=20&inc=name,picture';

const App = () => {
  const [loading, data, error] = useFetch(URL)
  if(loading){
    return <p>Loading...</p>
  } else if(error){
    return <p>ERROR: {error.message}</p>
  }
  return (
    <>
      <ul>
      {
        data.results.map((elm,i) => {
          return <li key={i}>{elm.name.first}</li>
        })
      }
      </ul>
    </>
  )
}
export default App