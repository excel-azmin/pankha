'use server';

import { auth, currentUser } from '@clerk/nextjs/server';

export async function syncUser() {
  try {
    const { userId, getToken } = await auth();
    const token = await getToken();

    const user = await currentUser();
    userId && user
      ? console.log(`User ID: ${userId}, User Email: ${token}`)
      : console.log('No user found');

    const response = await fetch(`http://localhost:3001/api/auth/v1/sync`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Syncing user with backend...');
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
    }

    return response.json();
  } catch (error) {
    console.error('Error syncing user:', error);
  }
}

export async function getUserByClerkId(clerkId: string) {
  try {
    const { getToken } = await auth();
    const token = await getToken();

    const response = await fetch(
      `http://localhost:3001/api/auth/v1/user/${clerkId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Error fetching user:', error);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching user by Clerk ID:', error);
    return null;
  }
}
