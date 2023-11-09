import Image from 'next/image'
import { useRef } from 'react'

export default function Certificado() {

  const pdfRef = useRef(null)

  return (
    <div className="bg-cyan-200 h-screen" ref={pdfRef}>

      <Image
        src="/codema.png"
        width={500}
        height={500}
        alt="Picture of the author" />


      texto del pdf


    </div>
     <button onClick={}>guardadr</button>


  )
}
