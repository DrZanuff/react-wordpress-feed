import { WordpressFeed } from '../../'

function App() {
  return (
    <div className="App">
      <WordpressFeed
        blogUrl="https://renemorozowich.com/"
        totalPosts={5}
        options={{ renderVisitLink: true, visitLinkText: 'Veja Mais' }}
      />
    </div>
  )
}

export default App
