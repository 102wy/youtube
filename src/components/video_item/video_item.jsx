import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet } }) => ( // porps 안에 있는 video 안에있는 snippet
    <li className={styles.container}>
        <div className={styles.video}>
            <img className={styles.thumnail}
                src={snippet.thumbnails.medium.url}
                alt="video thumbnail">
            </img>
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>

    </li>
);

export default VideoItem;