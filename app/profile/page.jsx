'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'

const myProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();

    // Use setPosts instead of setAllPosts
    setPosts(data);
  };

  useEffect(() => {
    if (session?.user.id) fetchPosts();
  }, [session]);

  const handleEdit = () => {
    // Handle edit functionality
  }

  const handleDelete = async () => {
    // Handle delete functionality
  }

  return (
    <Profile 
      name='My Profile'
      desc='Welcome to your Profile'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default myProfile
