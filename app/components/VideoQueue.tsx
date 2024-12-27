import Image from 'next/image'
import { ChevronUp, ChevronDown, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface Video {
  id: string
  title: string
  thumbnail: string
  votes: number
}

export function VideoQueue({ videos, onVote }: { videos: Video[], onVote: (id: string, direction: 'up' | 'down') => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-white flex items-center">
        <Music className="mr-2" /> Upcoming Songs
      </h2>
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center space-x-4 bg-gray-700/50 p-4 rounded-lg shadow backdrop-blur-md"
        >
          <Image src={video.thumbnail} alt={video.title} width={120} height={90} className="rounded" />
          <div className="flex-grow">
            <h3 className="font-semibold text-white">{video.title}</h3>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Button variant="ghost" size="sm" onClick={() => onVote(video.id, 'up')} className="text-white hover:text-purple-400">
              <ChevronUp className="h-4 w-4" />
            </Button>
            <span className="font-bold text-white">{video.votes}</span>
            <Button variant="ghost" size="sm" onClick={() => onVote(video.id, 'down')} className="text-white hover:text-purple-400">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

