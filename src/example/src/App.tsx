import { WordpressFeed } from '../../'

function App() {
  return (
    <div className="App">
      <WordpressFeed apiKey={'my-API-KEY'} blogUrl={'www.blog.url.com'} />
    </div>
  )
}

export default App
