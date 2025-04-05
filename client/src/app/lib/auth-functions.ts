import supabase from './supabase';

// Sign up a new user (you might want to disable this in production)
export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}

// Sign in an existing user
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}

// Sign out the current user
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    throw error;
  }
  
  return true;
}

// Get the current session
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  
  if (error) {
    throw error;
  }
  
  return data.session;
}

// Get the current user
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  
  if (error) {
    throw error;
  }
  
  return data.user;
}

// Reset password
export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/admin/reset-password`,
  });
  
  if (error) {
    throw error;
  }
  
  return data;
}

// Update user password (after reset)
export async function updatePassword(newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  
  if (error) {
    throw error;
  }
  
  return data;
}