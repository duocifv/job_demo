'use client'
import React, { useState, useEffect } from 'react'
import styles from '../stylesheet/FlashSale.module.scss'

const formatTime = (time) => (time < 10 && time > -9 ? `0${time}` : time)

const FlashTime = () => {
  const endTime = new Date('2024-12-31T00:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState(null)

  const hours =
    timeLeft === null
      ? 0
      : Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes =
    timeLeft === null
      ? 0
      : Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds =
    timeLeft === null ? 0 : Math.floor((timeLeft % (1000 * 60)) / 1000)
  useEffect(() => {
    const updateTimeLeft = () => {
      const currentTime = new Date().getTime()
      if (currentTime <= endTime) {
        setTimeLeft(endTime - currentTime)
      } else {
        setTimeLeft(null)
      }
    }
    const interval = setInterval(updateTimeLeft, 1000)
    updateTimeLeft()
    return () => clearInterval(interval)
  }, [endTime])

  return (
    <div className="column-center">
      <code className={styles.flashsaleTimerCode}>{formatTime(hours)}</code>:
      <code className={styles.flashsaleTimerCode}>{formatTime(minutes)}</code>:
      <code className={styles.flashsaleTimerCode}>{formatTime(seconds)}</code>
    </div>
  )
}

export default FlashTime
