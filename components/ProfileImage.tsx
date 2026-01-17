'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProfileImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function ProfileImage({ src, alt, width, height }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
        <div className="text-slate-400 dark:text-slate-500 text-center p-4">
          <div className="text-4xl mb-2">👤</div>
          <div className="text-sm">Profile Image</div>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  )
}
