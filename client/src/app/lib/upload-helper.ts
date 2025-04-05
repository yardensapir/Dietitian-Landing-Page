import supabase from './supabase';
import { v4 as uuidv4 } from 'uuid'; // You'll need to install this: npm install uuid @types/uuid

// Upload an image to Supabase Storage
export async function uploadBlogImage(file: File): Promise<string | null> {
  try {
    // Create a unique file name to prevent collisions
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload the file to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Error uploading image:', uploadError);
      return null;
    }

    // Get the public URL
    const { data } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}