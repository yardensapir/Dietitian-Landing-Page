import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function middleware(req: NextRequest) {
  // Create a supabase client configured for SSR
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  // Get the user's session
  const { data: { session } } = await supabase.auth.getSession();

  // If there's no session or the user is not authenticated, redirect to the login page
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('redirectTo', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Specify which routes to apply this middleware to
export const config = {
  matcher: ['/admin/:path*'],
};