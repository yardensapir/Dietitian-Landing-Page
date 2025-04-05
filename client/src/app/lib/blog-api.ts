import supabase from "./supabase";
import { BlogPost } from '../types/blog';

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });
  
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  
  return data || [];
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', true)
    .order('date', { ascending: false });
  
  if (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
  
  return data || [];
}

// Get blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
  
  return data || null;
}

// Create a new blog post (for admin functionality later)
export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at'>): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
  
  return data;
}

// Update a blog post (for admin functionality later)
export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating blog post with id ${id}:`, error);
    return null;
  }
  
  return data;
}

// Delete a blog post (for admin functionality later)
export async function deleteBlogPost(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting blog post with id ${id}:`, error);
    return false;
  }
  
  return true;
}

// Format date for display (example utility function)
export function formatDate(dateString: string): string {
  // Format date for Hebrew display
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  // Format date in Hebrew
  return date.toLocaleDateString('he-IL', options);
}