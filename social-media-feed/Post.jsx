import { useState } from 'react';
import { Heart, MessageSquare, Users } from 'lucide-react';
import { Button } from './ui/button';
// If you have Card, Avatar, Input components, import them here. Otherwise, use simple HTML elements or create stubs.
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';

export const Post = ({ post, onLike }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                <span className="text-gray-500 text-sm">{post.author.username}</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-500 text-sm">{post.timestamp}</span>
              </div>
              <p className="text-gray-800 mt-2 leading-relaxed">{post.content}</p>
            </div>
            
            {post.image && (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onLike(post.id)}
                  className={`transition-all duration-200 hover:scale-110 ${
                    post.isLiked 
                      ? 'text-red-500 hover:text-red-600' 
                      : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <Heart 
                    className={`w-4 h-4 mr-2 ${post.isLiked ? 'fill-current' : ''}`} 
                  />
                  {post.likes}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowComments(!showComments)}
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {post.comments}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-green-500 transition-colors duration-200"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            {showComments && (
              <div className="border-t pt-3 space-y-3 animate-fade-in">
                <form onSubmit={handleComment} className="flex space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" alt="Your avatar" />
                    <AvatarFallback className="bg-blue-500 text-white text-xs">YU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex space-x-2">
                    <Input
                      placeholder="Write a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="text-sm"
                    />
                    <Button type="submit" size="sm" disabled={!newComment.trim()}>
                      Post
                    </Button>
                  </div>
                </form>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Comments will appear here when implemented!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 