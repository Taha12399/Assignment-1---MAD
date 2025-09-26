import { router } from 'expo-router';
import { useEffect } from 'react';

export default function IndexScreen() {
  useEffect(() => {
    // Redirect to auth/login on app start
    router.replace('/auth/login');
  }, []);

  return null;
}
