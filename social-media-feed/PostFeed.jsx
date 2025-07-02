import { useState } from 'react';
import { Post } from './Post';

export const PostFeed = ({ searchQuery }) => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: {
        name: 'Sarah Johnson',
        username: '@sarahj',
        avatar: '/placeholder.svg'
      },
      content: "Just launched my new portfolio website! So excited to share my latest projects with everyone. Thanks to all who supported me along the way! 🚀",
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop',
      timestamp: '2 hours ago',
      likes: 42,
      comments: 8,
      isLiked: false
    },
    {
      id: '2',
      author: {
        name: 'Mike Chen',
        username: '@mikedev',
        avatar: '/placeholder.svg'
      },
      content: "Working on a new React project and loving the new hooks! The developer experience keeps getting better. What's your favorite React feature?",
      timestamp: '4 hours ago',
      likes: 28,
      comments: 12,
      isLiked: true
    },
    {
      id: '3',
      author: {
        name: 'Emily Rodriguez',
        username: '@emilyux',
        avatar: '/placeholder.svg'
      },
      content: "Beautiful sunset from my home office today. Sometimes the best inspiration comes from taking a moment to appreciate the simple things in life. 🌅",
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      timestamp: '6 hours ago',
      likes: 67,
      comments: 15,
      isLiked: false
    },
    {
      id: '4',
      author: {
        name: 'David Park',
        username: '@davidcodes',
        avatar: '/placeholder.svg'
      },
      content: "Coffee shop coding session complete! There's something magical about the ambient noise that helps me focus. Where do you do your best work?",
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      timestamp: '8 hours ago',
      likes: 35,
      comments: 9,
      isLiked: true
    }
  ]);

  const filteredPosts = posts.filter(post => 
    searchQuery === '' || 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLike = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  return (
    <div className="space-y-4">
      {filteredPosts.map((post) => (
        <Post key={post.id} post={post} onLike={handleLike} />
      ))}
      {filteredPosts.length === 0 && searchQuery && (
        <div className="text-center py-8 text-gray-500">
          <p>No posts found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}; 