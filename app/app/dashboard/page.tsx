'use client'

import { useState } from 'react'
import { YouTubeInput } from '../../components/YouTubeInput'
import { VideoQueue } from '../../components/VideoQueue'
import { NowPlaying } from '../../components/NowPlaying'
import { motion } from 'framer-motion'

interface Video {
  id: string
  title: string
  thumbnail: string
  votes: number
}

export default function Dashboard() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [queue, setQueue] = useState<Video[]>([])

  const handleSubmit = async (videoId: string) => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=YOUR_YOUTUBE_API_KEY`)
      const data = await response.json()
      const videoInfo = data.items[0].snippet
      const newVideo: Video = {
        id: videoId,
        title: videoInfo.title,
        thumbnail: videoInfo.thumbnails.medium.url,
        votes: 0
      }
      setQueue([...queue, newVideo])
    } catch (error) {
      console.error('Error fetching video info:', error)
    }
  }

  const handleVote = (id: string, direction: 'up' | 'down') => {
    setQueue(queue.map(video => 
      video.id === id 
        ? { ...video, votes: video.votes + (direction === 'up' ? 1 : -1) }
        : video
    ).sort((a, b) => b.votes - a.votes))
  }

  const playNextVideo = () => {
    if (queue.length > 0) {
      setCurrentVideo(queue[0].id)
      setQueue(queue.slice(1))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <main className="container mx-auto px-4 py-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold py-2 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Stream Song Voting
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <YouTubeInput onSubmit={handleSubmit} />
            <VideoQueue videos={queue} onVote={handleVote} />
          </div>
          <div>
            <NowPlaying
              currentVideo={currentVideo}
              onEnd={playNextVideo}
              onPlayNext={playNextVideo}
              queueEmpty={queue.length === 0}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

