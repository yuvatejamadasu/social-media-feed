import { useState } from 'react';
import { Users, Heart, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

// Simple Tabs stubs if you don't have a Tabs component
const Tabs = ({ defaultValue, children, className }) => <div className={className}>{children}</div>;
const TabsList = ({ children, className }) => <div className={className}>{children}</div>;
const TabsTrigger = ({ value, children }) => <button type="button">{children}</button>;
const TabsContent = ({ value, children, className }) => <div className={className}>{children}</div>;

export const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const userPosts = [
    {
      id: '1',
      content: 'Just launched my new portfolio website! So excited to share my latest projects with everyone.',
      timestamp: '2 hours ago',
      likes: 42,
      comments: 8,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop'
    },
    {
      id: '2',
      content: 'Working on some exciting new features. Can\'t wait to share them with the community!',
      timestamp: '1 day ago',
      likes: 28,
      comments: 5
    },
    {
      id: '3',
      content: 'Beautiful morning for a coffee and some coding. Hope everyone has a great day!',
      timestamp: '3 days ago',
      likes: 67,
      comments: 12,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop'
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder.svg" alt="Your profile" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl">
                YU
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Name</h2>
                <p className="text-gray-600">@yourusername</p>
              </div>
              <p className="text-gray-700">
                Full-stack developer passionate about creating amazing user experiences. 
                Love working with React, TypeScript, and modern web technologies.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <span><strong className="text-gray-900">1,234</strong> Following</span>
                <span><strong className="text-gray-900">5,678</strong> Followers</span>
                <span><strong className="text-gray-900">89</strong> Posts</span>
              </div>
            </div>
            <Button
              onClick={() => setIsFollowing(!isFollowing)}
              variant={isFollowing ? "outline" : "default"}
              className="transition-all duration-200"
            >
              <Users className="w-4 h-4 mr-2" />
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          </div>
        </CardHeader>
      </Card>
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="space-y-4 mt-6">
          {userPosts.map((post) => (
            <Card key={post.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.timestamp}</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed">{post.content}</p>
                  {post.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={post.image} 
                        alt="Post content" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center space-x-6 pt-2 text-gray-500">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="media" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {userPosts.filter(post => post.image).map((post) => (
              <div key={post.id} className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Media post" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="likes" className="mt-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8 text-center text-gray-500">
              <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Posts you've liked will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}; 