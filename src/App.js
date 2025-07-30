import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import VideoGrid from './components/VideoGrid/VideoGrid';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { fetchVideos, searchVideos } from './api/youtube';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    loadPopularVideos();
  }, []);

  const loadPopularVideos = async () => {
    setLoading(true);
    try {
      const data = await fetchVideos();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
    setLoading(false);
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      loadPopularVideos();
      return;
    }
    
    setLoading(true);
    setSearchQuery(query);
    try {
      const data = await searchVideos(query);
      setVideos(data);
    } catch (error) {
      console.error('Error searching videos:', error);
    }
    setLoading(false);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleBackToGrid = () => {
    setSelectedVideo(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Header 
        onSearch={handleSearch} 
        onMenuClick={toggleSidebar}
        onLogoClick={handleBackToGrid}
      />
      <NavBar />
      <div className="app-content">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {selectedVideo ? (
            <VideoPlayer 
              video={selectedVideo} 
              onBack={handleBackToGrid}
            />
          ) : (
            <VideoGrid 
              videos={videos} 
              loading={loading}
              onVideoSelect={handleVideoSelect}
              searchQuery={searchQuery}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
