'use client'
import anime from 'animejs'
import React, { useEffect, useRef } from 'react'

function WelcomeMessage() {
  const animationRef = useRef(null)
  useEffect(() => {
    var ml4 = {}
    ml4.opacityIn = [0, 1]
    ml4.scaleIn = [0.2, 1]
    ml4.scaleOut = 3
    ml4.durationIn = 4000
    ml4.durationOut = 600
    ml4.delay = 500

    animationRef.current = anime
      .timeline({ loop: true })
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay,
      })
      .add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay,
      })
      .add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay,
      })
      .add({
        targets: '.ml4 .letters-4',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: '.ml4 .letters-4',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: 6000,
      })
      .add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500,
      })
  }, [])
  return (
    <h1 className='ml4'>
      <span className='letters letters-1'>¡Hola!</span>
      <span className='letters letters-2'>Gracias por venir</span>
      <span className='letters letters-3'>Apenas son 80</span>
      <span className='letters letters-4'>Festejemos!</span>
    </h1>
  )
}
export default WelcomeMessage
