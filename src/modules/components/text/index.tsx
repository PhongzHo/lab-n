import React from 'react'

interface Props {
    content: string | number
    className?: string
}

export default function Text(props: Props) {
  const {content} = props
  return (
    <div className={props.className}>
        {content}
    </div>
  )
}
