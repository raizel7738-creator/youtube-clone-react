import React, { useState } from 'react';
import './VideoPlayer.css';
import { formatViewCount, formatPublishedDate } from '../../api/youtube';

const VideoPlayer = ({ video, onBack }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const { title, channelTitle, viewCount, publishedAt, description, likeCount, id } = video;

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

  return (
    <div className="video-player-container">
      <button className="back-button" onClick={onBack}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Back
      </button>

      <div className="video-player-content">
        <div className="video-player-main">
          <div className="video-iframe-container">
            <iframe
              src={embedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>

          <div className="video-info-section">
            <h1 className="video-title">{title}</h1>
            
            <div className="video-actions">
              <div className="video-stats">
                <span>{formatViewCount(viewCount)} views</span>
                <span className="dot">•</span>
                <span>{formatPublishedDate(publishedAt)}</span>
              </div>
              
              <div className="action-buttons">
                <button 
                  className={`action-button ${liked ? 'active' : ''}`}
                  onClick={handleLike}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                  </svg>
                  <span>{formatViewCount(likeCount)}</span>
                </button>
                
                <button 
                  className={`action-button ${disliked ? 'active' : ''}`}
                  onClick={handleDislike}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
                  </svg>
                </button>
                
                <button className="action-button">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                  </svg>
                  Share
                </button>
                
                <button className="action-button">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V6h10v3z"/>
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="channel-info">
            <div className="channel-avatar">
              {channelTitle.charAt(0).toUpperCase()}
            </div>
            <div className="channel-details">
              <h3 className="channel-name">{channelTitle}</h3>
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>

          <div className="video-description">
            <div 
              className={`description-content ${showDescription ? 'expanded' : ''}`}
              onClick={() => setShowDescription(!showDescription)}
            >
              <p>{description}</p>
            </div>
            {description && description.length > 200 && (
              <button 
                className="show-more-button"
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
        </div>

        <div className="video-player-sidebar">
          <h3>Up next</h3>
          <div className="related-videos">
            <p className="coming-soon">Related videos coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
