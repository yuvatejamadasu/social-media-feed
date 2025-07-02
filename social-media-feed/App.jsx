import React from "react"
import CreatePost from "./components/CreatePost"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { examplePosts } from "./components/utils"

const App = () => {
  return (
    <>
      <Header />
      <CreatePost />
      <div className="space-y-6 mt-6">
        {examplePosts.map(post => (
          <Post key={post.id} post={post} onLike={() => {}} />
        ))}
      </div>
    </>
  )
}

export default App
