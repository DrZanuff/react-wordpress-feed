import { WordpressFeed } from '../../'

function App() {
  return (
    <div className="App">
      <WordpressFeed
        blogUrl="https://renemorozowich.com/"
        totalPosts={8}
        options={{
          renderVisitLink: true,
          cardLink: true,
          visitLinkText: 'Veja Mais',
          renderImage: true,
          imageMaxHeight: 150,
          titleLines: 1,
          titleMinHeight: 18,
          bodyLines: 5,
          bodyMinHeight: 80,
          postItemWidth: 500,
          compactMode: true
        }}
      />
    </div>
  )
}

export default App
