import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ButtonMore from './ButtonMore';
import ButtonLess from './ButtonLess';
import useVideos from '../hooks/useVideos'

const App = () => {
   
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, search] = useVideos('cute cats');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div style={{ top: "10px" }}>
            <div className="ui container">
                <SearchBar onFormSubmit={search} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="5 wide column">
                            <VideoList
                                onVideoSelect={setSelectedVideo}
                                videos={videos}
                            />

                            <div className="ui buttons">
                                <ButtonLess className="ui button" />
                                <div className="or" />
                                <ButtonMore className="ui positive button" />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default App

// line 34 is equivalent to onVideoSelect={(video) => setSelectedVideo(video)}