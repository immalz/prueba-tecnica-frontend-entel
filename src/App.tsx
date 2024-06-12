import './App.css';
import { useFetch } from './hooks/useFetch';
import { User } from './interfaces/User';

import Card from './components/Card';

import cardStyle from './styles/Card.module.css';

function App() {
  const url: string = 'https://jsonplaceholder.typicode.com/users';

  const { data, loading, error } = useFetch(url);


  return (
    <>
      {error && <div>Error: {error}</div>}

      {loading && <div>Loading...</div>}
      
      <div className={cardStyle.cards}>
        { data?.map((user: User) => 
          <Card user={user} />
        )}
      </div>
    </>
  )
}

export default App
