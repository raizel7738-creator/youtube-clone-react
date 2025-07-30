import React from 'react';
import './VideoCard.css';
import { formatViewCount, formatPublishedDate, formatDuration } from '../../api/youtube';

const VideoCard = ({ video, onClick }) => {
  const { thumbnail, title, channelTitle, viewCount, publishedAt, duration } = video;

  return (
    <div className="video-card" onClick={onClick}>
      <div className="thumbnail-container">
        <img src={thumbnail} alt={title} className="video-thumbnail" />
        <div className="video-duration">
          {formatDuration(duration)}
        </div>
      </div>
      <div className="video-details">
        <div className="video-info">
          <h3 className="video-title">{title}</h3>
          <p className="channel-title">{channelTitle}</p>
          <div className="video-metadata">
            <span>{formatViewCount(viewCount)} views</span>
            <span className="dot">•</span>
            <span>{formatPublishedDate(publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
