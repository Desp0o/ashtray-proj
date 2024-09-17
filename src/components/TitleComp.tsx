import React from 'react'

interface TitleCompProps{
    title: string;
}

const TitleComp:React.FC<TitleCompProps> = ({title}) => {
  return (
    <h2 className="text-[26px] ssm:text-[30px] uppercase text-center">{title}</h2>
  )
}

export default TitleComp