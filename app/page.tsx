"use client"
import Image from 'next/image'
import { Input } from '@nextui-org/input'
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";






export default function Home() {


  const grados = [];

  for (let grado = 1; grado <= 11; grado++) {
    for (let nivel = 1; nivel <= 3; nivel++) {
      grados.push({
        grado,
        nivel,
      });
    }
  }


  const documentos = [
    {
      label: "Cédula de ciudadanía",
      value: "CC",
    },
    {
      label: "Tarjeta de identidad",
      value: "TI",
    },
    {
      label: "Cédula de extranjería",
      value: "CE",
    },
    {
      label: "Registro civil de nacimiento",
      value: "RN",
    },
  ];

  const jornada = [
    {
      label: "Jornada Mañana",
      value: "MAÑANA"

    },
    {
      label: "Jornada Tarde",
      value: "TARDE"

    }
  ]
  return (
    <form>
      <main className="grid grid-cols-4 gap-6   gap-y-2 min-h-screen p-24 bg-white w-[80%] mx-auto">
        <p className="col-span-2  text-3xl ">DATOS DEL ESTUDIANTE</p>
        <Image
        className="col-span-2 "
        src="/logo.webp"
        width={178}
        height={51}
        alt="Picture of the author" />

        <Input type="text" variant="underlined" label="Nombres" placeholder="Nombre completo del estudiante." name="E-nombre" className="col-span-2" />
        <Input type="text" variant="underlined" label="Apellidos" placeholder="Apellido completo del estudiante." className="col-span-2" />
        <Input type="email" variant="underlined" label="Correo electronico" placeholder="Correo institucional o personal." className="col-span-2" />
        <Input type="text" variant="underlined" label="Direccion" placeholder="Dirrecion actual." className="col-span-2" />
        <Autocomplete
          variant="underlined"
          className="col-span-2"
          defaultItems={documentos}
          label="Seleccionar documento"
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>

        <Input type="number" variant="underlined" label="Documento" placeholder="Numero de documento actual." className="col-span-2" />
        <Autocomplete
          variant="underlined"
          className="col-span-2"
          defaultItems={jornada}
          label="Jornada"
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>

        <Input type="number" variant="underlined" label="Curso" placeholder="Curso al que ingresa. -> 11-02" className="col-span-2" />

      </main>
    </form>
  )
}
