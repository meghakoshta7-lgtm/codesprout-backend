import { useState, useEffect } from 'react';
import { bookmarksApi } from '../api/bookmarksApi';
import type { Bookmark } from '../types/bookmark';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookmarksApi.getAll()
      .then((res) => setBookmarks(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { bookmarks, loading, setBookmarks };
}
