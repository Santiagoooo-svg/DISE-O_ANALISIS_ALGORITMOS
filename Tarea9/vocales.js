function contar_vocales(frase){
    let vocales = "áéíóúÁÉÍÓÚ";
    let contarvocales = 0;
    for(let i = 0; i < frase.length; ++i){
        if(vocales.indexOf(frase[i]) !== -1){
            ++contarvocales;
        }
    }
    return contarvocales;
}

const cadena = "Cada vez son más los padres y maestros que buscan material de calidad para utilizar como ejercicios de dictados cortos para los niños. No es para menos, los dictados tienen un montón de ventajas: les ayudan a conocer el correcto uso de las normas gramaticales, a mejorar la memoria y la concentración y a aprender las reglas de ortografía, entre ellas los acentos y el uso de las tildes. Es ese último punto el tema que en esta ocasión nos ocupa.";
console.log(contar_vocales(cadena));