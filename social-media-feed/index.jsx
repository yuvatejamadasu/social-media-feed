import React, { useState } from "react"
import CreatePost from "./CreatePost"
import { Header } from "./Header"
import { Post } from "./Post"
import { UserProfile } from "./UserProfile"
import { examplePosts } from "./utils"

const Index = () => {
  const [activeView, setActiveView] = useState("feed");
  return (
    <>
      <Header activeView={activeView} setActiveView={setActiveView} />
      {activeView === "profile" ? (
        <UserProfile />
      ) : (
        <>
          <CreatePost />
          <div className="space-y-6 mt-6">
            {examplePosts.map(post => (
              <Post key={post.id} post={post} onLike={() => {}} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Index
