import { useState } from 'react'
import YouTube from 'react-youtube'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export function YouTubeInput({ onSubmit }: { onSubmit: (videoId: string) => void }) {
  const [url, setUrl] = useState('')
  const [videoId, setVideoId] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
    const id = extractVideoId(e.target.value)
    setVideoId(id || '')
  }

  const handleSubmit = () => {
    if (videoId) {
      onSubmit(videoId)
      setUrl('')
      setVideoId('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700"
    >
      <div className="flex space-x-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={handleInputChange}
            className="pl-10 bg-white/10 border-none text-white placeholder-white/50"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
        </div>
        <Button
          onClick={handleSubmit}
          disabled={!videoId}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Plus className="mr-2 h-4 w-4" /> Add to Queue
        </Button>
      </div>
      {videoId && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="aspect-video rounded-lg overflow-hidden"
        >
          <YouTube videoId={videoId} opts={{ width: '100%', height: '100%' }} />
        </motion.div>
      )}
    </motion.div>
  )
}

function extractVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

