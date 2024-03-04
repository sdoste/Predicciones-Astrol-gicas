function guess() {
    document.getElementById("result").style.backgroundColor = "rgb(141, 120, 233)";

    let signo = document.getElementById("userInput").value.toLowerCase();
    let horoscopo = document.getElementById("description");
    let imagen = document.getElementById("imagen");
    
    switch (signo) {
            case "aries":
            document.getElementById("zodiacSign").innerHTML = "Aries";
            horoscopo.innerHTML = "Este es un momento para enfocarte en tus objetivos y metas. Mantén tu determinación y no te desanimes por los obstáculos que puedan surgir en tu camino. Confía en tu intuición y sigue adelante con valentía.";
            imagen.style.backgroundImage = "url(/images/aries.JPG)";
            break;
        case "tauro":
            document.getElementById("zodiacSign").innerHTML = "Tauro";
            horoscopo.innerHTML ="Es posible que te sientas más terco de lo habitual en este momento, pero trata de mantener la mente abierta a nuevas ideas y perspectivas. Busca el equilibrio entre la estabilidad y la flexibilidad en tus decisiones.";
            imagen.style.backgroundImage = "url(/images/tauro.JPG)";
            break;
        case "géminis":
        case "geminis":
            document.getElementById("zodiacSign").innerHTML = "Géminis";
            horoscopo.innerHTML = "Tu mente estará especialmente activa en este período, lo que te permitirá comunicarte de manera efectiva y generar nuevas ideas. Aprovecha esta energía para conectarte con los demás y buscar nuevas oportunidades de crecimiento personal.";
            imagen.style.backgroundImage = "url(/images/geminis.JPG)";
            break;
        case "cáncer":
        case "cancer":
            document.getElementById("zodiacSign").innerHTML = "Cáncer";
            horoscopo.innerHTML = " Este es un momento para enfocarte en tu bienestar emocional. Dedica tiempo a cuidar de ti mismo y nutrir tus relaciones cercanas. Confía en tus instintos y sigue tu corazón en tus decisiones.";
            imagen.style.backgroundImage = "url(/images/cancer.JPG)";
            break;
        case "leo":
            document.getElementById("zodiacSign").innerHTML = "Leo";
            horoscopo.innerHTML = "Tu creatividad y confianza estarán en alza en este período, lo que te ayudará a destacar en tus proyectos y relaciones personales. Aprovecha esta energía para perseguir tus pasiones y buscar nuevas formas de expresión.";
            imagen.style.backgroundImage = "url(/images/LEO.JPG)";
            break;
        case "virgo":
            document.getElementById("zodiacSign").innerHTML = "Virgo";
            horoscopo.innerHTML = "Este es un buen momento para enfocarte en la organización y la planificación. Dedica tiempo a establecer metas claras y desarrollar estrategias para alcanzarlas. Mantén la mente abierta a nuevas oportunidades que puedan surgir.";
            imagen.style.backgroundImage = "url(/images/virgo.JPG)";
            break;
        case "libra":
            document.getElementById("zodiacSign").innerHTML = "Libra";
            horoscopo.innerHTML = "Es posible que te encuentres buscando un mayor equilibrio en tus relaciones y en tu vida en general en este momento. Trata de mantener la armonía y la diplomacia en tus interacciones con los demás.";
            imagen.style.backgroundImage = "url(/images/libra.JPG)";
            break;
        case "escorpio":
            document.getElementById("zodiacSign").innerHTML = "Escorpio";
            horoscopo.innerHTML = "Este es un momento para profundizar en tus emociones y explorar tu mundo interior. Dedica tiempo a la introspección y al autoconocimiento. Confía en tu intuición para tomar decisiones importantes.";
            imagen.style.backgroundImage = "url(/images/escorpio.JPG)";
            break; 
        case "sagitario":
            document.getElementById("zodiacSign").innerHTML = "Sagitario";
            horoscopo.innerHTML = "Te sentirás impulsado a buscar nuevas aventuras y experiencias en este período. Aprovecha esta energía para expandir tus horizontes y salir de tu zona de confort. Mantén una mente abierta y sé receptivo a las oportunidades que se presenten.";
            imagen.style.backgroundImage = "url(/images/sagitario.JPG)";
            break;
        case "capricornio":
            document.getElementById("zodiacSign").innerHTML = "Capricornio";
            horoscopo.innerHTML = "Es posible que te sientas más enfocado en tu carrera y tus objetivos profesionales en este momento. Dedica tiempo a establecer planes a largo plazo y trabajar diligentemente para alcanzar tus metas.";
            imagen.style.backgroundImage = "url(/images/capricornio.JPG)";
            break;
        case "acuario":
            document.getElementById("zodiacSign").innerHTML = "Acuario";
            horoscopo.innerHTML = "Este es un buen momento para conectarte con tus amigos y comunidades. Busca oportunidades para colaborar con otros en proyectos que te apasionen y que tengan un impacto positivo en el mundo.";
            imagen.style.backgroundImage = "url(/images/acuario.JPG)";
            break;
        case "piscis":
            document.getElementById("zodiacSign").innerHTML = "Piscis";
            horoscopo.innerHTML = "Te encontrarás más sensible y compasivo con los demás en este período. Dedica tiempo a cuidar de aquellos que te rodean y a practicar la autocompasión. Confía en tu intuición y sigue tu corazón en tus decisiones.";
            imagen.style.backgroundImage = "url(/images/piscis.JPG)";
            break;
        default:
            document.getElementById("zodiacSign").innerHTML = "";
            horoscopo.innerHTML = "";
            document.getElementById("result").style.backgroundColor = "transparent";
            imagen.style.backgroundImage = "";
            window.alert("Signo de horóscopo no válido.");
            break;  
    }

}