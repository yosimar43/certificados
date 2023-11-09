"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSearchParams } from "next/navigation";

export default function Page() {

  const searchParams = useSearchParams()
 
  const nombre = searchParams.get('nombre')?? ""
  const curso = searchParams.get("curso")??""
  const documento = searchParams.get("documento")??""
 
  const pdfRef = useRef(null)  ;
  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])

  const dowloadPDF = () => {
    const capture = pdfRef.current;
    html2canvas(capture as unknown as HTMLElement).then((canvas) => {
      const imgData = canvas.toDataURL("/codema.jpeg");
      const doc = new jsPDF("l", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("certificado.pdf");
    });
  };

  return (
    <>
      <button onClick={dowloadPDF}>guardadr</button>
      {
        isClient &&(<div
          className="bg-white h-screen flex justify-evenly items-center flex-col gap-4 p-20 min-h-screen text-center  "
          ref={pdfRef}
        >
          <div>
            <Image
              src="/logo.webp"
              width={178}
              height={51}
              alt="Picture of the author"
            />
  
            <p className="text-center">BOGOTA D.C.</p>
          </div>
          <p className="text-4xl">CERTIFICADO DE MATRICULA</p>
          <p>
            Estimado(a) <strong  className="italic">{
              nombre}
              </strong>identificado con {documento}, Por medio del presente documento,
            le certificamos que se encuentra matriculado(a)<strong className="italic"> {curso} </strong>{" "} en el programa de
            aprendizaje en el <strong className="italic"> CODEMA I.E.D. </strong>{" "}
            La matrícula se realizó el{" "}
            <strong className="italic">{new Date().toLocaleDateString()}</strong>{" "}
            . Este documento es válido para cualquier trámite académico o
            administrativo que requiera acreditar su condición de estudiante.
            Atentamente, <br />
            <p className="italic">CODEMA I.E.D.</p>- Teléfonos: 4484615- 4484616
          </p>
          <p className="italic">Dirección: Calle 2 #93-28 Bogotá, Colombia. </p>-
          <p className="italic">
            E-mail: inseducodema@educacionbogota.edu.co o al cocodema@gmail.com
          </p>
          <p className="overline">
            <Image
              src="/firma.png"
              width={178}
              height={51}
              alt="Picture of the author"
            />
            FIRMA RECTOR
          </p>
        </div>)
      }
      
    </>
  );
}
