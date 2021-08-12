
// Promedio de un curso
// Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

// const notas = [10,9,7]


//     let suma = 0
//     for(let i = 0; i<notas.length;i++){
//         suma+=notas[i];
//         console.log(suma)
//     }
//     const promedio = suma/3
// console.log(promedio)

// const notas = [10,9,7]

// const promedioAlumna = (notas) => {

//     let suma = 0

//     for(let i = 0; i<notas.length;i++){
//         suma+=notas[i];
//         console.log(suma)
//     }
//     promedio = suma/3

//     return promedio
// }

// console.log(promedioAlumna(notas))

// Promedio de promoción
// Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio 
//tomando solo aquellas que tienen una nota mayor a 7.

const notas = [10, 9, 6, 4, 7, 8, 5, 10, 8, 7]

const promedioPromocion = (notas) =>{
    let notasMayoresASiete = 0   
    let suma = 0
    for(let i = 0; i<notas.length; i++){
        if (notas[i]> 7){
            notasMayoresASiete++
            suma+=notas[i]
            console.log(suma)
            console.log(notasMayoresASiete)
        } 
        promedio = suma/notasMayoresASiete
        // console.log(promedio)
        }
        
        return promedio
}
console.log(promedioPromocion(notas))