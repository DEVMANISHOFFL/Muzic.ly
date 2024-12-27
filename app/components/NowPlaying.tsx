import { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { Button } from "@/components/ui/button"
import { Play, SkipForward } from 'lucide-react'
import { motion } from 'framer-motion'

interface NowPlayingProps {
  currentVideo: string | null
  onEnd: () => void
  onPlayNext: () => void
  queueEmpty: boolean
}

export function NowPlaying({ currentVideo, onEnd, onPlayNext, queueEmpty }: NowPlayingProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setIsPlaying(!!currentVideo)
  }, [currentVideo])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-white flex items-center">
        <Play className="mr-2" /> Now Playing
      </h2>
      <div className="aspect-video rounded-lg overflow-hidden">
        {currentVideo ? (
          <YouTube 
            videoId={currentVideo} 
            opts={{ width: '100%', height: '100%' }} 
            onEnd={onEnd}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <p className="text-xl text-gray-400">No video playing</p>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-white">
          {isPlaying ? "Now playing" : "Paused"}
        </div>
        <Button
          onClick={onPlayNext}
          disabled={queueEmpty}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <SkipForward className="mr-2 h-4 w-4" /> Play Next Video
        </Button>
      </div>
    </motion.div>
  )
}

