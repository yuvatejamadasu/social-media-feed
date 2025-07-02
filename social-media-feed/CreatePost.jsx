import { useState } from 'react';
import { Image, Video } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';

export const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postContent.trim()) return;
    alert("Post created! Your post has been shared with your followers.");
    setPostContent('');
  };

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" alt="Your avatar" />
              <AvatarFallback className="bg-blue-500 text-white">YU</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <input
                placeholder="Write a comment..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex space-x-2">
              <Button type="button" variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                <Image className="w-4 h-4 mr-2" />
                Photo
              </Button>
              <Button type="button" variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                <Video className="w-4 h-4 mr-2" />
                Video
              </Button>
            </div>
            <Button 
              type="submit" 
              disabled={!postContent.trim()}
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
