class AplicacionVocabulario {
    constructor() {
        // SISTEMA MEJORADO PARA GITHUB PAGES
        this.esPrimeraVez = false;
        
        // SISTEMA DE VIDEOS POR INACTIVIDAD
        this.ultimaVisitaKey = 'ultimaVisitaVocabulario';
        
        // Video cada 1 DÍA (24 horas)
        this.videoInactividadUrl = 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4';
        this.tiempoInactividadDia = 24 * 60 * 60 * 1000;
        
        // Video cada 8 HORAS (Zahiry)
        this.videoZahiryUrl = 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4';
        this.tiempoInactividadZahiry = 8 * 60 * 60 * 1000;

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
            
            // LAST SUMMER 3 - 5 MAZOS (ACTUALIZADOS)
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
                ["刺激", "Estímulo", "shigeki"],
                ["否定", "Negación", "hitei"],
                ["宝の持ち腐れ", "Tesoro desperdiciado", "takarano mochigare"],
                ["心配", "Preocupación", "shinpai"],
                ["性欲", "Deseo sexual", "seiyoku"],
                ["機会", "Oportunidad", "kikai"],
                ["活かす", "Aprovechar", "ikasu"],
                ["経験不足", "Falta de experiencia", "keiken busoku"],
                ["言い寄る", "Acercarse", "iiyoru"],
                ["飽きる", "Cansarse", "akiru"]
            ],
            
            "LS3 - Mazo 4": [
                ["合格", "Aprobado", "goukaku"],
                ["圧し潰す", "Aplastar", "asshitsubusu"],
                ["密着", "Contacto cercano", "micchaku"],
                ["届く", "Alcanzar", "todoku"],
                ["巻きつく", "Enrollarse", "makitsuku"],
                ["惜しい", "Lástima", "oshii"],
                ["拒否権", "Derecho de veto", "kyohiken"],
                ["経験", "Experiencia", "keiken"],
                ["膣", "Vagina", "chitsu"],
                ["蒸す", "Humedecer", "musu"]
            ],
            
            "LS3 - Mazo 5": [
                ["大体", "Generalmente", "daitai"],
                ["起きる", "Despertar", "okiru"],
                ["宝の持ち腐れ", "Tesoro desperdiciado", "takarano mochigare"],
                ["心配", "Preocupación", "shinpai"],
                ["性欲", "Deseo sexual", "seiyoku"],
                ["機会", "Oportunidad", "kikai"],
                ["活かす", "Aprovechar", "ikasu"],
                ["経験不足", "Falta de experiencia", "keiken busoku"],
                ["言い寄る", "Acercarse", "iiyoru"],
                ["飽きる", "Cansarse", "akiru"]
            ]
        };

        // SISTEMA DE AUDIO
        this.audios = {
            beso: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp3',
            nalgada: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/nalgada.mp3',
            chupada: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/chupada.mp3',
            handjob: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/handjob.mp3',
            risa: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/risa.mp3',
            gemido: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/gemido.mp3',
            susurro: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/susurro.mp3',
            aplausos: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/aplausos.mp3'
        };

        this.audioObjects = {};
        this.cargarAudios();

        // IMAGEN ESPECIAL PARA RECOMPENSAS
        this.imagenEspecial = "https://pbs.twimg.com/media/G5_38X-XUAATGFc?format=jpg&name=small";

        // SISTEMA DE TAREAS DIARIAS
        this.tareasDiarias = {
            'lectura': { nombre: 'Leer 10 minutos', completada: false },
            'idiomas': { nombre: 'Practicar idiomas - 50 palabras', completada: false },
            'correr': { nombre: 'Correr 100 metros', completada: false },
            'trotar': { nombre: 'Trotar 1000 metros', completada: false },
            'fuerza': { nombre: 'Ejercicios de fuerza - 10 pull ups', completada: false }
        };
