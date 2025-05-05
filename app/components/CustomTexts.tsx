import React from 'react'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../motion'

interface TextProps {
  title: string
  textStyles?: string
}

export const TypingText: React.FC<TextProps> = ({ title, textStyles = '' }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal lg:text-[30px] text-[25px] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText: React.FC<TextProps> = ({ title, textStyles = '' }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-normal md:text-[64px] text-[40px] text-dark-red ${textStyles}`}
  >
    {title}
  </motion.h2>
)
