export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'author' | 'admin';
  profile: {
    avatar: string;
    bio: string;
    interests: string[];
  };
  contentCount: number;
  followers: number;
  following: number;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  category: Category;
  subCategory: string;
  tags: string[];
  author: User;
  content: {
    type: 'article' | 'video' | 'image' | 'link';
    data: any;
  };
  status: 'draft' | 'published' | 'archived';
  publishDate: Date;
  updateDate: Date;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

export interface Category {
  id: string;
  name: string;
  type: 'travel' | 'food' | 'knowledge' | 'health';
  subCategories: string[];
  icon: string;
  description: string;
} 