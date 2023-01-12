import Vue from 'vue';
import './app.scss'

new Vue({
    el: '#app',
    data: {
        tab: '',
        hover: false,
        show: true,
        scrollPosition: '',
        cards: [{
                title: 'Convengo.it',
                tags: ['HTML', 'SCSS', 'JS', 'VUE', 'LARAVEL', 'PHP'],
                webUrl: 'https://convengo.it',
                showWebBtn: true,
                codeUrl: '',
                pathImg: 'https://i.ibb.co/mS32WTw/convengo-it.png',
                info: 'Sistema di comparazione che permette a tutti, privati e aziende, di accedere e confrontare le offerte e i fornitori luce, gas, internet casa e non solo, in modo semplice e veloce, con la possibilità di richiedere una consulenza personalizzata.',
            },
            {
                title: 'Area Utente',
                tags: ['VUE', 'VUE-ROUTER', 'AXIOS', 'LARAVEL'],
                webUrl: 'https://areautente.convengo.it',
                showWebBtn: true,
                codeUrl: '',
                pathImg: 'https://i.ibb.co/JCB2XyW/area-utente.png',
                info: 'Area Utente di Convengo.it, in cui gli utenti possono usufruire dei punti a loro disposizione per ottenere cashback ed acquistare nuovi prodotti.',
            },
            {
                title: 'Amicatariffa.it',
                tags: ['HTML', 'SCSS', 'JS', 'VUE', 'LARAVEL', 'PHP'],
                webUrl: 'https://amicatariffa.it',
                showWebBtn: true,
                codeUrl: '',
                pathImg: 'https://i.ibb.co/dkjTgDR/amicatariffa.png',
                info: 'Sistema di comparazione che permette a tutti, privati e aziende, di accedere e confrontare le offerte e i fornitori luce, gas, internet casa e non solo, in modo semplice e veloce, con la possibilità di richiedere una consulenza personalizzata.',
            },
            {
                title: 'Boolflix',
                tags: ['HTML', 'CSS', 'JS', 'VUE'],
                webUrl: 'https://gabbobazinga.github.io/Boolflix/',
                codeUrl: 'https://github.com/gabbobazinga/Boolflix',
                pathImg: 'https://i.ibb.co/Mp8xkDN/boolflix.png',
                info: 'Riproduzione di un sito simil Netflix con utilizzo di Vue, chiamate delle API del sito "The Movie DB" tramite Axios. Homepage che mostra i film più popolari suddivisi per categoria, possibilità di visione serie tv e film più popolari, implementazione dell "Infinite Scroll".',
            },
            {
                title: 'Spotify',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: 'https://gabbobazinga.github.io/Spotifyweb/',
                codeUrl: 'https://github.com/gabbobazinga/Spotifyweb',
                pathImg: 'https://i.ibb.co/hmDw0z9/spotify-web.png',
                info: 'Riproduzione dell interfaccia del sito di Spotify Web, compreso il lato responsive.',
            },
            {
                title: 'Boolzapp',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/vue-boolzapp',
                pathImg: 'https://i.ibb.co/5Wb9SZY/bollzap.png',
                info: 'Web app realizzata con HTML, CSS e JQuery ispirata al sito web di Whatsapp. Simulazione di invio di messaggi con risposta automatica programmata, ricerca dei contatti dinamica e cancellazione messaggi.',
            },
            {
                title: 'Boolpress',
                tags: ['HTML', 'CSS', 'Laravel', 'MySql'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/laravel-boolpress',
                pathImg: 'https://i.ibb.co/BZPZfgt/boolpress.png',
                info: 'Progetto basato sull uso di Laravel, del pattern MVC e MySql.',
            },
            {
                title: 'CampoMinato',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: 'https://gabbobazinga.github.io/campominato/',
                codeUrl: 'https://github.com/gabbobazinga/campominato',
                pathImg: 'https://i.ibb.co/rHgpN8q/campominato.png',
                info: 'Riproduzione del famoso gioco Campo Minato con l uso di HTML/CSS e JavaScript.',
            },
            {
                title: 'DigitalOcean',
                tags: ['HTML', 'CSS'],
                webUrl: 'https://gabbobazinga.github.io/DigitalOcean/',
                codeUrl: 'https://github.com/gabbobazinga/DigitalOcean',
                pathImg: 'https://i.ibb.co/WG47Td4/digital-ocean.png',
                info: 'Riproduzione della Homepage del sito di DigitalOcean con HTML e CSS.',
            },
            {
                title: 'HubSpot',
                tags: ['HTML', 'CSS'],
                webUrl: 'https://gabbobazinga.github.io/HubSpot/',
                codeUrl: 'https://github.com/gabbobazinga/HubSpot',
                pathImg: 'https://i.ibb.co/zFP0P1q/hubspot.png',
                info: 'Riproduzione della Homepage del sito di Hubspot con HTML e CSS',
            },
            {
                title: 'To-Do List',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: 'https://gabbobazinga.github.io/to-do-list/',
                codeUrl: 'https://github.com/gabbobazinga/to-do-list',
                pathImg: 'https://i.ibb.co/kyTFKkW/to-do-list.png',
                info: 'Creazione di una To Do List con l uso di HTML/CSS e JQuery che ti permette di aggiungere e rimuovere elementi potendoli evidenziare una volta completati con un click.',
            }
        ]
    },
    methods: {
        scroll() {
            var offset = 100;
            var el = document.getElementById(this.tab);
            window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
        },
        handleScroll() {
            this.scrollPosition = window.scrollY;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
});

$(document).ready(function(){
    $('.logos').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
              }
            }
          ]
    });
});