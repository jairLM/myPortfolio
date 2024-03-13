
 function downloadCv(e) {
    e.preventDefault();
    const url = '/public/util/Luis-Jair-Lopez-Murillo-CV.pdf'; 
    const nombreArchivo = 'CV.pdf';

    const enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = url;
            enlaceDescarga.download = nombreArchivo;
            enlaceDescarga.click();
}

export default downloadCv;
