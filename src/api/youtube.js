import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Create axios instance with default config
const youtubeApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

// Fetch popular videos
export const fetchVideos = async (maxResults = 25) => {
  try {
    const response = await youtubeApi.get('/videos', {
      params: {
        part: 'snippet,statistics,contentDetails',
        chart: 'mostPopular',
        regionCode: 'US',
        maxResults,
      },
    });
    
    return response.data.items.map(formatVideo);
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

// Search videos
export const searchVideos = async (query, maxResults = 25) => {
  try {
    const response = await youtubeApi.get('/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults,
        order: 'relevance',
      },
    });

    // Get video details for statistics
    const videoIds = response.data.items.map(item => item.id.videoId).join(',');
    const videoDetails = await youtubeApi.get('/videos', {
      params: {
        part: 'snippet,statistics,contentDetails',
        id: videoIds,
      },
    });

    return videoDetails.data.items.map(formatVideo);
  } catch (error) {
    console.error('Error searching videos:', error);
    throw error;
  }
};

// Get video details by ID
export const getVideoDetails = async (videoId) => {
  try {
    const response = await youtubeApi.get('/videos', {
      params: {
        part: 'snippet,statistics,contentDetails',
        id: videoId,
      },
    });

    return formatVideo(response.data.items[0]);
  } catch (error) {
    console.error('Error fetching video details:', error);
    throw error;
  }
};

// Format video data
const formatVideo = (video) => {
  return {
    id: video.id,
    title: video.snippet.title,
    description: video.snippet.description,
    thumbnail: video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url,
    thumbnailHigh: video.snippet.thumbnails?.high?.url,
    channelTitle: video.snippet.channelTitle,
    channelId: video.snippet.channelId,
    publishedAt: video.snippet.publishedAt,
    viewCount: video.statistics?.viewCount || '0',
    likeCount: video.statistics?.likeCount || '0',
    commentCount: video.statistics?.commentCount || '0',
    duration: video.contentDetails?.duration || 'PT0S',
    tags: video.snippet.tags || [],
  };
};

// Format view count
export const formatViewCount = (count) => {
  const num = parseInt(count);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Format duration from ISO 8601 to readable format
export const formatDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  if (hours) {
    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }
  return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
};

// Format published date
export const formatPublishedDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};
