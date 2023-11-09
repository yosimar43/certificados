export type FormularioIngresoEstudiante = {
  datosEstudiante: {
    nombres: string;
    apellidos: string;
    tipoDocumento: string;
    numeroDocumento: string;
    direccion: string;
    telefono: string;
    correoElectronico: string;
    grado: string;
    jornada: string;
  },
  datosFamiliares: {
    nombresPadre: string;
    apellidosPadre: string;
    tipoDocumentoPadre: string;
    numeroDocumentoPadre: string;
    ocupacionPadre: string;
    telefonoPadre: string;
    correoElectronicoPadre: string;
    nombresMadre: string;
    apellidosMadre: string;
    tipoDocumentoMadre: string;
    numeroDocumentoMadre: string;
    ocupacionMadre: string;
    telefonoMadre: string;
    correoElectronicoMadre: string;
  },
};
