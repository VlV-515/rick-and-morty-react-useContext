import Characters from './components/Characters'
import CharactersContextProvider from './context/charactersContext'
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='alert alert-success text-center'>Rick and Morty App</h1>
        <CharactersContextProvider>
          <Characters />
        </CharactersContextProvider>
      </div>
    </div>
  )
}

export default App