// SISTEMA DE EVENTOS DIARIOS
this.eventosDiarios = [
    {
        id: 1,
        nombre: "Rescate de Quitillizas",
        imagenInicio: "https://pbs.twimg.com/media/G6EA3MPW0AAdAIi?format=png&name=small",
        descripcion: "Las quitillizas están con sus amantes. Recupéralas si no completas 5 mazos desde ahora las perderás",
        imagenExito: "https://pbs.twimg.com/media/G5hQ9lxX0AAZFPX?format=jpg&name=medium",
        textoExito: "¡Las recuperaste!",
        mazosRequeridos: 5,
        recompensaSoles: 15
    },
    {
        id: 2,
        nombre: "Defensa contra Ichika",
        imagenInicio: "https://i.pximg.net/img-master/img/2025/08/06/08/00/09/133544107_p1_master1200.jpg",
        descripcion: "Ichika está intentando que Nino te olvide y te engañe con otro chico. Si no completas 10 mazos hoy Nino cederá",
        imagenExito: "https://pbs.twimg.com/media/G5Pbm8HXEAAGNP9?format=jpg&name=medium",
        textoExito: "Demostaste tu dominancia con Nino y no permitiste a Ichika que se la llevara con otro chico",
        mazosRequeridos: 10,
        recompensaSoles: 25
    },
    {
        id: 3,
        nombre: "Rescate del Profesor",
        imagenInicio: "https://pbs.twimg.com/media/G5PbknPWkAAfgjK?format=jpg&name=medium",
        descripcion: "El profesor trata de llevarse a Nino de ti. Tendrás que completar 20 mazos hoy para recuperarla",
        imagenExito: "https://pbs.twimg.com/media/G4OWnyyXEAAkOeh?format=jpg&name=medium",
        textoExito: "No dejaste que el profesor te la robara. ¡Bien hecho! :D",
        mazosRequeridos: 20,
        recompensaSoles: 50
    }
];
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

        // SISTEMA DE TIENDA
        this.recompensasTienda = {
            basicas: [
                {
                    id: 101,
                    tipo: "tienda",
                    nombre: "Risa Especial",
                    descripcion: "Una risa contagiosa para alegrar tu día",
                    imagen: "https://pbs.twimg.com/media/G5_wCzcWsAAmHcA?format=png&name=small",
                    precio: 5,
                    comprado: false,
                    audio: "risa"
                },
                {
                    id: 102,
                    tipo: "tienda",
                    nombre: "Susurro Cercano",
                    descripcion: "Un susurro íntimo en tu oído",
                    imagen: "https://pbs.twimg.com/media/G5_wCzcWsAAmHcA?format=png&name=small",
                    precio: 8,
                    comprado: false,
                    audio: "susurro"
                },
                {
                    id: 103,
                    tipo: "tienda",
                    nombre: "Aplausos Motivadores",
                    descripcion: "Aplausos por tu esfuerzo y dedicación",
                    imagen: "https://pbs.twimg.com/media/G5_wCzcWsAAmHcA?format=png&name=small",
                    precio: 12,
                    comprado: false,
                    audio: "aplausos"
                }
            ],
            premium: [
                {
                    id: 201,
                    tipo: "tienda",
                    nombre: "Gemido Íntimo",
                    descripcion: "Un gemido especial solo para ti",
                    imagen: "https://pbs.twimg.com/media/G5_wCzcWsAAmHcA?format=png&name=small",
                    precio: 20,
                    comprado: false,
                    audio: "gemido"
                },
                {
                    id: 202,
                    tipo: "tienda",
                    nombre: "Pack Completo",
                    descripcion: "Todos los audios básicos en un pack especial",
                    imagen: "https://pbs.twimg.com/media/G5_wCzcWsAAmHcA?format=png&name=small",
                    precio: 30,
                    comprado: false,
                    audio: "beso"
                },
                {
                    id: 203,
                    tipo: "tienda",
                    nombre: "Recompensa Máxima",
                    descripcion: "La recompensa más exclusiva de la tienda",
                    imagen: "https://pbs.twimg.com/media/G5_wCzcWsAAmHcA?format=png&name=small",
                    precio: 50,
                    comprado: false,
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

        // MEJORA: Detectar si es primera vez en este dominio
        this.detectarPrimeraVez();
        
        this.stats = this.cargarStats();
        this.inicializarApp();
    }

    // NUEVO MÉTODO: Detectar si es primera vez en GitHub Pages
    detectarPrimeraVez() {
        const dominioActual = window.location.hostname;
        const esGitHubPages = dominioActual.includes('github.io');
        
        if (esGitHubPages) {
            console.log('🌐 Ejecutándose en GitHub Pages');
            const statsExisten = localStorage.getItem('vocabularioStats');
            if (!statsExisten) {
                console.log('🆕 Primera vez en GitHub Pages');
                this.esPrimeraVez = true;
            }
        }
    }

    // MÉTODO: Verificar inactividad del usuario (1 DÍA y 8 HORAS)
    verificarInactividad() {
        const ahora = new Date().getTime();
        const ultimaVisita = localStorage.getItem(this.ultimaVisitaKey);
        
        console.log('🕒 Verificando inactividad...');
        console.log('Dominio actual:', window.location.hostname);
        console.log('Última visita:', ultimaVisita ? new Date(parseInt(ultimaVisita)).toLocaleString() : 'Primera vez');
        
        if (ultimaVisita) {
            const tiempoDesdeUltimaVisita = ahora - parseInt(ultimaVisita);
            const horasDesdeUltimaVisita = Math.round(tiempoDesdeUltimaVisita / 1000 / 60 / 60);
            const diasDesdeUltimaVisita = Math.round(tiempoDesdeUltimaVisita / 1000 / 60 / 60 / 24);
            
            console.log(`⏰ Tiempo desde última visita: ${horasDesdeUltimaVisita} horas (${diasDesdeUltimaVisita} días)`);
            // Verificar eventos diarios al iniciar
this.verificarEventoDiario();
            // Verificar si pasó 1 DÍA (24 horas)
            if (tiempoDesdeUltimaVisita > this.tiempoInactividadDia) {
                console.log('🎬 ¡24 horas de inactividad! Reproduciendo video de Nino...');
                setTimeout(() => {
                    this.reproducirVideoInactividad();
                }, 2000);
            }
            
            // Verificar si pasó 8 HORAS (Zahiry)
            if (tiempoDesdeUltimaVisita > this.tiempoInactividadZahiry) {
                console.log('🎬 ¡8 horas de inactividad! Reproduciendo video de Zahiry...');
                setTimeout(() => {
                    this.reproducirVideoZahiry();
                }, 4000);
            }
        }
        
        // Actualizar el timestamp de la última visita
        localStorage.setItem(this.ultimaVisitaKey, ahora.toString());
    }

    // MÉTODO: Reproducir video por inactividad de 1 DÍA (Nino)
    reproducirVideoInactividad() {
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

        const titulo = document.createElement('div');
        titulo.textContent = '🚨 ALERTA DE CORNUDO 🚨 Descuidaste a Nino y ahora aldo se la esta cogiendo';
        titulo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: #ff6b6b;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

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

        const video = document.createElement('video');
        video.src = this.videoInactividadUrl;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid #ff6b6b;
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
            background: #000;
        `;

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

        video.onerror = () => {
            console.log('❌ Error cargando el video de Nino');
            mensaje.innerHTML = '❌ Error cargando el video<br><small>Pero el mensaje sigue siendo claro 😈</small>';
            mensaje.style.color = '#ffa500';
        };

        videoContainer.appendChild(titulo);
        videoContainer.appendChild(mensaje);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video de Nino:', error);
                video.muted = true;
                video.play();
            });
        }

        setTimeout(() => {
            if (document.body.contains(overlay)) {
                video.pause();
                document.body.removeChild(overlay);
            }
        }, 60000);
    }

    // MÉTODO: Reproducir video por inactividad de 8 HORAS (Zahiry)
    reproducirVideoZahiry() {
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

        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff0000;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = '💔 DESCUIDASTE A ZAHIRY 💔';
        titulo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const mensaje = document.createElement('div');
        mensaje.innerHTML = '🔥 <strong>FABRIZIO NO APRECIA A ZAHIRY</strong> 🔥';
        mensaje.style.cssText = `
            font-size: 1.8rem;
            color: white;
            margin-bottom: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            border: 2px solid white;
        `;

        const video = document.createElement('video');
        video.src = this.videoZahiryUrl;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
            background: #000;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.innerHTML = '❌ CERRAR VIDEO';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #ffffff, #cccccc);
            color: #ff4757;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #ff4757;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(255, 71, 87, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
        };

        video.onended = () => {
            mensaje.innerHTML = '💔 <strong>VIDEO TERMINADO - CUIDA MEJOR A ZAHIRY</strong> 💔';
            mensaje.style.color = '#ffd700';
            mensaje.style.borderColor = '#ffd700';
            mensaje.style.background = 'rgba(255, 215, 0, 0.1)';
            
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 3000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video de Zahiry');
            mensaje.innerHTML = '❌ Error cargando el video<br><small>Pero el mensaje sobre Zahiry sigue siendo importante 💔</small>';
            mensaje.style.color = '#ffd700';
        };

        videoContainer.appendChild(titulo);
        videoContainer.appendChild(mensaje);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video de Zahiry:', error);
                video.muted = true;
                video.play();
            });
        }

        setTimeout(() => {
            if (document.body.contains(overlay)) {
                video.pause();
                document.body.removeChild(overlay);
            }
        }, 60000);
    }
    // SISTEMA DE EVENTOS DIARIOS
    verificarEventoDiario() {
        const hoy = new Date().toDateString();
        const eventoGuardado = localStorage.getItem('eventoDiarioActual');
        
        // Reiniciar eventos a las 3 AM
        const ahora = new Date();
        const horaReinicio = 3; // 3 AM
        const necesitaReinicio = ahora.getHours() >= horaReinicio;
        
        if (!eventoGuardado || necesitaReinicio) {
            // Seleccionar evento aleatorio del día
            this.seleccionarNuevoEventoDiario();
        } else {
            const eventoData = JSON.parse(eventoGuardado);
            
            // Verificar si el evento ya fue completado hoy
            if (eventoData.fecha === hoy && !eventoData.completado) {
                // Mostrar evento pendiente
                setTimeout(() => {
                    this.mostrarEventoDiario(eventoData);
                }, 1000);
            }
        }
    }

    seleccionarNuevoEventoDiario() {
        const eventoAleatorio = this.eventosDiarios[Math.floor(Math.random() * this.eventosDiarios.length)];
        const eventoData = {
            id: eventoAleatorio.id,
            fecha: new Date().toDateString(),
            completado: false,
            mazosCompletadosHoy: 0,
            mazosRequeridos: eventoAleatorio.mazosRequeridos,
            evento: eventoAleatorio
        };
        
        localStorage.setItem('eventoDiarioActual', JSON.stringify(eventoData));
        
        // Mostrar el nuevo evento
        setTimeout(() => {
            this.mostrarEventoDiario(eventoData);
        }, 1000);
    }

    mostrarEventoDiario(eventoData) {
        const evento = eventoData.evento;
        
        const overlay = document.createElement('div');
        overlay.className = 'modal-evento-diario';
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
            z-index: 2000;
            flex-direction: column;
        `;

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-evento-contenido';

        const titulo = document.createElement('div');
        titulo.className = 'modal-evento-titulo';
        titulo.textContent = '🚨 EVENTO DIARIO 🚨';

        const imagen = document.createElement('img');
        imagen.src = evento.imagenInicio;
        imagen.className = 'modal-evento-imagen';
        imagen.alt = evento.nombre;

        const descripcion = document.createElement('div');
        descripcion.className = 'modal-evento-descripcion';
        descripcion.textContent = evento.descripcion;

        const progreso = document.createElement('div');
        progreso.className = 'modal-evento-progreso';
        progreso.innerHTML = `
            <div class="modal-evento-progreso-texto">
                Mazos completados hoy: ${eventoData.mazosCompletadosHoy}/${eventoData.mazosRequeridos}
            </div>
        `;

        const recompensa = document.createElement('div');
        recompensa.className = 'modal-evento-recompensa';
        recompensa.textContent = `Recompensa: ${evento.recompensaSoles} soles`;

        const botonAceptar = document.createElement('button');
        botonAceptar.className = 'boton-aceptar-evento';
        botonAceptar.textContent = '🎯 Aceptar Desafío';
        botonAceptar.onclick = () => {
            document.body.removeChild(overlay);
        };

        modalContent.appendChild(titulo);
        modalContent.appendChild(imagen);
        modalContent.appendChild(descripcion);
        modalContent.appendChild(progreso);
        modalContent.appendChild(recompensa);
        modalContent.appendChild(botonAceptar);
        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);
    }

    verificarCompletadoEventoDiario() {
        const eventoGuardado = localStorage.getItem('eventoDiarioActual');
        if (!eventoGuardado) return;

        const eventoData = JSON.parse(eventoGuardado);
        const hoy = new Date().toDateString();

        if (eventoData.fecha === hoy && !eventoData.completado) {
            eventoData.mazosCompletadosHoy = (eventoData.mazosCompletadosHoy || 0) + 1;

            if (eventoData.mazosCompletadosHoy >= eventoData.mazosRequeridos) {
                eventoData.completado = true;
                this.mostrarEventoCompletado(eventoData);
            }

            localStorage.setItem('eventoDiarioActual', JSON.stringify(eventoData));
        }
    }

    mostrarEventoCompletado(eventoData) {
        const evento = eventoData.evento;
        
        const overlay = document.createElement('div');
        overlay.className = 'modal-evento-diario';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-evento-contenido';
        modalContent.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
        modalContent.style.borderColor = '#00cc66';

        const titulo = document.createElement('div');
        titulo.className = 'modal-evento-titulo';
        titulo.textContent = '🎉 ¡EVENTO COMPLETADO! 🎉';
        titulo.style.color = '#006633';

        const imagen = document.createElement('img');
        imagen.src = evento.imagenExito;
        imagen.className = 'modal-evento-imagen';
        imagen.alt = 'Evento Completado';

        const descripcion = document.createElement('div');
        descripcion.className = 'modal-evento-descripcion';
        descripcion.textContent = evento.textoExito;
        descripcion.style.color = '#006633';

        const recompensa = document.createElement('div');
        recompensa.className = 'modal-evento-recompensa';
        recompensa.textContent = `¡Has ganado ${evento.recompensaSoles} soles!`;
        recompensa.style.color = '#006633';

        const botonCerrar = document.createElement('button');
        botonCerrar.className = 'boton-aceptar-evento';
        botonCerrar.textContent = '✨ ¡Genial! ✨';
        botonCerrar.onclick = () => {
            document.body.removeChild(overlay);
            // Dar recompensa
            this.ganarSoles(evento.recompensaSoles, `Completar evento: ${evento.nombre}`);
        };

        modalContent.appendChild(titulo);
        modalContent.appendChild(imagen);
        modalContent.appendChild(descripcion);
        modalContent.appendChild(recompensa);
        modalContent.appendChild(botonCerrar);
        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);
    }

    // SISTEMA TOONO ESUKE
    inicializarPantallaToono() {
        const toonoCard = document.getElementById('toono-card');
        if (toonoCard) {
            toonoCard.addEventListener('click', () => {
                this.mostrarPantallaToono();
            });
        }

        document.getElementById('boton-volver-menu-toono').onclick = () => {
            this.mostrarPantalla('seleccion');
        };
    }

    mostrarPantallaToono() {
        this.mostrarPantalla('toono');
    }
    // SISTEMA DE TAREAS DIARIAS
    cargarTareasDiarias() {
        const hoy = new Date().toDateString();
        const tareasGuardadas = localStorage.getItem('tareasDiarias');
        
        if (tareasGuardadas) {
            const datos = JSON.parse(tareasGuardadas);
            
            // Si es un nuevo día, reiniciar tareas
            if (datos.fecha !== hoy) {
                this.reiniciarTareasDiarias(datos);
            } else {
                // Cargar tareas del día actual
                this.tareasDiarias = datos.tareas;
            }
        } else {
            // Primera vez - inicializar
            this.guardarTareasDiarias();
        }
    }

    reiniciarTareasDiarias(datosAnteriores) {
        const hoy = new Date().toDateString();
        const ayer = new Date(Date.now() - 86400000).toDateString();
        
        // Verificar si completó todas las tareas ayer para mantener la racha
        if (datosAnteriores.fecha === ayer) {
            const tareasCompletadasAyer = Object.values(datosAnteriores.tareas).filter(t => t.completada).length;
            if (tareasCompletadasAyer === 5) {
                // Incrementar racha
                this.stats.rachaDiarias = (this.stats.rachaDiarias || 0) + 1;
                if (this.stats.rachaDiarias > (this.stats.mejorRachaDiarias || 0)) {
                    this.stats.mejorRachaDiarias = this.stats.rachaDiarias;
                }
            } else {
                // Reiniciar racha
                this.stats.rachaDiarias = 0;
            }
            this.guardarStats();
        }
        
        // Reiniciar tareas para hoy
        for (let tarea in this.tareasDiarias) {
            this.tareasDiarias[tarea].completada = false;
        }
        
        this.guardarTareasDiarias();
    }

    guardarTareasDiarias() {
        const datos = {
            fecha: new Date().toDateString(),
            tareas: this.tareasDiarias
        };
        localStorage.setItem('tareasDiarias', JSON.stringify(datos));
    }

    toggleTarea(tareaId) {
        if (this.tareasDiarias[tareaId]) {
            const estabaCompletada = this.tareasDiarias[tareaId].completada;
            this.tareasDiarias[tareaId].completada = !this.tareasDiarias[tareaId].completada;
            
            // Calcular ganancias
            if (!estabaCompletada && this.tareasDiarias[tareaId].completada) {
                this.ganarSoles(5, `Completar tarea: ${this.tareasDiarias[tareaId].nombre}`);
                
                // Verificar si completó todas las tareas para bonus
                const tareasCompletadas = Object.values(this.tareasDiarias).filter(t => t.completada).length;
                if (tareasCompletadas === 5) {
                    this.ganarSoles(10, "Bonus por completar todas las tareas diarias");
                }
            }
            
            this.guardarTareasDiarias();
            this.actualizarPantallaTareas();
            this.actualizarEstadisticasDiarias();
        }
    }

    actualizarPantallaTareas() {
        for (let tareaId in this.tareasDiarias) {
            const checkbox = document.getElementById(`check-${tareaId}`);
            const estadoElement = document.getElementById(`estado-${tareaId}`);
            const tareaElement = document.getElementById(`tarea-${tareaId}`);
            
            if (checkbox && estadoElement && tareaElement) {
                checkbox.checked = this.tareasDiarias[tareaId].completada;
                
                if (this.tareasDiarias[tareaId].completada) {
                    estadoElement.textContent = '✅ Completada';
                    estadoElement.className = 'tarea-estado completada';
                    tareaElement.className = 'tarea completada';
                } else {
                    estadoElement.textContent = '⏳ Pendiente';
                    estadoElement.className = 'tarea-estado pendiente';
                    tareaElement.className = 'tarea';
                }
            }
        }
        
        this.actualizarProgresoTareas();
    }

    actualizarProgresoTareas() {
        const tareasCompletadas = Object.values(this.tareasDiarias).filter(t => t.completada).length;
        const totalTareas = Object.keys(this.tareasDiarias).length;
        const porcentaje = (tareasCompletadas / totalTareas) * 100;
        
        const barraProgreso = document.getElementById('barra-progreso-tareas');
        const textoProgreso = document.getElementById('texto-progreso-tareas');
        const rachaActual = document.getElementById('racha-actual');
        const mejorRacha = document.getElementById('mejor-racha');
        const gananciasDiarias = document.getElementById('ganancias-diarias');
        
        if (barraProgreso) {
            barraProgreso.style.width = `${porcentaje}%`;
        }
        if (textoProgreso) {
            textoProgreso.textContent = `${tareasCompletadas}/${totalTareas} tareas completadas`;
        }
        if (rachaActual) {
            rachaActual.textContent = `🔥 Racha actual: ${this.stats.rachaDiarias || 0} días`;
        }
        if (mejorRacha) {
            mejorRacha.textContent = `🏆 Mejor racha: ${this.stats.mejorRachaDiarias || 0} días`;
        }
        if (gananciasDiarias) {
            const gananciasHoy = tareasCompletadas * 5;
            gananciasDiarias.textContent = `💰 Ganancias de hoy: ${gananciasHoy} soles`;
        }
    }

    actualizarEstadisticasDiarias() {
        const tareasCompletadas = Object.values(this.tareasDiarias).filter(t => t.completada).length;
        const statsDiarias = document.getElementById('stats-diarias');
        if (statsDiarias) {
            statsDiarias.textContent = `✅ Tareas de hoy: ${tareasCompletadas}/5`;
        }
    }

    // SISTEMA DE MONEDAS (SOLES)
    ganarSoles(cantidad, razon) {
        console.log(`💰 Ganando ${cantidad} soles por: ${razon}`);
        
        this.stats.soles = (this.stats.soles || 0) + cantidad;
        this.stats.solesGanadosTotal = (this.stats.solesGanadosTotal || 0) + cantidad;
        
        this.guardarStats();
        this.actualizarEstadisticasSoles();
        
        // Mostrar notificación
        this.mostrarNotificacionSoles(cantidad, razon);
    }

    gastarSoles(cantidad, razon) {
        if (this.stats.soles >= cantidad) {
            this.stats.soles -= cantidad;
            this.guardarStats();
            this.actualizarEstadisticasSoles();
            console.log(`💸 Gastados ${cantidad} soles en: ${razon}`);
            return true;
        }
        return false;
    }

    mostrarNotificacionSoles(cantidad, razon) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ffd700, #ffa500);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
            border: 2px solid #ff8c00;
            animation: slideInRight 0.5s ease;
        `;

        notificacion.innerHTML = `
            <div>💰 +${cantidad} soles</div>
            <div style="font-size: 0.8rem; opacity: 0.9;">${razon}</div>
        `;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
    }

    actualizarEstadisticasSoles() {
        const statsSoles = document.getElementById('stats-soles');
        const balanceSoles = document.getElementById('balance-soles');
        const gananciasTotales = document.getElementById('ganancias-totales');
        
        if (statsSoles) {
            statsSoles.textContent = `💰 Soles: ${this.stats.soles || 0}`;
        }
        if (balanceSoles) {
            balanceSoles.textContent = `💰 Soles disponibles: ${this.stats.soles || 0} soles`;
        }
        if (gananciasTotales) {
            gananciasTotales.textContent = `🏆 Soles ganados en total: ${this.stats.solesGanadosTotal || 0} soles`;
        }
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

   mostrarImagenEspecial(imagenUrl = null, titulo = null, audio = null) {
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

    const tituloElement = document.createElement('div');
    tituloElement.textContent = titulo || '🎉 Nino esta feliz :D te la podras coger pronto 🎉';
    tituloElement.style.cssText = `
        font-size: 2rem;
        font-weight: bold;
        color: white;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    `;

    const imagen = document.createElement('img');
    imagen.src = imagenUrl || this.imagenEspecial;
    imagen.style.cssText = `
        max-width: 400px;
        max-height: 400px;
        border-radius: 15px;
        border: 3px solid white;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    `;

    const mensaje = document.createElement('div');
    mensaje.textContent = '¡Felicidades por completar el mazo al 100%!';
    mensaje.style.cssText = `
        font-size: 1.3rem;
        color: white;
        margin-top: 20px;
        font-weight: bold;
    `;

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

    imagenContainer.appendChild(tituloElement);
    imagenContainer.appendChild(imagen);
    imagenContainer.appendChild(mensaje);
    imagenContainer.appendChild(botonCerrar);
    overlay.appendChild(imagenContainer);
    document.body.appendChild(overlay);

    // Reproducir audio específico o el audio por defecto
    setTimeout(() => {
        this.reproducirAudio(audio || 'beso');
    }, 500);

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
            
            // Inicializar estadísticas de tareas diarias si no existen
            if (!stats.rachaDiarias) stats.rachaDiarias = 0;
            if (!stats.mejorRachaDiarias) stats.mejorRachaDiarias = 0;
            
            // Inicializar sistema de soles
            if (!stats.soles) stats.soles = 0;
            if (!stats.solesGanadosTotal) stats.solesGanadosTotal = 0;
            
            // Inicializar recompensas compradas en tienda
            if (!stats.recompensasCompradas) stats.recompensasCompradas = [];
            
            for (const nombreMazo in this.mazos) {
                if (!stats.mazos[nombreMazo]) {
                    stats.mazos[nombreMazo] = this.crearStatsMazoVacio();
                }
            }
            
            return stats;
        }
        
        const stats = { 
            mazosCompletados: 0, 
            mazos: {},
            recompensasDesbloqueadas: [],
            rachaDiarias: 0,
            mejorRachaDiarias: 0,
            soles: 0,
            solesGanadosTotal: 0,
            recompensasCompradas: []
        };
        
        for (const nombreMazo in this.mazos) {
            stats.mazos[nombreMazo] = this.crearStatsMazoVacio();
        }
        
        return stats;
    }

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
            lastsummer3: document.getElementById('pantalla-lastsummer3-mazos'),
            diarias: document.getElementById('pantalla-diarias'),
            tienda: document.getElementById('pantalla-tienda'),
            fabrizio: document.getElementById('pantalla-fabrizio')
        };

        // Cargar sistema de tareas diarias
        this.cargarTareasDiarias();
        
        this.inicializarPantallaSeleccion();
        this.inicializarPantallaQuiz();
        this.inicializarPantallaResultados();
        this.inicializarPantallaNovia();
        this.inicializarPantallaLastSummer();
        this.inicializarSeccionLastSummer();
        this.inicializarPantallasLastSummerMazos();
        this.inicializarPantallaDiarias();
        this.inicializarPantallaTienda();
        this.inicializarPantallaFabrizio();
        this.inicializarPantallaToono();
        // Mostrar mensaje si es primera vez en GitHub Pages
        if (this.esPrimeraVez) {
            setTimeout(() => {
                alert('🌐 ¡Bienvenido a GitHub Pages! Tu progreso ahora se sincronizará entre dispositivos.');
            }, 1000);
        }
        
        this.mostrarPantalla('seleccion');
    }

    inicializarPantallaFabrizio() {
        // Botón volver
        document.getElementById('boton-volver-menu-fabrizio').onclick = () => {
            this.mostrarPantalla('seleccion');
        };
    }

    inicializarPantallaDiarias() {
        // Botón volver
        document.getElementById('boton-volver-menu-diarias').onclick = () => {
            this.mostrarPantalla('seleccion');
        };

        // Event listeners para checkboxes
        document.getElementById('check-lectura').addEventListener('change', () => this.toggleTarea('lectura'));
        document.getElementById('check-idiomas').addEventListener('change', () => this.toggleTarea('idiomas'));
        document.getElementById('check-correr').addEventListener('change', () => this.toggleTarea('correr'));
        document.getElementById('check-trotar').addEventListener('change', () => this.toggleTarea('trotar'));
        document.getElementById('check-fuerza').addEventListener('change', () => this.toggleTarea('fuerza'));

        // Actualizar pantalla
        this.actualizarPantallaTareas();
    }

    inicializarPantallasLastSummerMazos() {
        document.getElementById('boton-volver-lastsummer1').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
        
        document.getElementById('boton-volver-lastsummer2').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
        
        document.getElementById('boton-volver-lastsummer3').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
    }

    inicializarPantallaSeleccion() {
        this.statsGlobal = document.getElementById('stats-global');
        
        // Inicializar tarjeta de tareas diarias
        const diariasCard = document.getElementById('diarias-card');
        if (diariasCard) {
            diariasCard.addEventListener('click', () => {
                this.mostrarPantalla('diarias');
            });
        }
        
        // Inicializar tarjeta de tienda
        const tiendaCard = document.getElementById('tienda-card');
        if (tiendaCard) {
            tiendaCard.addEventListener('click', () => {
                this.mostrarPantallaTienda();
            });
        }
        
        // Inicializar tarjeta de Fabrizio 2025
        const fabrizioCard = document.getElementById('fabrizio-card');
        if (fabrizioCard) {
            fabrizioCard.addEventListener('click', () => {
                this.mostrarPantallaFabrizio();
            });
        }
        
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
        
        document.getElementById('lastsummer1').onclick = () => this.mostrarMazosLastSummer1();
        document.getElementById('lastsummer2').onclick = () => this.mostrarMazosLastSummer2();
        document.getElementById('lastsummer3').onclick = () => this.mostrarMazosLastSummer3();
    }

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

    mostrarPantallaFabrizio() {
        this.mostrarPantalla('fabrizio');
    }

    // SISTEMA DE TIENDA
    inicializarPantallaTienda() {
        this.contenedorRecompensasBasicas = document.getElementById('contenedor-recompensas-basicas');
        this.contenedorRecompensasPremium = document.getElementById('contenedor-recompensas-premium');
        this.botonVolverMenuTienda = document.getElementById('boton-volver-menu-tienda');
        
        this.botonVolverMenuTienda.onclick = () => this.mostrarPantalla('seleccion');
    }

    mostrarPantallaTienda() {
        this.actualizarPantallaTienda();
        this.mostrarPantalla('tienda');
    }

    actualizarPantallaTienda() {
        this.actualizarEstadisticasSoles();
        
        // Actualizar recompensas básicas
        this.contenedorRecompensasBasicas.innerHTML = '';
        this.recompensasTienda.basicas.forEach(recompensa => {
            const recompensaElement = this.crearElementoRecompensaTienda(recompensa);
            this.contenedorRecompensasBasicas.appendChild(recompensaElement);
        });

        // Actualizar recompensas premium
        this.contenedorRecompensasPremium.innerHTML = '';
        this.recompensasTienda.premium.forEach(recompensa => {
            const recompensaElement = this.crearElementoRecompensaTienda(recompensa);
            this.contenedorRecompensasPremium.appendChild(recompensaElement);
        });
    }

    crearElementoRecompensaTienda(recompensa) {
        const elemento = document.createElement('div');
        const esComprado = this.stats.recompensasCompradas.includes(recompensa.id);
        const puedeComprar = this.stats.soles >= recompensa.precio && !esComprado;
        
        elemento.className = `recompensa ${esComprado ? 'recompensa-comprada' : (puedeComprar ? '' : 'recompensa-bloqueado')}`;
        
        let contenidoHTML = `
            <img src="${recompensa.imagen}" alt="${recompensa.nombre}" class="recompensa-imagen">
            <div class="recompensa-titulo">${recompensa.nombre}</div>
            <div class="recompensa-descripcion">${recompensa.descripcion}</div>
            <div class="recompensa-precio">💰 ${recompensa.precio} soles</div>
        `;
        
        if (!esComprado && !puedeComprar) {
            contenidoHTML += '<div class="candado">🔒</div>';
        }
        
        contenidoHTML += `
            <div class="recompensa-estado ${esComprado ? 'recompensa-comprado-texto' : (puedeComprar ? 'recompensa-desbloqueado' : 'recompensa-bloqueado-texto')}">
                ${esComprado ? '✅ Comprado' : (puedeComprar ? '🛒 Comprar' : '🔒 Bloqueado')}
            </div>
        `;
        
        elemento.innerHTML = contenidoHTML;
        
        if (puedeComprar) {
            elemento.style.cursor = 'pointer';
            elemento.addEventListener('click', () => {
                this.comprarRecompensa(recompensa);
            });
        } else if (esComprado) {
            elemento.style.cursor = 'pointer';
            elemento.addEventListener('click', () => {
                this.usarRecompensaComprada(recompensa);
            });
        }
        
        return elemento;
    }

    comprarRecompensa(recompensa) {
        if (this.gastarSoles(recompensa.precio, `Comprar: ${recompensa.nombre}`)) {
            this.stats.recompensasCompradas.push(recompensa.id);
            this.guardarStats();
            this.actualizarPantallaTienda();
            
            // Mostrar mensaje de éxito
            this.mostrarNotificacionCompra(recompensa);
        }
    }

    usarRecompensaComprada(recompensa) {
        console.log(`🎁 Usando recompensa comprada: ${recompensa.nombre}`);
        
        // Mostrar modal con la imagen y reproducir audio
        this.mostrarModalRecompensa(recompensa);
    }

    mostrarModalRecompensa(recompensa) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-recompensa';
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
            z-index: 1000;
            flex-direction: column;
        `;

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-recompensa-contenido';
        modalContent.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.className = 'modal-recompensa-titulo';
        titulo.textContent = recompensa.nombre;

        const imagen = document.createElement('img');
        imagen.src = recompensa.imagen;
        imagen.className = 'modal-recompensa-imagen';
        imagen.alt = recompensa.nombre;

        const descripcion = document.createElement('div');
        descripcion.className = 'modal-recompensa-descripcion';
        descripcion.textContent = recompensa.descripcion;

        const botonCerrar = document.createElement('button');
        botonCerrar.className = 'boton-cerrar-modal';
        botonCerrar.textContent = '✨ Cerrar ✨';
        botonCerrar.onclick = () => {
            document.body.removeChild(overlay);
        };

        modalContent.appendChild(titulo);
        modalContent.appendChild(imagen);
        modalContent.appendChild(descripcion);
        modalContent.appendChild(botonCerrar);
        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);

        // Reproducir audio asociado
        if (recompensa.audio) {
            setTimeout(() => {
                this.reproducirAudio(recompensa.audio);
            }, 500);
        }

        // Cerrar automáticamente después de 8 segundos
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 8000);
    }

    mostrarNotificacionCompra(recompensa) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00ff88, #00cc66);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
            border: 2px solid #00cc66;
            animation: slideInRight 0.5s ease;
        `;

        notificacion.innerHTML = `
            <div>🎉 ¡Compra exitosa!</div>
            <div style="font-size: 0.8rem; opacity: 0.9;">Has comprado: ${recompensa.nombre}</div>
        `;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
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
        this.actualizarEstadisticasDiarias();
        this.actualizarEstadisticasSoles();
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
        
        // Ganar 1 sol por completar mazo al 100%
        this.ganarSoles(1, "Completar mazo al 100%");
            // Verificar si completó mazo para evento diario
    this.verificarCompletadoEventoDiario();
        // SISTEMA MEJORADO DE PROBABILIDADES PARA IMÁGENES ESPECIALES
        const probabilidad = Math.random() * 100; // 0 a 100%
        
        console.log(`🎰 Probabilidad calculada: ${probabilidad.toFixed(2)}%`);
        
        if (probabilidad < 30) {
            // 30% de probabilidad - Besas a Nino
            console.log('🎰 ¡30% de probabilidad! Mostrando imagen de besar a Nino...');
            setTimeout(() => {
                this.mostrarImagenEspecial(
                    "https://pbs.twimg.com/media/G5PIDjDWAAAh9Mt?format=jpg&name=medium",
                    "💋 Besas a Nino 💋",
                    "beso"
                );
            }, 1000);
        } else if (probabilidad < 40) {
            // 10% de probabilidad - Nino te la chupa
            console.log('🎰 ¡10% de probabilidad! Mostrando imagen de Nino chupando...');
            setTimeout(() => {
                this.mostrarImagenEspecial(
                    "https://pbs.twimg.com/media/G5PIF7yXAAAKUj4?format=jpg&name=medium",
                    "😋 Nino te la chupa 😋",
                    "chupada"
                );
            }, 1000);
        } else if (probabilidad < 49) {
            // 9% de probabilidad - Nino te chupa el ano
            console.log('🎰 ¡9% de probabilidad! Mostrando imagen de Nino chupando el ano...');
            setTimeout(() => {
                this.mostrarImagenEspecial(
                    "https://pbs.twimg.com/media/G5PIriwXgAA8BaU?format=jpg&name=360x360",
                    "🍑 Nino te chupa el ano 🍑",
                    "chupada"
                );
            }, 1000);
        } else if (probabilidad < 83.33) {
            // 34.33% de probabilidad - Imagen original (2/3 ≈ 66.67% del 51% restante)
            console.log('🎰 ¡Probabilidad original! Mostrando imagen especial...');
            setTimeout(() => {
                this.mostrarImagenEspecial();
            }, 1000);
        } else {
            // 16.67% de probabilidad - No sale imagen especial
            console.log('🎰 Esta vez no tocó ninguna imagen especial');
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
   Mazos completados al 100%: ${this.stats.mazosCompletados}
   Soles disponibles: ${this.stats.soles || 0}`;
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
