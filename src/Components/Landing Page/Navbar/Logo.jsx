import React from 'react'
import { MessageCircle } from 'lucide-react'

const Logo = (props) => {
  return (
    <div onClick={()=>{
        window.location.href = "/"
    }} className="cursor-pointer flex items-center gap-1 text-blue-600">
      <MessageCircle color="#0084ff" strokeWidth={2.5} size={30} />
      <h1 className="text-xl font-semibold tracking-wide">
        Hexa <span style={{color: props.color || "#111"}}>Haven.</span>
      </h1>
    </div>
  )
}

export default Logo