function analizarNotas() {
    // Capturar las notas ingresadas por el usuario
    const notas = [
        parseFloat(document.getElementById("nota1").value),
        parseFloat(document.getElementById("nota2").value),
        parseFloat(document.getElementById("nota3").value),
        parseFloat(document.getElementById("nota4").value),
        parseFloat(document.getElementById("nota5").value),
    ];

    // Validar que todas las notas sean válidas
    if (notas.some(nota => isNaN(nota) || nota < 0 || nota > 10)) {
        alert("Por favor, ingrese todas las notas correctamente (entre 0 y 10).");
        return;
    }

    // Mostrar todas las notas
    console.log("Notas del alumno:");
    notas.forEach((nota, index) => {
        console.log(`Nota ${index + 1}: ${nota}`);
    });

    // Calcular el promedio
    const suma = notas.reduce((total, nota) => total + nota, 0);
    const promedio = suma / notas.length;

    // Encontrar la nota más alta
    const notaMaxima = Math.max(...notas);

    // Encontrar la nota más baja
    const notaMinima = Math.min(...notas);

    // Mostrar resultados en la consola y en la página
    const resultado = `
        Notas: ${notas.join(", ")}<br>
        Promedio: ${promedio.toFixed(2)}<br>
        Nota más alta: ${notaMaxima}<br>
        Nota más baja: ${notaMinima}
    `;
    document.getElementById("resultado").innerHTML = resultado;
    console.log("\nResumen de notas:");
    console.log(`- Promedio: ${promedio.toFixed(2)}`);
    console.log(`- Nota más alta: ${notaMaxima}`);
    console.log(`- Nota más baja: ${notaMinima}`);
}