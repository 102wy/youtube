import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
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
    )
});

//memo : 전달되는 props 가 변경되지 않으면 re-render 되지 않고 props 가 바뀌면 rendering 된다.

export default VideoItem;