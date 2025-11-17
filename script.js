class AplicacionVocabulario {
    constructor() {
        this.mazos = {
            "Mazo 1 - Vocabulario Esencial": [
                ["今朝", "Esta mañana", "kesa"],
                ["処", "Lugar", "sho"],
                ["出掛け", "Salida", "dekake"],
                ["女将", "Dueña", "okami"],
                ["寂しい", "Solitario", "sabishii"],
                ["憩い", "Descanso", "ikoi"],
                ["手伝い", "Ayuda", "tetsudai"],
                ["撮る", "Tomar foto", "toru"],
                ["見送る", "Despedir", "miokuru"],
                ["限る", "Limitar", "kagiru"]
            ],
            "Mazo 2 - Expresiones Comunes": [
                ["吐息", "Suspiro", "toiki"],
                ["応援", "Apoyo", "ouen"],
                ["文句", "Queja", "monku"],
                ["構う", "Preocuparse", "kamau"],
                ["残り香", "Aroma residual", "nokorika"],
                ["減る", "Disminuir", "heru"],
                ["誰彼", "Alguien", "darekare"],
                ["過激", "Extremo", "kageki"],
                ["開き直る", "Cambiar de actitud", "hirakinaoru"],
                ["関係ない", "No relacionado", "kankeinai"]
            ],
            "Mazo 3 - Básicos": [
                ["言葉", "Palabra", "kotoba"],
                ["本", "Libro", "hon"],
                ["水", "Agua", "mizu"],
                ["学校", "Escuela", "gakkou"],
                ["先生", "Maestro", "sensei"],
                ["学生", "Estudiante", "gakusei"],
                ["友達", "Amigo", "tomodachi"],
                ["家族", "Familia", "kazoku"],
                ["時間", "Tiempo", "jikan"],
                ["今日", "Hoy", "kyou"]
            ],
            "Mazo 4 - Tiempo": [
                ["明日", "Mañana", "ashita"],
                ["昨日", "Ayer", "kinou"],
                ["今", "Ahora", "ima"],
                ["後で", "Después", "atode"],
                ["前", "Antes", "mae"],
                ["毎日", "Cada día", "mainichi"],
                ["週末", "Fin de semana", "shuumatsu"],
                ["月曜日", "Lunes", "getsuyoubi"],
                ["火曜日", "Martes", "kayoubi"],
                ["水曜日", "Miércoles", "suiyoubi"]
            ],
            "Mazo 5 - Adjetivos": [
                ["大きい", "Grande", "ookii"],
                ["小さい", "Pequeño", "chiisai"],
                ["新しい", "Nuevo", "atarashii"],
                ["古い", "Viejo", "furui"],
                ["高い", "Alto/Caro", "takai"],
                ["安い", "Barato", "yasui"],
                ["暑い", "Caliente", "atsui"],
                ["寒い", "Frío", "samui"],
                ["楽しい", "Divertido", "tanoshii"],
                ["難しい", "Difícil", "muzukashii"]
            ]
        };

        this.estado = {
            mazoActual: [],
            nombreMazoActual: "",
            palabraActual: "",
            correcta: "",
            lectura: "",
            aciertos: 0,
            errores: 0,
            totalInicial: 0,
            preguntasRespondidas: 0
        };

        this.stats = this.cargarStats();
        this.inicializarApp();
    }

    cargarStats() {
        const statsGuardadas = localStorage.getItem('vocabularioStats');
        if (statsGuardadas) {
            return JSON.parse(statsGuardadas);
        }
        
        // Estructura inicial
        const stats = { mazosCompletados: 0, mazos: {} };
        for (const nombreMazo in this.mazos) {
            stats.mazos[nombreMazo] = {
                vecesJugado: 0,
                mejorPuntuacion: 0,
                ultimaPuntuacion: 0,
                aciertosTotales: 0,
                erroresTotales: 0,
                rachaActual: 0,
                mejorRacha: 0,
                completados100: 0
            };
        }
        return stats;
    }

    guardarStats() {
        localStorage.setItem('vocabularioStats', JSON.stringify(this.stats));
    }

    inicializarApp() {
        this.pantallas = {
            seleccion: document.getElementById('pantalla-seleccion'),
            quiz: document.getElementById('pantalla-quiz'),
            resultados: document.getElementById('pantalla-resultados')
        };

        this.inicializarPantallaSeleccion();
        this.inicializarPantallaQuiz();
        this.inicializarPantallaResultados();
        
        this.mostrarPantalla('seleccion');
    }

    inicializarPantallaSeleccion() {
        this.contenedorMazos = document.getElementById('contenedor-mazos');
        this.statsGlobal = document.getElementById('stats-global');
        this.listaCompletados = document.getElementById('lista-completados');
        
        // Agregar funcionalidad a la sección novia
        this.inicializarSeccionNovia();
        
        this.actualizarPantallaSeleccion();
    }

    inicializarSeccionNovia() {
        const noviaCard = document.querySelector('.novia-card');
        if (noviaCard) {
            noviaCard.addEventListener('click', () => {
                // Aquí puedes cambiar la URL por la que quieras
                window.open('https://www.example.com', '_blank');
            });
        }
    }

    actualizarPantallaSeleccion() {
        // Actualizar botones de mazos
        this.contenedorMazos.innerHTML = '';
        for (const nombreMazo in this.mazos) {
            const statsMazo = this.stats.mazos[nombreMazo];
            const boton = document.createElement('button');
            boton.className = 'boton-mazo';
            boton.innerHTML = `
                ${nombreMazo}<br>
                Mejor: ${statsMazo.mejorPuntuacion}%<br>
                Jugado: ${statsMazo.vecesJugado} veces<br>
                Récord: ${statsMazo.mejorRacha} aciertos<br>
                100%: ${statsMazo.completados100} veces
            `;
            boton.onclick = () => this.iniciarQuiz(nombreMazo);
            this.contenedorMazos.appendChild(boton);
        }

        // Actualizar estadísticas globales
        this.statsGlobal.textContent = `🏆 Mazos completados al 100%: ${this.stats.mazosCompletados}`;

        // Actualizar lista de completados
        this.listaCompletados.innerHTML = '';
        for (const nombreMazo in this.mazos) {
            const completadosCount = this.stats.mazos[nombreMazo].completados100;
            const item = document.createElement('div');
            item.className = 'item-completado';
            item.textContent = `${nombreMazo}: ${completadosCount} veces`;
            this.listaCompletados.appendChild(item);
        }
    }

    // ... (el resto del código se mantiene igual)
    inicializarPantallaQuiz() {
        this.contador = document.getElementById('contador');
        this.botonHome = document.getElementById('boton-home');
        this.palabraJapones = document.getElementById('palabra-japones');
        this.lecturaElement = document.getElementById('lectura');
        this.contenedorOpciones = document.getElementById('contenedor-opciones');
        this.resultado = document.getElementById('resultado');

        this.botonHome.onclick = () => this.volverMenu();
        this.opciones = Array.from(document.getElementsByClassName('opcion'));
    }

    inicializarPantallaResultados() {
        this.resultadoFinal = document.getElementById('resultado-final');
        this.botonVolverMenu = document.getElementById('boton-volver-menu');
        this.botonReintentar = document.getElementById('boton-reintentar');

        this.botonVolverMenu.onclick = () => this.volverMenu();
        this.botonReintentar.onclick = () => this.reintentarMazo();
    }

    mostrarPantalla(nombrePantalla) {
        for (const pantalla in this.pantallas) {
            this.pantallas[pantalla].classList.remove('activa');
        }
        this.pantallas[nombrePantalla].classList.add('activa');
    }

    iniciarQuiz(nombreMazo) {
        this.estado.nombreMazoActual = nombreMazo;
        this.estado.mazoActual = [...this.mazos[nombreMazo]];
        this.mezclarArray(this.estado.mazoActual);
        
        // Reiniciar contadores
        this.estado.aciertos = 0;
        this.estado.errores = 0;
        this.estado.totalInicial = this.estado.mazoActual.length;
        this.estado.preguntasRespondidas = 0;
        
        // Actualizar estadísticas
        this.stats.mazos[nombreMazo].vecesJugado++;
        
        this.mostrarPantalla('quiz');
        this.mostrarSiguientePalabra();
    }

    mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    mostrarSiguientePalabra() {
        if (this.estado.mazoActual.length === 0) {
            this.finalizarQuiz();
            return;
        }

        const [palabraActual, correcta, lectura] = this.estado.mazoActual[0];
        this.estado.palabraActual = palabraActual;
        this.estado.correcta = correcta;
        this.estado.lectura = lectura;

        // Generar opciones
        const opciones = [correcta];
        const todasTraducciones = [];
        
        for (const mazo in this.mazos) {
            for (const palabra of this.mazos[mazo]) {
                todasTraducciones.push(palabra[1]);
            }
        }

        while (opciones.length < 4) {
            const opcionFalsa = todasTraducciones[Math.floor(Math.random() * todasTraducciones.length)];
            if (!opciones.includes(opcionFalsa)) {
                opciones.push(opcionFalsa);
            }
        }

        this.mezclarArray(opciones);

        // Actualizar interfaz
        this.palabraJapones.textContent = palabraActual;
        this.lecturaElement.textContent = '';
        this.resultado.textContent = '';
        this.resultado.className = 'resultado';

        this.actualizarContador();

        // Configurar botones
        this.opciones.forEach((boton, i) => {
            boton.textContent = opciones[i];
            boton.className = 'opcion';
            boton.disabled = false;
            boton.onclick = () => this.verificarRespuesta(opciones[i], boton);
        });
    }

    actualizarContador() {
        this.contador.textContent = 
            `Aciertos: ${this.estado.aciertos} | Errores: ${this.estado.errores} | Progreso: ${this.estado.preguntasRespondidas}/${this.estado.totalInicial}`;
    }

    verificarRespuesta(opcionSeleccionada, boton) {
        this.estado.preguntasRespondidas++;

        // Deshabilitar botones
        this.opciones.forEach(boton => boton.disabled = true);

        if (opcionSeleccionada === this.estado.correcta) {
            // Respuesta correcta
            this.estado.aciertos++;
            this.resultado.textContent = '✅ ¡Correcto!';
            this.resultado.className = 'resultado correcto';

            // Resaltar botón correcto
            this.opciones.forEach(boton => {
                if (boton.textContent === this.estado.correcta) {
                    boton.classList.add('correcta');
                }
            });

            // Actualizar racha
            this.stats.mazos[this.estado.nombreMazoActual].rachaActual++;
            const rachaActual = this.stats.mazos[this.estado.nombreMazoActual].rachaActual;
            const mejorRacha = this.stats.mazos[this.estado.nombreMazoActual].mejorRacha;
            
            if (rachaActual > mejorRacha) {
                this.stats.mazos[this.estado.nombreMazoActual].mejorRacha = rachaActual;
            }

            // Eliminar palabra del mazo
            this.estado.mazoActual.shift();

            // Mostrar lectura
            this.lecturaElement.textContent = `Lectura: ${this.estado.lectura}`;

            // Siguiente palabra después de delay
            setTimeout(() => this.mostrarSiguientePalabra(), 1500);

        } else {
            // Respuesta incorrecta
            this.estado.errores++;
            this.resultado.textContent = '❌ Incorrecto';
            this.resultado.className = 'resultado incorrecto';

            // Resaltar botones
            this.opciones.forEach(boton => {
                if (boton.textContent === this.estado.correcta) {
                    boton.classList.add('correcta');
                } else if (boton.textContent === opcionSeleccionada) {
                    boton.classList.add('incorrecta');
                }
            });

            // Reiniciar racha
            this.stats.mazos[this.estado.nombreMazoActual].rachaActual = 0;

            // Mover palabra al final
            this.estado.mazoActual.push(this.estado.mazoActual.shift());

            // Mostrar lectura
            this.lecturaElement.textContent = `Lectura: ${this.estado.lectura}`;

            // Siguiente palabra después de delay
            setTimeout(() => this.mostrarSiguientePalabra(), 2000);
        }

        this.actualizarContador();
    }

    finalizarQuiz() {
        const porcentaje = Math.max(0, ((this.estado.aciertos - this.estado.errores) / this.estado.totalInicial) * 100);
        
        // Actualizar estadísticas del mazo
        const statsMazo = this.stats.mazos[this.estado.nombreMazoActual];
        statsMazo.ultimaPuntuacion = porcentaje;
        statsMazo.aciertosTotales += this.estado.aciertos;
        statsMazo.erroresTotales += this.estado.errores;
        
        if (porcentaje > statsMazo.mejorPuntuacion) {
            statsMazo.mejorPuntuacion = porcentaje;
        }
        
        // Contar completado al 100%
        if (porcentaje === 100) {
            this.stats.mazosCompletados++;
            statsMazo.completados100++;
        }
        
        this.guardarStats();
        this.mostrarPantalla('resultados');
        
        // Mostrar resultados
        const textoResultados = this.crearTextoResultados(porcentaje, statsMazo);
        this.resultadoFinal.textContent = textoResultados;
    }

    crearTextoResultados(porcentaje, statsMazo) {
        let emoji, mensajeEspecial;
        
        if (porcentaje === 100) {
            emoji = "🎉";
            mensajeEspecial = `\n🌟 ¡PERFECTO! Has completado este mazo al 100% por ${statsMazo.completados100}ª vez!`;
        } else if (porcentaje >= 90) {
            emoji = "🎉";
            mensajeEspecial = "\n¡Excelente trabajo!";
        } else if (porcentaje >= 70) {
            emoji = "👍";
            mensajeEspecial = "\n¡Buen trabajo!";
        } else if (porcentaje >= 50) {
            emoji = "😊";
            mensajeEspecial = "\n¡Sigue practicando!";
        } else {
            emoji = "💪";
            mensajeEspecial = "\n¡No te rindas!";
        }
        
        return `${emoji} Quiz Completado - ${this.estado.nombreMazoActual} ${emoji}

📊 RESULTADO ACTUAL:
   Puntuación: ${porcentaje.toFixed(1)}%
   Aciertos: ${this.estado.aciertos} | Errores: ${this.estado.errores}
   Total de palabras: ${this.estado.totalInicial}${mensajeEspecial}

🏆 ESTADÍSTICAS DEL MAZO:
   Mejor puntuación: ${statsMazo.mejorPuntuacion.toFixed(1)}%
   Veces jugado: ${statsMazo.vecesJugado}
   Mejor racha: ${statsMazo.mejorRacha} aciertos
   Aciertos totales: ${statsMazo.aciertosTotales}
   Errores totales: ${statsMazo.erroresTotales}
   Completados al 100%: ${statsMazo.completados100} veces

⭐ LOGROS GLOBALES:
   Mazos completados al 100%: ${this.stats.mazosCompletados}`;
    }

    reintentarMazo() {
        this.iniciarQuiz(this.estado.nombreMazoActual);
    }

    volverMenu() {
        this.actualizarPantallaSeleccion();
        this.mostrarPantalla('seleccion');
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new AplicacionVocabulario();
});
