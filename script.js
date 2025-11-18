class AplicacionVocabulario {
    constructor() {
        // SISTEMA DE VIDEO POR INACTIVIDAD - 5 MINUTOS
        this.ultimaVisitaKey = 'ultimaVisitaVocabulario';
        this.videoInactividadUrl = 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4';
        this.tiempoInactividad = 5 * 60 * 1000; // 5 minutos en milisegundos

        // Verificar inactividad al iniciar
        this.verificarInactividad();

        this.mazos = {
            // LAST SUMMER 1 - 2 mazos
            "LS1 - Verano Inolvidable": [
                ["夏", "Verano", "natsu"],
                ["海", "Mar", "umi"],
                ["太陽", "Sol", "taiyou"],
                ["砂浜", "Playa", "sunahama"],
                ["波", "Ola", "nami"],
                ["貝殻", "Concha", "kaigara"],
                ["夕日", "Atardecer", "yuuhi"],
                ["思い出", "Recuerdo", "omoide"],
                ["祭り", "Festival", "matsuri"],
                ["花火", "Fuegos artificiales", "hanabi"]
            ],
            
            "LS1 - Aventuras Estivales": [
                ["冒険", "Aventura", "bouken"],
                ["旅行", "Viaje", "ryokou"],
                ["友情", "Amistad", "yuujou"],
                ["笑顔", "Sonrisa", "egao"],
                ["自由", "Libertad", "jiyuu"],
                ["青春", "Juventud", "seishun"],
                ["恋", "Amor", "koi"],
                ["秘密", "Secreto", "himitsu"],
                ["成長", "Crecimiento", "seichou"],
                ["未来", "Futuro", "mirai"]
            ],
            
            // LAST SUMMER 2 - 2 mazos
            "LS2 - Básicos": [
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
            
            "LS2 - Tiempo": [
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
            
            // LAST SUMMER 3 - 5 MAZOS (Mazo 1, Mazo 2, Mazo 3, Mazo 4, Mazo 5)
            "LS3 - Mazo 1": [
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
            
            "LS3 - Mazo 2": [
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
            
            "LS3 - Mazo 3": [
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
            ],
            
            "LS3 - Mazo 4": [
                ["食べ物", "Comida", "tabemono"],
                ["水", "Agua", "mizu"],
                ["米", "Arroz", "kome"],
                ["魚", "Pescado", "sakana"],
                ["肉", "Carne", "niku"],
                ["野菜", "Vegetales", "yasai"],
                ["果物", "Fruta", "kudamono"],
                ["甘い", "Dulce", "amai"],
                ["辛い", "Picante", "karai"],
                ["美味しい", "Delicioso", "oishii"]
            ],
            
            "LS3 - Mazo 5": [
                ["家族", "Familia", "kazoku"],
                ["父", "Padre", "chichi"],
                ["母", "Madre", "haha"],
                ["兄", "Hermano mayor", "ani"],
                ["姉", "Hermana mayor", "ane"],
                ["弟", "Hermano menor", "otouto"],
                ["妹", "Hermana menor", "imouto"],
                ["祖父", "Abuelo", "sofu"],
                ["祖母", "Abuela", "sobo"],
                ["子供", "Niño", "kodomo"]
            ]
        };

        // SISTEMA DE AUDIO
        this.audios = {
            beso: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp3',
            nalgada: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/nalgada.mp3',
            chupada: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/chupada.mp3',
            handjob: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/handjob.mp3'
        };

        this.audioObjects = {};
        this.cargarAudios();

        // IMAGEN ESPECIAL PARA RECOMPENSAS
        this.imagenEspecial = "https://pbs.twimg.com/media/G5_38X-XUAATGFc?format=jpg&name=small";

        // SISTEMA DE RECOMPENSAS
        this.recompensas = {
            logros: [
                {
                    id: 1,
                    tipo: "logro",
                    nombre: "Beso",
                    descripcion: "Completa 3 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/GohHxZcXAAAzv1p?format=jpg&name=small",
                    requerimiento: 3,
                    progresoActual: 0,
                    desbloqueado: false
                },
                {
                    id: 2,
                    tipo: "logro",
                    nombre: "Nalgada",
                    descripcion: "Completa 10 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/Gov2VBlXwAATAja?format=png&name=small",
                    requerimiento: 10,
                    progresoActual: 0,
                    desbloqueado: false
                },
                {
                    id: 3,
                    tipo: "logro",
                    nombre: "Handjob",
                    descripcion: "Completa 15 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/G5gV7afWgAAtIwI?format=png&name=small",
                    requerimiento: 15,
                    progresoActual: 0,
                    desbloqueado: false
                },
                {
                    id: 4,
                    tipo: "logro",
                    nombre: "Chupada",
                    descripcion: "Completa 25 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/G5_an4LXEAAnxQY?format=jpg&name=small",
                    requerimiento: 25,
                    progresoActual: 0,
                    desbloqueado: false
                }
            ],
            acciones: [
                {
                    id: 5,
                    tipo: "accion",
                    nombre: "Beso",
                    descripcion: "Desbloqueado al completar 3 mazos",
                    imagen: "https://pbs.twimg.com/media/GohHxZcXAAAzv1p?format=jpg&name=small",
                    logroRequerido: 1,
                    desbloqueado: false,
                    audio: "beso"
                },
                {
                    id: 6,
                    tipo: "accion",
                    nombre: "Nalgada",
                    descripcion: "Desbloqueado al completar 10 mazos",
                    imagen: "https://pbs.twimg.com/media/Gov2VBlXwAATAja?format=png&name=small",
                    logroRequerido: 2,
                    desbloqueado: false,
                    audio: "nalgada"
                },
                {
                    id: 7,
                    tipo: "accion",
                    nombre: "Handjob",
                    descripcion: "Desbloqueado al completar 15 mazos",
                    imagen: "https://pbs.twimg.com/media/G5gV7afWgAAtIwI?format=png&name=small",
                    logroRequerido: 3,
                    desbloqueado: false,
                    audio: "handjob"
                },
                {
                    id: 8,
                    tipo: "accion",
                    nombre: "Chupada",
                    descripcion: "Desbloqueado al completar 25 mazos",
                    imagen: "https://pbs.twimg.com/media/G5_an4LXEAAnxQY?format=jpg&name=small",
                    logroRequerido: 4,
                    desbloqueado: false,
                    audio: "chupada"
                }
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

    // MÉTODO: Verificar inactividad del usuario (5 MINUTOS)
    verificarInactividad() {
        const ahora = new Date().getTime();
        const ultimaVisita = localStorage.getItem(this.ultimaVisitaKey);
        
        console.log('🕒 Verificando inactividad...');
        console.log('Última visita:', ultimaVisita ? new Date(parseInt(ultimaVisita)).toLocaleString() : 'Primera vez');
        
        if (ultimaVisita) {
            const tiempoDesdeUltimaVisita = ahora - parseInt(ultimaVisita);
            console.log('Tiempo desde última visita:', Math.round(tiempoDesdeUltimaVisita / 1000 / 60) + ' minutos');
            
            // Si pasó más de 5 minutos desde la última visita
            if (tiempoDesdeUltimaVisita > this.tiempoInactividad) {
                console.log('🎬 ¡5 minutos de inactividad! Reproduciendo video...');
                setTimeout(() => {
                    this.reproducirVideoInactividad();
                }, 2000); // Pequeño delay para que cargue la página
            }
        }
        
        // Actualizar el timestamp de la última visita
        localStorage.setItem(this.ultimaVisitaKey, ahora.toString());
    }

    // MÉTODO: Reproducir video por inactividad
    reproducirVideoInactividad() {
        // Crear overlay para el video
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        // Crear contenedor del video
        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            background: linear-gradient(135deg, #1e1e1e, #2d2d2d);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 71, 87, 0.5);
        `;

        // Crear título
        const titulo = document.createElement('div');
        titulo.textContent = '⚠️ DESCUDASTE AL NIÑO ⚠️';
        titulo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: #ff6b6b;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        // Crear mensaje ESPECIAL
        const mensaje = document.createElement('div');
        mensaje.innerHTML = '🔥 <strong>ALDO SE LA ESTA FOLLANDO :D</strong> 🔥';
        mensaje.style.cssText = `
            font-size: 1.8rem;
            color: #ff6b6b;
            margin-bottom: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 107, 107, 0.1);
            border-radius: 10px;
            border: 2px solid #ff4757;
        `;

        // Crear elemento de video
        const video = document.createElement('video');
        video.src = this.videoInactividadUrl;
        video.controls = true;
        video.autoplay = true;
        video.muted = false; // Sonido activado
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid #ff6b6b;
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
            background: #000;
        `;

        // Crear botón de cerrar
        const botonCerrar = document.createElement('button');
        botonCerrar.innerHTML = '❌ CERRAR VIDEO';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #ff0000;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(255, 0, 0, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
        };

        // Evento cuando el video termina
        video.onended = () => {
            mensaje.innerHTML = '🎬 <strong>VIDEO TERMINADO - ¿QUÉ HARÁS AHORA?</strong> 🎬';
            mensaje.style.color = '#4a90e2';
            mensaje.style.borderColor = '#4a90e2';
            mensaje.style.background = 'rgba(74, 144, 226, 0.1)';
            
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 3000);
        };

        // Manejar errores de video
        video.onerror = () => {
            console.log('❌ Error cargando el video');
            mensaje.innerHTML = '❌ Error cargando el video<br><small>Pero el mensaje sigue siendo claro 😈</small>';
            mensaje.style.color = '#ffa500';
        };

        // Ensamblar todo
        videoContainer.appendChild(titulo);
        videoContainer.appendChild(mensaje);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);

        // Agregar al DOM
        document.body.appendChild(overlay);

        // Forzar reproducción
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video:', error);
                // Intentar reproducir con mute
                video.muted = true;
                video.play();
            });
        }

        // Cerrar automáticamente después de 60 segundos
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                video.pause();
                document.body.removeChild(overlay);
            }
        }, 60000);
    }

    cargarAudios() {
        console.log('🎵 Iniciando carga de audios...');
        
        for (const [nombre, url] of Object.entries(this.audios)) {
            console.log(`📥 Cargando: ${nombre} -> ${url}`);
            
            const audio = new Audio();
            audio.src = url;
            audio.preload = 'auto';
            
            audio.addEventListener('canplaythrough', () => {
                console.log(`✅ ${nombre} cargado y listo!`);
                this.audioObjects[nombre] = audio;
            });
            
            audio.addEventListener('error', (e) => {
                console.log(`❌ Error cargando ${nombre}:`, audio.error);
            });
            
            audio.load();
        }
        
        setTimeout(() => {
            console.log('🔍 Estado final de audios:');
            Object.keys(this.audios).forEach(nombre => {
                console.log(`- ${nombre}:`, this.audioObjects[nombre] ? '✅ Cargado' : '❌ No cargado');
            });
        }, 3000);
    }

    reproducirAudio(nombre) {
        console.log(`🎵 Intentando reproducir: ${nombre}`);
        
        const audio = this.audioObjects[nombre];
        if (audio) {
            console.log(`🔊 Audio encontrado, reproduciendo...`);
            audio.currentTime = 0;
            
            audio.play().then(() => {
                console.log(`✅ ${nombre} reproduciéndose!`);
            }).catch(error => {
                console.log(`❌ Error al reproducir ${nombre}:`, error);
            });
        } else {
            console.log(`❌ Audio no disponible: ${nombre}`);
        }
    }

    // MÉTODO PARA MOSTRAR IMAGEN ESPECIAL
    mostrarImagenEspecial() {
        // Crear overlay para la imagen
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            flex-direction: column;
        `;

        // Crear contenedor de la imagen
        const imagenContainer = document.createElement('div');
        imagenContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        // Crear título
        const titulo = document.createElement('div');
        titulo.textContent = '🎉 ¡RECOMPENSA ESPECIAL! 🎉';
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        // Crear imagen
        const imagen = document.createElement('img');
        imagen.src = this.imagenEspecial;
        imagen.style.cssText = `
            max-width: 400px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        `;

        // Crear mensaje
        const mensaje = document.createElement('div');
        mensaje.textContent = '¡Felicidades por completar el mazo al 100%!';
        mensaje.style.cssText = `
            font-size: 1.3rem;
            color: white;
            margin-top: 20px;
            font-weight: bold;
        `;

        // Crear botón de cerrar
        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '✨ Continuar ✨';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #4a90e2, #7b68ee);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #4169e1;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            document.body.removeChild(overlay);
        };

        // Ensamblar todo
        imagenContainer.appendChild(titulo);
        imagenContainer.appendChild(imagen);
        imagenContainer.appendChild(mensaje);
        imagenContainer.appendChild(botonCerrar);
        overlay.appendChild(imagenContainer);

        // Agregar al DOM
        document.body.appendChild(overlay);

        // Reproducir audio de beso cuando aparece la imagen
        setTimeout(() => {
            this.reproducirAudio('beso');
        }, 500);

        // Cerrar automáticamente después de 8 segundos
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 8000);
    }

    cargarStats() {
        const statsGuardadas = localStorage.getItem('vocabularioStats');
        
        if (statsGuardadas) {
            const stats = JSON.parse(statsGuardadas);
            if (!stats.recompensasDesbloqueadas) {
                stats.recompensasDesbloqueadas = [];
            }
            
            // VERIFICAR Y AGREGAR NUEVOS MAZOS FALTANTES
            for (const nombreMazo in this.mazos) {
                if (!stats.mazos[nombreMazo]) {
                    stats.mazos[nombreMazo] = this.crearStatsMazoVacio();
                }
            }
            
            return stats;
        }
        
        // Si no existen stats, crear nuevas
        const stats = { 
            mazosCompletados: 0, 
            mazos: {},
            recompensasDesbloqueadas: []
        };
        
        // INICIALIZAR TODOS LOS MAZOS (incluyendo los nuevos)
        for (const nombreMazo in this.mazos) {
            stats.mazos[nombreMazo] = this.crearStatsMazoVacio();
        }
        
        return stats;
    }

    // MÉTODO PARA CREAR STATS VACÍOS
    crearStatsMazoVacio() {
        return {
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

    guardarStats() {
        localStorage.setItem('vocabularioStats', JSON.stringify(this.stats));
    }

    inicializarApp() {
        this.pantallas = {
            seleccion: document.getElementById('pantalla-seleccion'),
            quiz: document.getElementById('pantalla-quiz'),
            resultados: document.getElementById('pantalla-resultados'),
            novia: document.getElementById('pantalla-novia'),
            lastsummer: document.getElementById('pantalla-lastsummer'),
            lastsummer1: document.getElementById('pantalla-lastsummer1-mazos'),
            lastsummer2: document.getElementById('pantalla-lastsummer2-mazos'),
            lastsummer3: document.getElementById('pantalla-lastsummer3-mazos')
        };

        this.inicializarPantallaSeleccion();
        this.inicializarPantallaQuiz();
        this.inicializarPantallaResultados();
        this.inicializarPantallaNovia();
        this.inicializarPantallaLastSummer();
        this.inicializarSeccionLastSummer();
        this.inicializarPantallasLastSummerMazos();
        
        this.mostrarPantalla('seleccion');
    }

    // MÉTODO PARA INICIALIZAR BOTONES DE VOLVER
    inicializarPantallasLastSummerMazos() {
        // Botón volver de Last Summer 1
        document.getElementById('boton-volver-lastsummer1').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
        
        // Botón volver de Last Summer 2
        document.getElementById('boton-volver-lastsummer2').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
        
        // Botón volver de Last Summer 3
        document.getElementById('boton-volver-lastsummer3').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
    }

    inicializarPantallaSeleccion() {
        this.statsGlobal = document.getElementById('stats-global');
        this.inicializarSeccionNovia();
        this.actualizarPantallaSeleccion();
    }

    inicializarSeccionNovia() {
        const noviaCard = document.getElementById('novia-card');
        if (noviaCard) {
            noviaCard.addEventListener('click', () => {
                this.mostrarPantallaNovia();
            });
        }
    }

    inicializarSeccionLastSummer() {
        const lastSummerCard = document.getElementById('lastsummer-card');
        if (lastSummerCard) {
            lastSummerCard.addEventListener('click', () => {
                this.mostrarPantallaLastSummer();
            });
        }
    }

    inicializarPantallaLastSummer() {
        this.botonVolverMenuLastSummer = document.getElementById('boton-volver-menu-lastsummer');
        this.botonVolverMenuLastSummer.onclick = () => this.mostrarPantalla('seleccion');
        
        // Agregar event listeners a las categorías
        document.getElementById('lastsummer1').onclick = () => this.mostrarMazosLastSummer1();
        document.getElementById('lastsummer2').onclick = () => this.mostrarMazosLastSummer2();
        document.getElementById('lastsummer3').onclick = () => this.mostrarMazosLastSummer3();
    }

    // MÉTODOS CORREGIDOS
    mostrarMazosLastSummer1() {
        this.mostrarMazosPorCategoria('LS1', 'lastsummer1', 'contenedor-lastsummer1-mazos');
    }

    mostrarMazosLastSummer2() {
        this.mostrarMazosPorCategoria('LS2', 'lastsummer2', 'contenedor-lastsummer2-mazos');
    }

    mostrarMazosLastSummer3() {
        this.mostrarMazosPorCategoria('LS3', 'lastsummer3', 'contenedor-lastsummer3-mazos');
    }

    mostrarMazosPorCategoria(prefijo, pantallaId, contenedorId) {
        const contenedor = document.getElementById(contenedorId);
        contenedor.innerHTML = '';
        
        // Filtrar mazos por prefijo
        for (const nombreMazo in this.mazos) {
            if (nombreMazo.startsWith(prefijo)) {
                const statsMazo = this.stats.mazos[nombreMazo];
                const boton = document.createElement('button');
                boton.className = 'boton-mazo';
                boton.innerHTML = `
                    ${nombreMazo.replace(prefijo + ' - ', '')}<br>
                    Mejor: ${statsMazo.mejorPuntuacion}%<br>
                    Jugado: ${statsMazo.vecesJugado} veces<br>
                    Récord: ${statsMazo.mejorRacha} aciertos<br>
                    100%: ${statsMazo.completados100} veces
                `;
                boton.onclick = () => this.iniciarQuiz(nombreMazo);
                contenedor.appendChild(boton);
            }
        }
        
        this.mostrarPantalla(pantallaId);
    }

    mostrarPantallaLastSummer() {
        this.mostrarPantalla('lastsummer');
    }

    inicializarPantallaNovia() {
        this.contenedorLogros = document.getElementById('contenedor-logros');
        this.contenedorAcciones = document.getElementById('contenedor-acciones');
        this.botonVolverMenuNovia = document.getElementById('boton-volver-menu-novia');
        
        this.botonVolverMenuNovia.onclick = () => this.mostrarPantalla('seleccion');
    }

    mostrarPantallaNovia() {
        this.actualizarPantallaRecompensas();
        this.mostrarPantalla('novia');
    }

    actualizarPantallaRecompensas() {
        this.actualizarProgresoRecompensas();
        
        this.contenedorLogros.innerHTML = '';
        this.recompensas.logros.forEach(logro => {
            const logroElement = this.crearElementoRecompensa(logro);
            this.contenedorLogros.appendChild(logroElement);
        });

        this.contenedorAcciones.innerHTML = '';
        this.recompensas.acciones.forEach(accion => {
            const accionElement = this.crearElementoRecompensa(accion);
            this.contenedorAcciones.appendChild(accionElement);
        });
    }

    crearElementoRecompensa(recompensa) {
        const elemento = document.createElement('div');
        const esDesbloqueado = recompensa.desbloqueado;
        const esLogro = recompensa.tipo === 'logro';
        
        elemento.className = `recompensa ${esDesbloqueado ? 'desbloqueado' : 'recompensa-bloqueado'}`;
        
        let contenidoHTML = '';
        
        if (esLogro) {
            const porcentaje = Math.min(100, (recompensa.progresoActual / recompensa.requerimiento) * 100);
            contenidoHTML = `
                <img src="${recompensa.imagen}" alt="${recompensa.nombre}" class="recompensa-imagen">
                <div class="recompensa-titulo">${recompensa.nombre}</div>
                <div class="recompensa-descripcion">${recompensa.descripcion}</div>
                <div class="recompensa-progreso">
                    <div class="recompensa-progreso-bar" style="width: ${porcentaje}%"></div>
                </div>
                <div class="recompensa-progreso-texto">
                    ${recompensa.progresoActual}/${recompensa.requerimiento} mazos completados
                </div>
            `;
        } else {
            contenidoHTML = `
                ${!esDesbloqueado ? '<div class="candado">🔒</div>' : ''}
                <img src="${recompensa.imagen}" alt="${recompensa.nombre}" class="recompensa-imagen">
                <div class="recompensa-titulo">${recompensa.nombre}</div>
                <div class="recompensa-descripcion">${recompensa.descripcion}</div>
            `;
        }
        
        contenidoHTML += `
            <div class="recompensa-estado ${esDesbloqueado ? 'recompensa-desbloqueado' : 'recompensa-bloqueado-texto'}">
                ${esDesbloqueado ? '✅ Desbloqueado' : '🔒 Bloqueado'}
            </div>
        `;
        
        elemento.innerHTML = contenidoHTML;
        
        if (!esLogro && esDesbloqueado) {
            elemento.style.cursor = 'pointer';
            elemento.addEventListener('click', (event) => {
                console.log(`🖱️ Clic en acción: ${recompensa.nombre}`);
                this.reproducirAudioAccion(recompensa, event);
            });
        }
        
        return elemento;
    }

    reproducirAudioAccion(accion, event) {
        console.log('🎵 ReproducirAudioAccion llamado para:', accion.nombre);
        console.log('Audio a reproducir:', accion.audio);
        
        if (accion.audio) {
            this.reproducirAudio(accion.audio);
            
            const elemento = event.currentTarget;
            elemento.style.transform = 'scale(0.95)';
            elemento.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
            
            setTimeout(() => {
                elemento.style.transform = 'scale(1)';
                elemento.style.boxShadow = '';
            }, 200);
        }
    }

    actualizarProgresoRecompensas() {
        const mazosCompletados = this.stats.mazosCompletados;
        
        this.recompensas.logros.forEach(logro => {
            logro.progresoActual = mazosCompletados;
            logro.desbloqueado = mazosCompletados >= logro.requerimiento;
        });

        this.recompensas.acciones.forEach(accion => {
            const logroRequerido = this.recompensas.logros.find(l => l.id === accion.logroRequerido);
            accion.desbloqueado = logroRequerido ? logroRequerido.desbloqueado : false;
        });
    }

    verificarRecompensas() {
        this.actualizarProgresoRecompensas();
        
        const recompensasDesbloqueadas = [
            ...this.recompensas.logros.filter(l => l.desbloqueado),
            ...this.recompensas.acciones.filter(a => a.desbloqueado)
        ].map(r => r.id);

        recompensasDesbloqueadas.forEach(id => {
            if (!this.stats.recompensasDesbloqueadas.includes(id)) {
                const recompensa = [...this.recompensas.logros, ...this.recompensas.acciones].find(r => r.id === id);
                if (recompensa) {
                    console.log(`🎉 ¡${recompensa.tipo === 'logro' ? 'Logro' : 'Acción'} desbloqueado: ${recompensa.nombre}!`);
                    this.stats.recompensasDesbloqueadas.push(id);
                }
            }
        });

        this.guardarStats();
    }

    actualizarPantallaSeleccion() {
        this.statsGlobal.textContent = `🏆 Mazos completados al 100%: ${this.stats.mazosCompletados}`;
    }

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
        
        this.estado.aciertos = 0;
        this.estado.errores = 0;
        this.estado.totalInicial = this.estado.mazoActual.length;
        this.estado.preguntasRespondidas = 0;
        
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

        this.palabraJapones.textContent = palabraActual;
        this.lecturaElement.textContent = '';
        this.resultado.textContent = '';
        this.resultado.className = 'resultado';

        this.actualizarContador();

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

        this.opciones.forEach(boton => boton.disabled = true);

        if (opcionSeleccionada === this.estado.correcta) {
            this.estado.aciertos++;
            this.resultado.textContent = '✅ ¡Correcto!';
            this.resultado.className = 'resultado correcto';

            this.opciones.forEach(boton => {
                if (boton.textContent === this.estado.correcta) {
                    boton.classList.add('correcta');
                }
            });

            this.stats.mazos[this.estado.nombreMazoActual].rachaActual++;
            const rachaActual = this.stats.mazos[this.estado.nombreMazoActual].rachaActual;
            const mejorRacha = this.stats.mazos[this.estado.nombreMazoActual].mejorRacha;
            
            if (rachaActual > mejorRacha) {
                this.stats.mazos[this.estado.nombreMazoActual].mejorRacha = rachaActual;
            }

            this.estado.mazoActual.shift();

            this.lecturaElement.textContent = `Lectura: ${this.estado.lectura}`;

            setTimeout(() => this.mostrarSiguientePalabra(), 1500);

        } else {
            this.estado.errores++;
            this.resultado.textContent = '❌ Incorrecto';
            this.resultado.className = 'resultado incorrecto';

            this.opciones.forEach(boton => {
                if (boton.textContent === this.estado.correcta) {
                    boton.classList.add('correcta');
                } else if (boton.textContent === opcionSeleccionada) {
                    boton.classList.add('incorrecta');
                }
            });

            this.stats.mazos[this.estado.nombreMazoActual].rachaActual = 0;

            this.estado.mazoActual.push(this.estado.mazoActual.shift());

            this.lecturaElement.textContent = `Lectura: ${this.estado.lectura}`;

            setTimeout(() => this.mostrarSiguientePalabra(), 2000);
        }

        this.actualizarContador();
    }

    finalizarQuiz() {
        const porcentaje = Math.max(0, ((this.estado.aciertos - this.estado.errores) / this.estado.totalInicial) * 100);
        
        const statsMazo = this.stats.mazos[this.estado.nombreMazoActual];
        statsMazo.ultimaPuntuacion = porcentaje;
        statsMazo.aciertosTotales += this.estado.aciertos;
        statsMazo.erroresTotales += this.estado.errores;
        
        if (porcentaje > statsMazo.mejorPuntuacion) {
            statsMazo.mejorPuntuacion = porcentaje;
        }
        
        if (porcentaje === 100) {
            this.stats.mazosCompletados++;
            statsMazo.completados100++;
            
            // SISTEMA DE PROBABILIDAD 2/3 PARA IMAGEN ESPECIAL
            const probabilidad = Math.random();
            if (probabilidad < 0.666) { // 2/3 de probabilidad
                console.log('🎰 ¡Probabilidad ganadora! Mostrando imagen especial...');
                setTimeout(() => {
                    this.mostrarImagenEspecial();
                }, 1000);
            } else {
                console.log('🎰 Esta vez no tocó la imagen especial');
            }
        }
        
        this.verificarRecompensas();
        
        this.guardarStats();
        this.mostrarPantalla('resultados');
        
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
