document.addEventListener("DOMContentLoaded", () => {
    const $d = document;

    const themeD = "dark_theme";
    const themeL = "light_theme";
    let currentTheme = themeD;
    //^ THEME ICONS
    const sunIcon =
        '<svg class="theme_icon_svg" id="sun_icon_svg"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Tema día</title><path class="cls-1" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/></svg>';
    const moonIcon =
        '<svg class="theme_icon_svg" id="moon_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Tema noche</title><path class="cls-1" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/></svg>';

    //^ DISPLAY NAMES
    const flx = "flex";
    const blk = "block";
    const none = "none";
    //^ STATUS
    const close = "close";
    const open = "open";
    const accepted = "accepted";
    const decline = "decline";

    let menuStatus = close;
    let menuSocialStatus = close;
    let dropDownStatus = close;
    let slidersServicesCount = 0;
    let sliderFullCountServices = 0;

    //^ LOCAL STORAGE
    const localStorageName = "JohnK_page_storage";
    let storageForJohnKPage = {
        page_view_count: 1,
        page_alert_status: open,
        page_legal_content: accepted,
    };

    //^ SOFTWARE DATA
    const infoSoftware = [
        {
            tech_name: "Illustrator",
            tech_complete_name: "Adobe Illustrator",
            tech_info:
                "Editor de gráficos vectoriales en forma de taller de arte que trabaja sobre un tablero de dibujo, conocido como «mesa de trabajo» y está destinado a la creación artística de dibujo y pintura para ilustración, para crear y diseñar imágenes, sirve para editar entre otras cosas.",
            icon: '<div class="icon_container"><svg class="illustrator_icon_svg adobe_icon tech_icon_card" data-name="illustrator_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>Adobe Illustrator</title><path class="cls-1" d="M3.91,0H21.09A3.91,3.91,0,0,1,25,3.91V21.09A3.91,3.91,0,0,1,21.09,25H3.91A3.91,3.91,0,0,1,0,21.09V3.91A3.91,3.91,0,0,1,3.91,0" /><path class="cls-2" d="M12.19,15.22H8.37l-.78,2.55a.19.19,0,0,1-.19.15H5.46c-.11,0-.15-.06-.11-.19L8.64,8.22c0-.1.07-.21.1-.34a2.1,2.1,0,0,0,.07-.56.1.1,0,0,1,.08-.12h2.66c.08,0,.12,0,.13.08l3.76,10.47c0,.11,0,.17-.1.17H13.19A.16.16,0,0,1,13,17.8ZM9,13.46h2.79c-.06-.22-.29-.73-.38-1s-.21-.5-.31-.81-.19-.63-.29-.94l-.28-.91c-.08-.29-.15-.56-.22-.8h0c-.09.44-.21.88-.34,1.32s-.32,1-.47,1.52S9.1,13,9,13.46Z"/><path class="cls-2" d="M17.67,8.93a1.17,1.17,0,0,1-.9-.37,1.26,1.26,0,0,1-.35-.94,1.23,1.23,0,0,1,.37-.92,1.31,1.31,0,0,1,.92-.35,1.25,1.25,0,0,1,.93.35,1.3,1.3,0,0,1,.34.92,1.3,1.3,0,0,1-.36.94,1.28,1.28,0,0,1-.95.37M16.6,17.75V10.2c0-.1,0-.15.14-.15h1.87c.09,0,.14,0,.14.15v7.55c0,.11-.05.17-.14.17H16.75c-.1,0-.15-.06-.15-.17"/></svg></div>',
        },
        {
            tech_name: "Photoshop",
            tech_complete_name: "Adobe Photoshop",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="photoshop_icon_svg adobe_icon tech_icon_card" data-name="photoshop_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>Adobe Photoshop</title><path class="cls-1" d="M3.91,0H21.09A3.91,3.91,0,0,1,25,3.91V21.09A3.91,3.91,0,0,1,21.09,25H3.91A3.91,3.91,0,0,1,0,21.09V3.91A3.91,3.91,0,0,1,3.91,0" /><path class="cls-2" d="M5.58,17.77V7.21c0-.07,0-.11.1-.11h.63l.78,0H8.92A6.28,6.28,0,0,1,11,7.36a3.72,3.72,0,0,1,1.38.85,3.1,3.1,0,0,1,.75,1.16,3.81,3.81,0,0,1,.24,1.33,3.67,3.67,0,0,1-.62,2.18,3.48,3.48,0,0,1-1.65,1.25,6.71,6.71,0,0,1-2.31.39h-1v3.25a.13.13,0,0,1-.11.15h-2c-.08,0-.12,0-.12-.13M7.86,9.08V12.5l.4,0H8.8A3.92,3.92,0,0,0,10,12.35a1.91,1.91,0,0,0,.85-.54,1.62,1.62,0,0,0,.32-1.06,1.7,1.7,0,0,0-.24-.91,1.66,1.66,0,0,0-.72-.59A3.27,3.27,0,0,0,9,9.05h-.7l-.42,0"/><path class="cls-2" d="M19.82,11.84a6,6,0,0,0-1.19-.35,5.46,5.46,0,0,0-1.14-.13,2.15,2.15,0,0,0-.62.07.61.61,0,0,0-.33.21.54.54,0,0,0-.08.28.52.52,0,0,0,.1.27,1.31,1.31,0,0,0,.35.27,6.07,6.07,0,0,0,.73.34,7.08,7.08,0,0,1,1.57.75,2.28,2.28,0,0,1,.81.85,2.17,2.17,0,0,1,.24,1.06,2.42,2.42,0,0,1-.39,1.36,2.65,2.65,0,0,1-1.15.92,4.75,4.75,0,0,1-1.86.33,6.58,6.58,0,0,1-1.4-.14,4.42,4.42,0,0,1-1.11-.33.2.2,0,0,1-.12-.19V15.62a.11.11,0,0,1,0-.09.07.07,0,0,1,.09,0,4.92,4.92,0,0,0,1.34.5,5.5,5.5,0,0,0,1.21.16,1.78,1.78,0,0,0,.85-.15.45.45,0,0,0,.27-.43.52.52,0,0,0-.24-.41,4.06,4.06,0,0,0-1-.48A6.08,6.08,0,0,1,15.32,14a2.59,2.59,0,0,1-.78-.87,2.28,2.28,0,0,1-.24-1,2.35,2.35,0,0,1,.35-1.24,2.5,2.5,0,0,1,1.07-.94,3.48,3.48,0,0,1,1.67-.42,10.72,10.72,0,0,1,1.39,0,4.52,4.52,0,0,1,1.09.37A.12.12,0,0,1,20,10a.5.5,0,0,1,0,.12v1.67a.12.12,0,0,1,0,.1.13.13,0,0,1-.12,0Z"/></svg></div>',
        },

        {
            tech_name: "InDesign",
            tech_complete_name: "Adobe InDesign",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="inDesign_icon_svg adobe_icon tech_icon_card" data-name="inDesign_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>Adobe InDesign</title> <path class="cls-1" d="M3.91,0H21.09A3.91,3.91,0,0,1,25,3.91V21.09A3.91,3.91,0,0,1,21.09,25H3.91A3.91,3.91,0,0,1,0,21.09V3.91A3.91,3.91,0,0,1,3.91,0" /><path class="cls-2" d="M8.88,7.4V17.75c0,.11-.05.16-.15.16H6.84c-.09,0-.13-.05-.13-.16V7.4c0-.09,0-.14.15-.14H8.75a.13.13,0,0,1,.13.1v0Z" /><path class="cls-2" d="M15,18.14a5.2,5.2,0,0,1-2.2-.46,3.56,3.56,0,0,1-1.55-1.4,4.53,4.53,0,0,1-.56-2.34,4.4,4.4,0,0,1,.56-2.16,4.25,4.25,0,0,1,1.64-1.59,5.3,5.3,0,0,1,2.59-.59h.22l.4,0V6.5c0-.07,0-.11.1-.11h1.92a.08.08,0,0,1,.09.07,0,0,0,0,1,0,0v9.63c0,.19,0,.39,0,.61s0,.42,0,.6a.18.18,0,0,1-.1.16,7.35,7.35,0,0,1-1.59.5,10.44,10.44,0,0,1-1.59.15m1.1-2.05V11.58l-.36-.05-.34,0a2.6,2.6,0,0,0-1.16.27,2.12,2.12,0,0,0-1.2,2.06,3,3,0,0,0,.17,1.06,2.15,2.15,0,0,0,.46.73,1.78,1.78,0,0,0,.7.41,2.7,2.7,0,0,0,.85.13h.43a3.5,3.5,0,0,0,.45-.07Z"/></svg></div>',
        },

        {
            tech_name: "Premier",
            tech_complete_name: "Adobe Premier",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="premier_icon_svg adobe_icon tech_icon_card" data-name="premier_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>Adobe Premier</title><path class="cls-1" d="M3.91,0H21.09A3.91,3.91,0,0,1,25,3.91V21.09A3.91,3.91,0,0,1,21.09,25H3.91A3.91,3.91,0,0,1,0,21.09V3.91A3.91,3.91,0,0,1,3.91,0" /><path class="cls-2" d="M5.9,17.69V7.16c0-.09,0-.14.08-.14H8.31c.31,0,.71.09,1,.09a6.53,6.53,0,0,1,2.1.32,3.28,3.28,0,0,1,1.38.84,3.53,3.53,0,0,1,.76,1.16,4.77,4.77,0,0,1,.23,1.34A3.62,3.62,0,0,1,13.17,13a3.26,3.26,0,0,1-1.65,1.25,6.78,6.78,0,0,1-2.32.4H8.71c-.09,0-.49-.09-.72-.09v3.26a.12.12,0,0,1-.1.14H6a.53.53,0,0,1-.08-.23M8,9v3.44c.13,0,.53.09.67.09h.53a3.48,3.48,0,0,0,1.16-.18,1.71,1.71,0,0,0,.85-.54,1.48,1.48,0,0,0,.31-1.07,2,2,0,0,0-.22-.89,1.44,1.44,0,0,0-.71-.58A3.87,3.87,0,0,0,9.42,9H8.71A2.49,2.49,0,0,1,8,9"/><path class="cls-2" d="M15.23,9.7H17a.29.29,0,0,1,.22.18.45.45,0,0,1,.09.22.7.7,0,0,1,.05.32v.35a3.82,3.82,0,0,1,1.11-.89,2.41,2.41,0,0,1,1.43-.36c.09,0,.14.05.14.09v2.06c0,.09-.05.13-.18.13a2.31,2.31,0,0,0-1,.09,2.49,2.49,0,0,0-.85.27,1.9,1.9,0,0,0-.67.4v5.22a.12.12,0,0,1-.1.14H15.36c-.09,0-.13-.05-.18-.14V11.31a5.29,5.29,0,0,0,0-.8c0-.23-.05-.45-.05-.67,0-.05,0-.05.05-.09s0-.05.09-.05"/></svg></div>',
        },

        {
            tech_name: "Animate",
            tech_complete_name: "Adobe Animate",
            tech_info: 'Adobe Animate  es un estudio de animación que trabaja sobre "fotogramas" y está destinado a la producción y entrega de contenido interactivo para diferentes audiencias de todo el mundo sin importar la plataforma".',
            icon: '<div class="icon_container"><svg class="animate_icon_svg adobe_icon tech_icon_card" data-name="animate_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>animate_icon</title><path class="cls-1" d="M3.91,0H21.09A3.91,3.91,0,0,1,25,3.91V21.09A3.91,3.91,0,0,1,21.09,25H3.91A3.91,3.91,0,0,1,0,21.09V3.91A3.91,3.91,0,0,1,3.91,0"/><path class="cls-2" d="M9.58,7.49,13,17.6a.26.26,0,0,1,0,.21.24.24,0,0,1-.2.11H11a.33.33,0,0,1-.16-.05.25.25,0,0,1-.11-.12h0L9.84,15H6.7l-.83,2.65a.32.32,0,0,1-.09.17.36.36,0,0,1-.2.06H4a.26.26,0,0,1-.22-.1.26.26,0,0,1,0-.23h0l3-9.23h0a2.54,2.54,0,0,0,.11-.82.23.23,0,0,1,.21-.23H9.34a.25.25,0,0,1,.15.05.2.2,0,0,1,.09.13M7.16,13.28c.54-1.78.91-3,1.1-3.75.07.25.15.53.25.85.17.56.35,1.15.55,1.79s.27.87.34,1.11Z"/><path class="cls-3" d="M16.47,10.22a1.6,1.6,0,0,1,.05.21c0,.05,0,.11,0,.18a3.31,3.31,0,0,1,2.07-.73,2.85,2.85,0,0,1,.91.15,2.6,2.6,0,0,1,.82.48,2.12,2.12,0,0,1,.65,1A4.17,4.17,0,0,1,21.25,13v4.64a.24.24,0,0,1-.22.26H19.34a.24.24,0,0,1-.26-.23V13a1.55,1.55,0,0,0-.29-1h0a.91.91,0,0,0-.8-.34,1.59,1.59,0,0,0-1.25.57v5.45a.24.24,0,0,1-.22.26h-1.7a.24.24,0,0,1-.25-.23V11.94c0-.66,0-1.21-.06-1.64a.22.22,0,0,1,0-.19.23.23,0,0,1,.19-.09h1.43a.41.41,0,0,1,.18.05.29.29,0,0,1,.13.14Z"/></svg></div>',
        },

        {
            tech_name: "Xd",
            tech_complete_name: "Adobe Xd",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="xd_icon_svg adobe_icon tech_icon_card" data-name="xd_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>Adobe Xd</title><path class="cls-1" d="M3.91,0H21.09A3.91,3.91,0,0,1,25,3.91V21.09A3.91,3.91,0,0,1,21.09,25H3.91A3.91,3.91,0,0,1,0,21.09V3.91A3.91,3.91,0,0,1,3.91,0" /><path class="cls-2" d="M13.25,7.42l-3.07,4.94,3.29,5.36a.16.16,0,0,1,0,.12s-.05.06-.12.07H11a.36.36,0,0,1-.34-.16c-.22-.43-.44-.83-.66-1.25s-.46-.86-.71-1.3-.49-.88-.73-1.33h0c-.22.44-.45.88-.68,1.32l-.7,1.31c-.24.44-.47.84-.72,1.27a.24.24,0,0,1-.23.15H4a.07.07,0,0,1-.07-.06h0a.17.17,0,0,1,0-.12l3.19-5.2L4,7.4s0-.08,0-.11a.15.15,0,0,1,.1,0H6.42a.32.32,0,0,1,.14,0,.22.22,0,0,1,.1.09c.2.44.42.75.66,1.19s.49.88.74,1.31a14.67,14.67,0,0,1,.68,1.3h0c.22-.45.44-.89.67-1.32l.69-1.29c.24-.44.47-.75.69-1.17a.16.16,0,0,1,.07-.11.28.28,0,0,1,.13,0h2.16a.11.11,0,0,1,.12.07.12.12,0,0,1,0,.1"/><path class="cls-2" d="M17.83,18.27a5.11,5.11,0,0,1-2.21-.47,3.51,3.51,0,0,1-1.54-1.39,4.45,4.45,0,0,1-.56-2.34,4.2,4.2,0,0,1,.56-2.16,4,4,0,0,1,1.63-1.59,5.2,5.2,0,0,1,2.6-.59h.21l.4,0V6.84a.26.26,0,0,1,.22-.3h1.6a.29.29,0,0,1,.3.3v9.41c0,.19,0,.39,0,.61s0,.42.05.6a.16.16,0,0,1,0,.09.16.16,0,0,1-.07.07,8.24,8.24,0,0,1-1.6.5,10.43,10.43,0,0,1-1.58.15m1.05-2.05V11.71a1.77,1.77,0,0,0-.32-.05l-.34,0a2.69,2.69,0,0,0-1.15.26A2.14,2.14,0,0,0,15.86,14,3,3,0,0,0,16,15a1.91,1.91,0,0,0,.47.72,1.81,1.81,0,0,0,.69.42,2.7,2.7,0,0,0,.85.13l.43,0a2.9,2.9,0,0,0,.41-.06"/></svg></div>',
        },

        {
            tech_name: "Figma",
            tech_complete_name: "Figma",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="figma_icon_svg adobe_icon tech_icon_card" data-name="figma_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>Figma</title><circle class="cls-1" cx="16.67" cy="12.5" r="4.17" /><path class="cls-2" d="M8.33,16.67a4.17,4.17,0,1,0,4.17,4.16V16.67Z" /><path class="cls-3" d="M16.67,0H12.5V8.33h4.17a4.17,4.17,0,0,0,0-8.33Z" /><path class="cls-4" d="M8.33,0a4.17,4.17,0,0,0,0,8.33H12.5V0Z" /><path class="cls-5" d="M8.33,8.33a4.17,4.17,0,0,0,0,8.34H12.5V8.33Z" /></svg></div>',
        },

        {
            tech_name: "HTML",
            tech_complete_name: "HTML",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="html_icon_svg tech_icon_card" data-name="html_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>HTML</title><polygon class="cls-1" points="5.26 22.99 3.64 4.91 21.36 4.91 19.74 22.99 12.49 25 5.26 22.99" /><polygon class="cls-2" points="12.5 23.46 18.36 21.84 19.74 6.39 12.5 6.39 12.5 23.46" /><polygon class="cls-3" points="12.5 8.61 12.49 8.61 6.94 8.61 6.99 9.2 7.54 15.31 12.49 15.31 12.5 15.31 15.22 15.31 14.96 18.19 12.49 18.86 12.49 18.86 12.49 18.86 10.02 18.19 9.86 16.42 8.66 16.42 7.64 16.42 7.95 19.9 12.49 21.16 12.5 21.16 12.5 21.16 17.04 19.9 17.07 19.53 17.59 13.69 17.65 13.1 17.05 13.1 12.5 13.1 12.49 13.1 9.57 13.1 9.36 10.83 12.49 10.83 12.5 10.83 17.84 10.83 17.85 10.83 17.89 10.33 17.99 9.2 18.05 8.61 12.5 8.61"/><polygon class="cls-4" points="12.5 13.1 9.57 13.1 9.36 10.83 12.5 10.83 12.5 8.61 12.49 8.61 6.94 8.61 6.99 9.2 7.54 15.31 12.5 15.31 12.5 13.1" /><polygon class="cls-4" points="12.5 18.86 12.49 18.86 10.02 18.19 9.86 16.42 8.66 16.42 7.64 16.42 7.95 19.9 12.49 21.16 12.5 21.16 12.5 18.86" /><polygon class="cls-5" points="7.3 0 7.3 1.33 5.96 1.33 5.96 0 4.98 0 4.98 3.37 5.96 3.37 5.96 1.99 5.96 1.96 7.3 1.96 7.3 3.37 8.28 3.37 8.28 0 7.3 0" /><polygon class="cls-5" points="17.7 2.74 17.7 0 16.72 0 16.72 3.37 20.02 3.37 20.02 2.74 17.7 2.74" /><polygon class="cls-5" points="15.29 0 15.29 0 14.37 1.58 13.46 0 13.46 0 12.48 0 12.48 3.37 13.46 3.37 13.46 1.99 13.46 1.97 14.27 3.37 14.48 3.37 15.29 1.97 15.29 1.99 15.29 3.37 16.27 3.37 16.27 0 15.29 0" /><polygon class="cls-5" points="12.03 0 10.87 0 9.89 0 8.73 0 8.73 0.63 9.89 0.63 9.89 3.37 10.87 3.37 10.87 0.63 12.03 0.63 12.03 0" /></svg></div>',
        },

        {
            tech_name: "CSS",
            tech_complete_name: "CSS",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="css_icon_svg tech_icon_card" data-name="css_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>CSS</title><polygon class="cls-1" points="5.26 22.99 3.64 4.91 21.36 4.91 19.74 22.99 12.49 25 5.26 22.99" /><polygon class="cls-2" points="12.5 23.46 18.36 21.84 19.74 6.39 12.5 6.39 12.5 23.46" /><polygon class="cls-3" points="6.75 10.56 6.53 8.47 18.47 8.47 18.33 10.89 13.28 13.13 18.13 13.13 17.6 20 12.72 21.31 7.66 20.08 7.34 16.6 9.58 16.6 9.71 18.44 12.64 18.98 15.35 18.16 15.47 15.21 7.15 15.21 7 13.02 12.5 10.61 6.75 10.56" /><polygon class="cls-4" points="7 13.02 7.15 15.21 12.5 15.21 12.5 10.61 7 13.02" /><polygon class="cls-4" points="9.71 18.44 9.58 16.6 7.34 16.6 7.66 20.08 12.5 21.26 12.5 18.96 9.71 18.44" /><polygon class="cls-4" points="6.53 8.47 6.75 10.56 12.5 10.61 12.5 8.47 6.53 8.47" /><polygon class="cls-5" points="14.21 0.84 14.21 0 10.84 0 10.84 1.97 13.16 1.97 13.16 2.6 10.77 2.6 10.77 3.37 14.14 3.37 14.14 1.33 11.75 1.33 11.75 0.84 14.21 0.84" /><polygon class="cls-5" points="8.1 1.99 8.1 2.6 10.49 2.6 10.49 3.37 7.12 3.37 7.12 1.35 7.12 0 10.42 0 10.42 0.84 8.1 0.84 8.1 1.99" /><polygon class="cls-5" points="17.93 0.84 17.93 0 14.56 0 14.56 1.97 16.88 1.97 16.88 2.6 14.49 2.6 14.49 3.37 17.86 3.37 17.86 1.33 15.47 1.33 15.47 0.84 17.93 0.84" /></svg></div>',
        },

        {
            tech_name: "SASS",
            tech_complete_name: "SASS",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="sass_icon_svg tech_icon_card" data-name="sass_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>SASS</title><path class="cls-1" d="M21.52,13.89a5.23,5.23,0,0,0-2.26.53,4.64,4.64,0,0,1-.51-1.17,3.2,3.2,0,0,1-.05-1A8.25,8.25,0,0,1,19,11.2s-.05-.26-.56-.27-.93.1-1,.23a5.06,5.06,0,0,0-.21.75,18.35,18.35,0,0,1-1.53,2.94,3.1,3.1,0,0,1-.35-.86,3.54,3.54,0,0,1,0-1,7.21,7.21,0,0,1,.3-1.06s-.06-.26-.56-.27-.94.1-1,.23-.1.45-.21.75-1.32,3-1.64,3.73c-.16.36-.3.65-.4.84l0,0-.13.25h0c-.07.12-.15.24-.18.24a1.77,1.77,0,0,1,0-.78c.18-.94.62-2.41.62-2.46s.08-.29-.29-.42a.45.45,0,0,0-.51.09s-.05.08-.05.08.39-1.66-.76-1.66a3.42,3.42,0,0,0-2.21,1.51L6.63,15l-.81.45-.06-.06c-1.39-1.49-4-2.54-3.87-4.55,0-.72.29-2.64,5-5,3.83-1.9,6.89-1.38,7.42-.22.76,1.66-1.64,4.75-5.61,5.19a3,3,0,0,1-2.51-.63C5.94,10,5.91,10,5.83,10s0,.28,0,.4a2.39,2.39,0,0,0,1.44,1.13,7.6,7.6,0,0,0,4.65-.46c2.41-.94,4.29-3.52,3.74-5.69S11.44,2.5,8,3.72A17.43,17.43,0,0,0,2.11,7.1C.2,8.88-.1,10.43,0,11.07c.44,2.3,3.61,3.8,4.88,4.91l-.18.1c-.63.31-3.05,1.58-3.65,2.91-.69,1.52.1,2.61.63,2.75A3.89,3.89,0,0,0,5.91,20a4.2,4.2,0,0,0,.38-3.88v0l.49-.3.92-.51A6.26,6.26,0,0,0,7.36,17a3.52,3.52,0,0,0,.75,2.41.83.83,0,0,0,.6.19c.54,0,.78-.44,1-1s.63-1.4.63-1.4-.37,2,.63,2c.37,0,.73-.47.9-.71h0l0-.05.06-.09h0c.15-.26.47-.84,1-1.8.63-1.24,1.24-2.79,1.24-2.79a6.85,6.85,0,0,0,.24,1A8.51,8.51,0,0,0,15,16l-.24.32h0c-.12.16-.25.33-.39.49a15.2,15.2,0,0,0-1.17,1.47.41.41,0,0,0,.11.54.94.94,0,0,0,.61.1,2.69,2.69,0,0,0,.92-.21,3,3,0,0,0,.79-.42,1.75,1.75,0,0,0,.76-1.56,3.27,3.27,0,0,0-.29-1.09l.13-.2A21.28,21.28,0,0,0,17.58,13a9.47,9.47,0,0,0,.24,1,7.65,7.65,0,0,0,.44,1,4.39,4.39,0,0,0-1.33,1.73c-.29.83-.06,1.2.36,1.29a1.27,1.27,0,0,0,.67-.14,3,3,0,0,0,.85-.43A1.93,1.93,0,0,0,19.74,16a3.24,3.24,0,0,0-.21-.92A4.71,4.71,0,0,1,22,14.77c2.17.25,2.6,1.61,2.52,2.17a1.46,1.46,0,0,1-.69,1c-.15.09-.2.13-.18.2s.08.09.22.07A1.69,1.69,0,0,0,25,16.68c.06-1.34-1.22-2.8-3.48-2.79ZM4.76,19.54C4,20.33,3,20.62,2.6,20.37s-.28-1.42.6-2.26a10.85,10.85,0,0,1,1.7-1.26l.44-.27,0,0,.11-.07a3.1,3.1,0,0,1-.74,3.06ZM10,16c-.25.61-.78,2.18-1.09,2.09s-.44-1.26-.06-2.43a5.52,5.52,0,0,1,.86-1.57c.39-.44.82-.58.93-.4A8,8,0,0,1,10,16ZM14.34,18a.35.35,0,0,1-.25.07s.05-.1.05-.1.54-.58.75-.85.27-.33.43-.54v.06a1.79,1.79,0,0,1-1,1.36Zm3.34-.76c-.08-.06-.07-.24.2-.81a3,3,0,0,1,.74-.95,1.06,1.06,0,0,1,.07.42A1.37,1.37,0,0,1,17.68,17.28Z"/></svg></div>',
        },

        {
            tech_name: "GitHub",
            tech_complete_name: "GitHub",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="gitHub_icon_svg tech_icon_card" data-name="gitHub_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>GitHub</title><path class="cls-1" d="M12.5.31A12.5,12.5,0,0,0,8.55,24.67c.62.12.85-.27.85-.6s0-1.28,0-2.33c-3.48.76-4.22-1.47-4.22-1.47a3.26,3.26,0,0,0-1.38-1.83c-1.14-.78.08-.76.08-.76A2.63,2.63,0,0,1,5.79,19a2.66,2.66,0,0,0,3.64,1,2.68,2.68,0,0,1,.79-1.67C7.44,18,4.52,17,4.52,12.16A4.85,4.85,0,0,1,5.81,8.8a4.49,4.49,0,0,1,.12-3.31S7,5.16,9.37,6.77a12.56,12.56,0,0,1,3.13-.42,12.56,12.56,0,0,1,3.13.42C18,5.16,19.07,5.49,19.07,5.49a4.49,4.49,0,0,1,.12,3.31,4.84,4.84,0,0,1,1.28,3.36c0,4.8-2.92,5.85-5.7,6.16a3,3,0,0,1,.84,2.32c0,1.67,0,3,0,3.43s.23.72.86.6A12.5,12.5,0,0,0,12.5.31Z"/><path class="cls-2" d="M4.73,18.26c0,.06-.12.08-.21,0s-.14-.12-.11-.18.12-.09.21,0,.15.12.11.19Z" /><path class="cls-2" d="M5.24,18.82c-.06.06-.18,0-.25-.06a.18.18,0,0,1,0-.26c.06-.05.17,0,.26.06a.19.19,0,0,1,0,.26Z" /><path class="cls-2" d="M5.73,19.54c-.07.05-.2,0-.28-.11a.22.22,0,0,1,0-.3c.07-.05.2,0,.28.11s.07.25,0,.3Z" /><path class="cls-2" d="M6.41,20.24a.24.24,0,0,1-.32,0C6,20.09,6,19.94,6,19.87s.21-.06.32.05a.24.24,0,0,1,.07.32Z" /><path class="cls-2" d="M7.34,20.64c0,.1-.17.14-.31.1s-.24-.16-.21-.26.17-.14.32-.1.23.16.2.26Z" /><path class="cls-2" d="M8.36,20.71c0,.11-.11.19-.26.2s-.27-.08-.27-.19.11-.19.26-.19.27.08.27.18Z" /><path class="cls-2" d="M9.32,20.55c0,.1-.09.21-.24.23s-.28,0-.3-.13.09-.21.24-.23.28,0,.3.13Z" /></svg></div>',
        },

        {
            tech_name: "JavaScript",
            tech_complete_name: "JavaScript",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="js_icon_svg tech_icon_card" data-name="js_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25"><title>JavaScript</title><path class="cls-1" d="M0,0H25V25H0Z" /><path class="cls-2" d="M6.57,20.89l1.92-1.16c.37.66.7,1.21,1.51,1.21s1.26-.3,1.26-1.47v-8H13.6v8A3.19,3.19,0,0,1,10.1,23a3.65,3.65,0,0,1-3.53-2.15" /><path class="cls-2" d="M14.88,20.64l1.91-1.11A2.58,2.58,0,0,0,19.11,21c1,0,1.59-.49,1.59-1.16s-.63-1.09-1.71-1.56L18.41,18c-1.7-.72-2.82-1.63-2.82-3.54A3.14,3.14,0,0,1,19,11.34a3.48,3.48,0,0,1,3.34,1.88L20.54,14.4a1.61,1.61,0,0,0-1.51-1,1,1,0,0,0-1.13,1c0,.7.44,1,1.44,1.42l.59.26c2,.85,3.12,1.72,3.12,3.69S21.39,23,19.16,23a4.52,4.52,0,0,1-4.28-2.4"/></svg></div>',
        },

        {
            tech_name: "Node.js",
            tech_complete_name: "Node.js",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: `<div class="icon_container"><svg class="node_icon_svg tech_icon_card" data-name="node_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 442.37 270.929"><defs><clipPath id="a"><path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68"/></clipPath><linearGradient id="b" x1="-.348" x2="1.251" gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#3E863D" /><stop offset=".5" stop-color="#55934F" /><stop offset=".8" stop-color="#5AAD45" /></linearGradient><clipPath id="c"><path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0" /></clipPath><linearGradient id="d" x1="-.456" x2=".582" gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)" gradientUnits="userSpaceOnUse"><stop offset=".57" stop-color="#3E863D" /><stop offset=".72" stop-color="#619857" /><stop offset="1" stop-color="#76AC64" /></linearGradient><clipPath id="e"><path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02" /></clipPath><linearGradient id="f" x1=".043" x2=".984" gradientTransform="translate(192.862 279.652) scale(97.417)" gradientUnits="userSpaceOnUse"><stop offset=".16" stop-color="#6BBF47" /><stop offset=".38" stop-color="#79B461" /><stop offset=".47" stop-color="#75AC64" /><stop offset=".7" stop-color="#659E5A" /><stop offset=".9" stop-color="#3E863D" /></linearGradient></defs><title>Node.js</title><path class="cls-1" d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"/><path class="cls-2" d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"/><path class="cls-3" d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"/><path class="clas-4" d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0" /><g clip-path="url(#a)" transform="translate(-78.306 -164.016)"><path fill="url(#b)" d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0" /></g><g clip-path="url(#c)" transform="translate(-78.306 -164.016)"><path fill="url(#d)" d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0" /></g><g clip-path="url(#e)" transform="translate(-78.306 -164.016)"><path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0" /></g></svg></div>`,
        },

        {
            tech_name: "Python",
            tech_complete_name: "Python",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="python_icon_svg tech_icon_card" data-name="python_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#366a96" /><stop offset="1" stop-color="#3679b0" /></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc836" /><stop offset="1" stop-color="#ffe873" /></linearGradient></defs><title>Python</title><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)"/><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)"/><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"/></g></svg></div>',
        },

        {
            tech_name: "Vue.js",
            tech_complete_name: "Vue.js",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
            icon: '<div class="icon_container"><svg class="vue_icon_svg tech_icon_card" data-name="vue_icon_svg" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Vue.js</title><path class="cls-1" d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z" /><path class="cls-2" d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" /><path class="cls-3" d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z" /></svg></div>',
        },
    ];
    //^ HOT CARDS SELECTION
    const hotCardsSelection = ["pokedex", "tribute", "choroplet_map", "creaciones_hermed", "verona", "krazy_sports"];
    const selector = (tag) => {
        return $d.querySelector(`${tag}`);
    };
    const selectorAll = (tag) => {
        return $d.querySelectorAll(`${tag}`);
    };
    const displayFlex = (item) => {
        item.style.display = flx;
    };
    const displayNone = (item) => {
        item.style.display = none;
    };
    //! TEMPLATE CONSTANTS
    //^ PROJECT CARD TEMPLATE CONSTANTS
    const fragmentHotProjects = $d.createDocumentFragment();
    const fragmentSearchProjects = $d.createDocumentFragment();
    const fragmentSliderMarkersServices = $d.createDocumentFragment();
    const listBtnsFragment = $d.createDocumentFragment();
    const btnListTemplate = selector("#list_btn_template").content;
    const cardProjectTemplate = selector("#card_project_template").content;
    const markersTemplate = selector("#marker_slider_template").content;
    //^ SELECTION LIST TEMPLATE CONSTANTS
    const fragmentListProjects = $d.createDocumentFragment();
    //! GENERAL ELEMENTS
    const htmlLebel = $d.documentElement;
    const body = selector("BODY");
    const btnsHero = selectorAll(".btn_hero");
    const btnsSection = selectorAll(".btn_section");
    const btnsContact = selectorAll(".contact_btn");
    const btnsTheme = selectorAll(".btn_theme");
    const sections = selectorAll(".section");

    const btnsLinks = selectorAll(".btn_link");
    //^ CONTAINERS WITH ANIMATION FUNCTIONS
    const swipeAnimationContainersFull = selectorAll(".swipe_animation_container_full");
    const swipeAnimationContainersHalf = selectorAll(".swipe_animation_container_half");
    const animationContainerText = selectorAll(".text_animation_container");
    //^ MODALS
    const modalContainer = selector(".modals_container");
    const closeModalBtn = selectorAll(".close_modal_btn");
    //& CONTACT MODAL
    const sendBtnFormModal = selector("#contact_form_send_btn");
    const contactModal = selector("#contact_modal");
    //& LEGAL MODAL
    const modalInfoLegal = selector("#modal_info_legal");
    const legalModal = selector("#legal_modal");
    const legalAccept = selector("#legal_modal_accept_btn");

    //^ ALERT MODAL
    //& STORAGE MODAL
    const storageAlertModal = selector("#storage_alert_modal");
    const acceptBtnStorageWarningBtn = selector("#storage_alert_modal_accept_btn");

    //^ MENU CONTENT
    const menuContainer = selector("#menu_container");
    const btnsMenu = selectorAll(".btn_menu");
    const btnThemeMenu = selector("#change_theme_btn_menu");
    const closeMenuBtn = selector("#menu_container_close_btn");
    const openMenuSound = selector("#menu_open_sound");

    //^ MENU SOCIAL
    const menuSocialContainer = selector("#menu_social_container");
    const menuSocialBtn = selector("#menu_social_btn");
    const menuSocialBtnsContainer = selector(".menu_social_btns_container");
    const btnsMenuSocial = selectorAll(".social_btn");

    //^ NAV
    const nav = selector(".nav");
    const btnMenuContainer = selector("#btn_menu_slider");
    const btnsNavContainer = selector("#nav_sections_btns_container");
    const btnsNav = selectorAll(".btn_nav");
    //& BTN LOGO
    const btnLogo = selector(".logo_nav_btn");
    //& TBN THEME
    const btnThemeNav = selector("#change_theme_btn_nav");
    //& BTN LEBELS
    const lebelBtnMain = selector("#main_btn_nav");
    const lebelBtnAbout = selector("#about_btn_nav");
    const lebelBtnSkills = selector("#skills_btn_nav");
    const lebelBtnServices = selector("#services_btn_nav");
    const lebelBtnPortfolio = selector("#portfolio_btn_nav");
    const lebelBtnClients = selector("#clients_btn_nav");
    const lebelBtnContact = selector("#contact_btn_nav");

    //^ HERO
    const btnHeroDown = selector("#hero_btn_down");
    //^ ABOUT

    //^ SERVICES
    //& SERVICES SLIDERS
    const sliderWindowContainerProjects = selector("#slider_window_container_projects");
    const sliderContainersProject = selectorAll(".slider_container_project");
    const sliderPageMarkersContainerServices = selector("#slider_page_markers_container_services");
    const sliderBtnLeftServices = selector("#btn_swipe_left_slider_services");
    const sliderBtnRightServices = selector("#btn_swipe_right_slider_services");
    const slidersContentServices = selectorAll(".slider_content_services");
    const sliderImgContainersServices = selectorAll(".img_container_services");
    const sliderInfoContainersServices = selectorAll(".info_container_services");
    //& SERVICES CONTAINERS

    //^ PORTFOLIO
    const titleSubsectionCardsSearch = selector("#title_subsection_search_type");
    //& CONTAINERS WHERE TEMPLATES APPEND

    const porfolioSearchCardsContainer = selector("#cards_search_container");
    //& CONTAINERS LOADER
    const loadersContainers = selectorAll(".loader_container");
    const loaderSearchCardsContainer = selector("#loader_cards_hot_container");
    const spinnerHotCardsContainer = selector("#spinner_container_cards_hot");
    const loaderHotCardsContainer = selector("#loader_cards_search_container");
    const spinnerSearchCardContainer = selector("#spinner_container_cards_search");
    //& OIPTION LIST

    const listBtnsContainer = selector(".list_btns_container");
    const searchBtn = selector(".search_list_btn");
    const arrow = selector(".arrow_icon");

    //^LEGALS
    const copyrightText = selector(".lebels_container");

    //^FETCH JASON COMPANYS DATA
    const portfolioData = "./portfolioDB.json";

    //^ ABOUT TEXT ANIMATION
    const aboutLegends = ["Diseñador", "Ilustrador", "Desarrollador Front-End", "Deportista"];
    const aboutTextAnimationContainer = selector(".about_text_animation_container");
    const setAnimationText = (text) => {
        return `<h2 class="up_animation">${text}</h2>`;
    };
    aboutTextAnimationContainer.innerHTML = setAnimationText(aboutLegends[0]);

    const textAnimationAction = () => {
        let objectCount = 0;
        setInterval(() => {
            objectCount += 1;
            if (objectCount === aboutLegends.length) {
                objectCount = 0;
            }
            aboutTextAnimationContainer.innerHTML = setAnimationText(aboutLegends[objectCount]);
        }, 4000);
    };
    textAnimationAction();

    //!GENERAL VARIANTS--START

    //^STORAGE FIRST CHECK
    const checkAlertStorageAnswer = () => {
        let storageContent = JSON.parse(localStorage.getItem(localStorageName));
        if (!storageContent) {
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            console.log("local storage item is created");
            setTimeout(() => {
                openModal(storageAlertModal, "1", "translateY(0)");
            }, 2000);
        } else if (storageContent && storageContent["page_alert_status"] === open) {
            storageForJohnKPage["page_view_count"] = storageContent["page_view_count"] + 1;
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            console.log(`local storage item answer= ${storageContent["page_alert_status"]}, page views= ${storageContent["page_view_count"]}`);
            setTimeout(() => {
                openModal(storageAlertModal, "1", "translateY(0)");
            }, 2000);
        } else if (storageContent && storageContent["page_alert_status"] === close) {
            storageForJohnKPage["page_alert_status"] = close;
            storageForJohnKPage["page_view_count"] = storageContent["page_view_count"] + 1;
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            console.log(`local storage item answer= ${storageContent["page_alert_status"]}, page views= ${storageContent["page_view_count"]}`);
        }
    };
    checkAlertStorageAnswer();

    //^ DELATE CHILDREN
    const deleteChildElements = (parentElement) => {
        let child = parentElement.lastElementChild;
        while (child) {
            parentElement.removeChild(child);
            child = parentElement.lastElementChild;
        }
    };

    //^ INSERT FLEX
    const insertFlex = (cont, dir, jc, ai) => {
        cont.style.display = flx;
        cont.style.flexDirection = dir;
        cont.style.justifyContent = jc;
        cont.style.alignItems = ai;
    };

    //^ BASIC FUNCTION ANIMATION
    const animateItem = (container, opacity, transform) => {
        container.style.opacity = opacity;
        container.style.transform = transform;
    };
    const animateItemTranslate = (container, opacity, transform, time, as) => {
        container.style.opacity = opacity;
        container.style.transform = transform;
        container.style.translate = `all ${time} ${as}`;
    };

    //^ SPINNERS LOADER OBSERVER
    loadersContainers.forEach((loader) => {
        const watchCardsContainers = ([entry]) => {
            const dataNameContainer = entry.target.attributes["data-name"].value;
            if (entry.isIntersecting && dataNameContainer === "loader_cards_hot_container") {
                animateItem(spinnerHotCardsContainer, "0", "translateY(-4rem)");
                setTimeout(() => {
                    loaderSearchCardsContainer.style.display = none;
                    createProjectCardHot();

                    setTimeout(() => {
                        loadersObserver.unobserve(spinnerHotCardsContainer);
                    }, 500);
                }, 1200);
            } else if (entry.isIntersecting && dataNameContainer === "loader_cards_search_container") {
                animateItem(spinnerSearchCardContainer, "0", "translateY(-4rem)");
                setTimeout(() => {
                    loaderHotCardsContainer.style.display = none;

                    createProjectCardRandom();
                    setTimeout(() => {
                        loadersObserver.unobserve(spinnerSearchCardContainer);
                    }, 500);
                }, 1200);
            }
        };
        const optionsIO_loaders = {
            threshold: ".5",
        };
        const loadersObserver = new IntersectionObserver(watchCardsContainers, optionsIO_loaders);
        loadersObserver.observe(loader);
    });
    //* CONSTANTS AND VARIANTS

    //^ CLOSE MENU SOCIAL
    const closeMenuSocial = () => {
        menuSocialBtnsContainer.style.opacity = 0;
        menuSocialBtnsContainer.style.height = 0;
        menuSocialStatus = close;
    };

    //^ ACTIONS BTN MENU SOCIAL
    const socialMenuBtnActions = () => {
        if (menuSocialStatus === close) {
            menuSocialStatus = open;
            menuSocialBtnsContainer.style.height = "100%";
            menuSocialBtnsContainer.style.opacity = 1;
            /*  */
        } else if (menuSocialStatus === open) {
            closeMenuSocial();
        }
    };

    //^ SOCIAL MENU CLOSE EN BODY CLICK
    //! *********************************************** !//
    //!  agregar caracteristicas del nuevo option list  !//
    //! *********************************************** !//

    const closeByBodyClick = (e) => {
        if (menuSocialStatus === open && e.target.id !== "menu_social_btn") {
            closeMenuSocial();
        }
    };

    //^ OPEN MENU
    const btnNavMenu = (status) => {
        if (status === close) {
            menuStatus = open;
            menuContainer.style.opacity = 1;
            menuContainer.style.transform = "translateY(0)";
            //*openMenuSound.play();
        } else if (status === open) {
            closeMenu();
        }
    };

    //^ CLOSE MENU
    const closeMenu = () => {
        let menuTop = menuContainer.style.top;

        if (menuTop === "0px" || menuTop === 0 || menuTop === "") {
            menuStatus = close;
            menuContainer.style.opacity = 0;
            menuContainer.style.transform = "translateY(-100)";
        } else if (menuTop === "inherit") {
            menuStatus = close;

            menuContainer.style.opacity = 0;
            menuContainer.style.transform = "translateY(100)";
        }
    };

    const windowActions = (action, item) => {
        if (action === "open") {
            item.style.display = blk;
            setTimeout(() => {
                item.style.opacity = 1;
            }, 1000);
        } else if (action === "close") {
            item.style.opacity = 1;
            setTimeout(() => {
                item.style.display = none;
            }, 1000);
        }
    };

    windowActions();
    //^GENERAL MODAL ACTIONS
    const openWindowTranslate = (window) => {
        animateItem(cont, "1", "translate(-50%, 0)");
    };
    selector(".alert_modal");
    const openModal = (cont) => {
        modalContainer.style.display = blk;

        setTimeout(() => {
            modalContainer.style.opacity = 1;
            cont.style.display = flx;
            setTimeout(() => {
                animateItem(cont, "1", "translate(-50%, 0)");
            }, 1200);
        }, 1200);
    };
    const closeModal = (cont) => {
        animateItem(cont, "0", "translate(-50%, -50%)");
        setTimeout(() => {
            modalContainer.style.opacity = "0";
            setTimeout(() => {
                cont.style.display = none;
                modalContainer.style.display = none;
            }, 1200);
        }, 1200);
    };

    //^ ALERT STORAGE MODAL CLOSE
    const acceptStorage = () => {
        storageForJohnKPage["page_alert_status"] = close;
        closeModal(storageAlertModal);
        localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
        console.log(localStorage.getItem(localStorageName));
    };

    //^ RETURN THE PAGE TO THE PAGE TOP
    const toTheTop = () => {
        const currentPosition = body.getBoundingClientRect().top;
        window.scrollTo(currentPosition, 0);
    };

    //^SCROLL T0
    const scrollToSection = (btn) => {
        const section = selector(`#${btn.name}`);
        const windowTop = window.top;
        const windowHeight = window.innerHeight / 2;
        const sectionTop = section.getBoundingClientRect().top;
        const navHeight = nav.getBoundingClientRect().height;
        const navTop = nav.getBoundingClientRect().top;

        if (navTop >= windowHeight) {
            let fixTop = sectionTop - navHeight;
            window.scrollBy(windowTop, fixTop);
        } else if (navTop < windowHeight) {
            let fixTop = sectionTop - navHeight;
            window.scrollBy(windowTop, fixTop);
        }
    };
    const accessibilityBtns = selectorAll(".accessibility_btn");
    accessibilityBtns.forEach((btn) => {
        btn.addEventListener("click", () => scrollToSection(btn));
    });
    //^ CHECK MENU POSITION WINDOW  && **/SCALE THE NAVBAR AND CHANGE THE MENU POSITION BY THE PAGE POSITION
    //&CONFIGURATION SIZE SCREEN--START ->//THIS FUNCTION BRING ALL THE CONTAINERS CARACTERISTICTS BY THE SIZE OF THE WINDOW
    const setBtnLabel = (label) => {
        return `<h3 class="btn_lebel">${label}</h3>`;
    };
    const configSize = (widConf) => {
        //~~SET CARD CHANGES--START -> // CHANGE FLEX DIRECTIION AND HEIGHT OF CARD
        const changeCardStyle = (container, fd, he) => {
            container.style.flexDirection = fd;
            container.style.height = he;
        };
        //~~SET CARD CHANGES--OVER
        //~~ ************************************************************************************************** *//
        const firstBreak = 1100;
        const secondBreak = 839;
        if (widConf > firstBreak) {
            lebelBtnMain.innerHTML = setBtnLabel("Inicio");
            lebelBtnAbout.innerHTML = setBtnLabel("Acerca de");
            lebelBtnSkills.innerHTML = setBtnLabel("Conocimientos");
            lebelBtnServices.innerHTML = setBtnLabel("Servicios");
            lebelBtnPortfolio.innerHTML = setBtnLabel("Portafolio");
            lebelBtnClients.innerHTML = setBtnLabel("Clientes");
            lebelBtnContact.innerHTML = setBtnLabel("Contacto");
            btnMenuContainer.style.display = none;
            btnsNavContainer.style.display = flx;
            menuSocialContainer.style.display = flx;

            slidersContentServices.forEach((slider) => {
                const idSplit = slider.id.split("_");
                if (idSplit.includes("2") || idSplit.includes("4") || idSplit.includes("6") || idSplit.includes("8")) {
                    insertFlex(slider, "row-reverse", "center", "center");
                } else if (idSplit.includes("1") || idSplit.includes("3") || idSplit.includes("5") || idSplit.includes("7")) {
                    insertFlex(slider, "row", "center", "center");
                }
            });
            sliderImgContainersServices.forEach((container) => {
                const windowHeight = slidersContent[0].clientHeight;
                const windowHalfWidth = slidersContent[0].clientWidth / 2;
                //*console.log(windowHalfHeight);
                container.style.height = `${windowHeight}px`;
                container.style.width = `${windowHalfWidth}px`;
                insertFlex(container, "center", "center");
            });
            closeMenu();
        } else if (widConf > secondBreak || (widConf < firstBreak && widConf > secondBreak)) {
            copyrightText.style.marginLeft = "5rem";
            lebelBtnMain.innerHTML =
                '<svg class="nav_menu_icon_svg" id="home_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Inicio</title><path class="cls-1" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>';
            lebelBtnAbout.innerHTML =
                '<svg class="nav_menu_icon_svg" id="about_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Acerca de</title><circle class="cls-1" cx="12" cy="4" r="2"></circle><path class="cls-1"  d="M15 22V9h5V7H4v2h5v13h2v-7h2v7z"></path></svg>';
            lebelBtnSkills.innerHTML =
                '<svg class="nav_menu_icon_svg" id="skills_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Conocimientos</title><path class="cls-1" d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z"/></svg>';
            lebelBtnServices.innerHTML =
                '<svg class="nav_menu_icon_svg" id="services_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Servicios</title><path class="cls-1" d="M21 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"/></svg>';
            lebelBtnPortfolio.innerHTML =
                //*'<svg class="nav_menu_icon_svg" id="portfolio_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Portafolio</title><path class="cls-1" d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>';
                //*'<svg class="nav_menu_icon_svg" id="portfolio_icon_svg" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Portafolio</title><path class="cls-1" d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z" fill-rule="nonzero"/></svg>';
                '<svg class="nav_menu_icon_svg" id="portfolio_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Portafolio</title><path class="cls-1" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path><path class="cls-1" d="m10 14-1-1-3 4h12l-5-7z"></path></svg>';
            lebelBtnClients.innerHTML =
                //*'<svg class="nav_menu_icon_svg" id="clients_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Clientes</title><path class="cls-1" d="M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"/></svg>';
                //*'<svg class="nav_menu_icon_svg" id="clients_icon_svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path class="cls-1" d="M3.5 16.343l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm-.993-3.343h-.01c.022-4.906-2.246-2.772-2.246-6.676 0-1.507.983-2.324 2.248-2.324 1.869 0 3.169 1.787 1.399 5.129-.581 1.099.62 1.359 1.91 1.657 1.118.258 1.192.805 1.192 1.751v2.463h-4.493v-2zm-19.507 2v-2.463c0-.946.074-1.493 1.192-1.751 1.29-.298 2.491-.558 1.91-1.657-1.77-3.342-.47-5.129 1.399-5.129 1.265 0 2.248.817 2.248 2.324 0 3.904-2.268 1.77-2.246 6.676h.005v2h-4.508zm6 0v-2.623c0-1.258.1-1.985 1.588-2.329 1.684-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l.001 2.619h-12z"/></svg>';
                '<svg class="nav_menu_icon_svg" id="clients_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Clientes</title><path class="cls-1" d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>';
            lebelBtnContact.innerHTML =
                '<svg class="nav_menu_icon_svg" id="contact_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Contacto</title><path class="cls-1" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z"/></svg>';
            btnMenuContainer.style.display = none;
            btnsNavContainer.style.display = flx;
            menuSocialContainer.style.display = flx;

            slidersContentServices.forEach((slider) => {
                const idSplit = slider.id.split("_");
                if (idSplit.includes("2") || idSplit.includes("4") || idSplit.includes("6") || idSplit.includes("8")) {
                    insertFlex(slider, "row-reverse", "center", "center");
                } else if (idSplit.includes("1") || idSplit.includes("3") || idSplit.includes("5") || idSplit.includes("7")) {
                    insertFlex(slider, "row", "center", "center");
                }
            });
            sliderImgContainersServices.forEach((container) => {
                const windowHeight = slidersContent[0].clientHeight;
                const windowHalfWidth = slidersContent[0].clientWidth / 2;
                //*console.log(windowHalfHeight);
                container.style.height = `${windowHeight}px`;
                container.style.width = `${windowHalfWidth}px`;
                insertFlex(container, "center", "center");
            });
            closeMenu();
        } else if (widConf <= secondBreak) {
            copyrightText.style.marginLeft = "1rem";
            btnsNavContainer.style.display = none;
            btnMenuContainer.style.display = flx;
            menuSocialContainer.style.display = none;

            slidersContentServices.forEach((slider) => {
                insertFlex(slider, "column", "flex-start", "center");
            });

            sliderImgContainersServices.forEach((container) => {
                const windowHalfHeight = slidersContent[0].clientHeight / 2;
                const windowWidth = slidersContent[0].clientWidth;
                //*console.log(windowHalfHeight);
                container.style.height = `${windowHalfHeight}px`;
                container.style.width = `${windowWidth}px`;
                insertFlex(container, "center", "center");
            });
            closeMenuSocial();
        }
    };

    configSize(window.innerWidth);

    const checkWindowHeight = () => {
        const rem = 20;
        const navTop = nav.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 2;

        let borderRadius = "1rem";

        if (navTop >= windowHeight) {
            nav.style.height = "10rem";
            if (currentTheme === themeD) {
                nav.style.background = "hsl(0, 0%, 5%)";
            } else if (currentTheme === themeL) {
                nav.style.background = "hsl(0, 0%, 95%)";
            }
            menuSocialContainer.style.bottom = "inherit";
            menuSocialContainer.style.top = "2rem";
            menuSocialContainer.style.flexDirection = "column";

            btnLogo.style.width = "7rem";
            closeMenu();
            closeMenuSocial();
            setTimeout(() => {
                menuContainer.style.top = 0;
                menuContainer.style.bottom = "inherit";
                menuContainer.style.flexDirection = "column";
                menuContainer.style.borderRadius = `0 0 ${borderRadius} ${borderRadius}`;

                if (menuStatus === close) {
                    menuContainer.style.transform = "translateY(-100%)";
                }
            }, 500);
        } else if (navTop < windowHeight) {
            nav.style.height = "6rem";
            if (currentTheme === themeD) {
                nav.style.background = "hsla(0, 0%, 5%, 0.75)";
            } else if (currentTheme === themeL) {
                nav.style.background = "hsla(0, 0%, 95%, 0.75)";
            }

            menuSocialContainer.style.top = "inherit";
            menuSocialContainer.style.bottom = "2rem";
            menuSocialContainer.style.flexDirection = "column-reverse";

            btnLogo.style.width = "5rem";

            closeMenu();
            closeMenuSocial();
            setTimeout(() => {
                menuContainer.style.top = "inherit";
                menuContainer.style.bottom = 0;
                menuContainer.style.flexDirection = "column-reverse";
                menuContainer.style.borderRadius = `${borderRadius} ${borderRadius} 0 0`;
                if (menuStatus === close) {
                    menuContainer.style.transform = "translateY(100%)";
                }
            }, 500);
        }
    };

    checkWindowHeight();

    //^ SCROLL NAV  && --/USE SCROLL FUNCTION TO CHECK THE POSITION OF THE PAGE
    const scrollBody = () => {
        checkWindowHeight();
    };

    //^SCROLL HEIGHT  && --/SCROLL TO FIRST PART OF PAGE (NO HERO)
    const scrollOneHeight = () => {
        const windowHeight = window.innerHeight;
        const navHeight = nav.getBoundingClientRect().height;
        const fixHeight = windowHeight - navHeight;
        window.scrollTo(0, fixHeight);
    };
    //! SIZE FUNCTIONS
    //^CHECK MENU SECTION POSITION && **/HIGHLIGHT IN THE MENU THE SECTION TARGET
    sections.forEach((section) => {
        const watchPage = ([entry]) => {
            if (entry.isIntersecting) {
                const entryName = entry.target.attributes.id.value;
                btnsSection.forEach((btn) => {
                    const btnName = btn.name;
                    if (btnName === entryName) {
                        btn.classList.add("btn_section_active");
                    } else {
                        btn.classList.remove("btn_section_active");
                    }
                });
            }
        };
        const optionsIO_sections = {
            threshold: 0.2,
        };
        const pageObserver = new IntersectionObserver(watchPage, optionsIO_sections);
        pageObserver.observe(section);
    });

    //^ANIMATION ITEM SWIPE
    const swipingAnimation = () => {
        swipeAnimationContainersFull.forEach((container) => {
            const watchSwipeAnimationContainer = ([entry]) => {
                const animationLeftContainers = entry.target.querySelectorAll(".animation_left");
                const animationRightContainers = entry.target.querySelectorAll(".animation_right");
                const animationUpContainers = entry.target.querySelectorAll(".animation_up");
                if (entry.isIntersecting) {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateY(0)");
                    });
                } /*  else {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(-50%)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(50%)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateY(50%)");
                    });
                } */
            };
            const optionsIO_skills = {
                threshold: "1",
            };

            const skillsContainersObserver = new IntersectionObserver(watchSwipeAnimationContainer, optionsIO_skills);
            skillsContainersObserver.observe(container);
        });

        swipeAnimationContainersHalf.forEach((container) => {
            const watchSwipeAnimationContainer = ([entry]) => {
                const animationLeftContainers = entry.target.querySelectorAll(".animation_left");
                const animationRightContainers = entry.target.querySelectorAll(".animation_right");
                const animationUpContainers = entry.target.querySelectorAll(".animation_up");
                if (entry.isIntersecting) {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateY(0)");
                    });
                } /* else {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(-50%)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(50%)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = selector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateY(50%)");
                    });
                } */
            };
            const optionsIO_skills = {
                threshold: ".4",
            };

            const skillsContainersObserver = new IntersectionObserver(watchSwipeAnimationContainer, optionsIO_skills);
            skillsContainersObserver.observe(container);
        });
    };
    swipingAnimation();

    //^ NAV RESIZE OBSERVER PARA MENU RESPONSIVE --/CHANGE MENU NAV BY SCREEN SIZE
    const watchNavResize = ([entry]) => {
        const navWidth = entry.contentRect.width;

        configSize(navWidth);
    };
    const navResizeObserve = new ResizeObserver(watchNavResize);
    navResizeObserve.observe(nav);

    //^ CREATE TEMPLATE CARD
    const createCard = (item, frac) => {
        let iconsRow = "";
        const cloneProjectCard = cardProjectTemplate.cloneNode(true);
        const projectCard = cloneProjectCard.querySelector(".project_card");
        const projectCardIconsContainer = cloneProjectCard.querySelector(".icons_project_container");
        const cardTitle = cloneProjectCard.querySelector(".title");
        const moreBtn = cloneProjectCard.querySelector(".more_btn");
        //* ******************************************************************************** *//
        const clientName = item["client_name"];
        const cardImg = item["projects"]["images"]["hero"]["small"];
        projectCard.style.backgroundImage = `url("${cardImg}")`;
        const clientTechnologiesInProjects = item["projects"]["technologies"];
        clientTechnologiesInProjects.forEach((tech) => {
            /* console.log(tech); */
            infoSoftware.forEach((technology) => {
                if (technology.tech_name === tech) {
                    iconsRow += technology.icon;
                }
            });
        });
        projectCardIconsContainer.innerHTML = iconsRow;
        cardTitle.textContent = clientName;

        if (item["projects"]["project_link"] !== null && item["projects"]["project_link"] !== "") {
            moreBtn.setAttribute("href", `${item["projects"]["project_link"]}`);
        } else {
            moreBtn.setAttribute("href", "");
        }
        frac.appendChild(projectCard);
    };

    //^ FETCH SEARCH SELECTION DATA //-fetch selection option data for search projects
    let typesOfProjects = [];
    let newProjectsListData = [];
    const createSelectionTypeBtns = async () => {
        try {
            const rawData = await fetch(portfolioData);
            const data = await rawData.json();
            let newID;
            /* console.log(data); */
            data.forEach((item) => {
                const projectTypes = item["projects"]["type"];

                projectTypes.forEach((type) => {
                    if (!typesOfProjects.includes(type)) {
                        typesOfProjects.push(type);
                    }
                });
            });
            typesOfProjects.sort().forEach((type) => {
                const createID = type.toLowerCase().split(" ").join("_");
                newID = createID;
                let newProjectTypeData = { value: type };
                newProjectsListData.push(newProjectTypeData);
            });

            newProjectsListData.forEach((item) => {
                const optionValue = item["value"];
                const template = btnListTemplate.cloneNode(true);
                const newBtn = template.querySelector("BUTTON");
                newBtn.setAttribute("name", optionValue);
                newBtn.textContent = optionValue;

                listBtnsFragment.append(newBtn);
            });
            listBtnsContainer.append(listBtnsFragment);

            //!
            const selectionBtns = selectorAll(".list_btn");

            selectionBtns.forEach((itemBtn) => {
                const createSearchedCards = (e) => {
                    deleteChildElements(porfolioSearchCardsContainer);
                    searchBtnActions(dropDownStatus);
                    const currentNameData = e.target.getAttribute("name");
                    /* console.log(currentNameData); */

                    data.forEach((item) => {
                        const dataIncludedResponse = item["projects"]["type"].includes(currentNameData);
                        if (dataIncludedResponse) {
                            //todo CREAR TARJETAS ESPECIFICAS DE BUSQUEDA
                            //*console.log(item);

                            createCard(item, fragmentSearchProjects);
                            titleSubsectionCardsSearch.textContent = currentNameData;
                            porfolioSearchCardsContainer.appendChild(fragmentSearchProjects);
                            const projectCards = document.querySelectorAll(".project_card");
                            projectCards.forEach((card) => {
                                setTimeout(() => {
                                    animateItem(card, "1", "translateY(0)");
                                }, 500);
                            });
                        } else if (!dataIncludedResponse) {
                            //*console.log('este es el boton que abre la lista, deberia de');
                        }
                    });
                };
                itemBtn.addEventListener("enter", createSearchedCards);
                itemBtn.addEventListener("click", createSearchedCards);
            });
            //!

            /* typesOfProjectOptionList.forEach((optionType) => {
                //* console.log(optionType);
                const createSearchedCards = (e) => {
                    deleteChildElements(porfolioSearchCardsContainer);
                    const currentNameData = e.target.getAttribute("name");
                    //* console.log(currentNameData); 

                    data.forEach((item) => {
                        const dataIncludedResponse = item["projects"]["type"].includes(currentNameData);
                        if (dataIncludedResponse) {
                            //todo CREAR TARJETAS ESPECIFICAS DE BUSQUEDA
                            //*console.log(item);
                            closeSelectList();
                            createCard(item, fragmentSearchProjects);
                            titleSubsectionCardsSearch.textContent = currentNameData;
                            porfolioSearchCardsContainer.appendChild(fragmentSearchProjects);
                            const projectCards = selectorAll(".project_card");
                            projectCards.forEach((card) => {
                                setTimeout(() => {
                                    animateItem(card, "1", "translateY(0)");
                                }, 500);
                            });
                        } else if (!dataIncludedResponse) {
                            //*console.log('este es el boton que abre la lista, deberia de');
                        }
                    });
                };
                optionType.addEventListener("enter", createSearchedCards);
                optionType.addEventListener("click", createSearchedCards);
            }); */
        } catch (error) {
            console.log(error);
        }
    };
    createSelectionTypeBtns();

    const searchBtnActions = (action) => {
        const searchBtnHeight = searchBtn.getBoundingClientRect().height;
        //! console.log(searchBtnTop, searchBtnX);
        //! console.log(action);
        if (action === open) {
            dropDownStatus = close;
            arrow.style.transform = "rotate(0)";
            listBtnsContainer.style.display = none;
            searchBtn.focus();
        } else if (action === close) {
            dropDownStatus = open;
            arrow.style.transform = "rotate(270deg)";
            listBtnsContainer.style.top = `${searchBtnHeight + 10}px`;
            listBtnsContainer.style.display = flx;
            listBtnsContainer.childNodes[0].focus();
        }
    };

    searchBtn.addEventListener("enter", () => searchBtnActions(dropDownStatus));
    searchBtn.addEventListener("click", () => searchBtnActions(dropDownStatus));

    //^ SELECT LIST ACTIONS
    //& OPEN SELECT LIST

    //& CLOSE SELECT LIST

    //&& BTNS LIST ACTIVATION

    //^ CREATE PROJECT HOT CARDS
    const createProjectCardHot = async () => {
        try {
            const rawData = await fetch(portfolioData);
            const data = await rawData.json();
            let hotData = [];
            hotCardsSelection.forEach((proyectHot) => {
                data.forEach((proyect) => {
                    if (proyect.db_name === proyectHot) {
                        hotData.push(proyect);
                    }
                });
            });
            /* console.log(hotData); */
            hotData.forEach((item) => {
                createCard(item, fragmentHotProjects);
            });
            selector("#cards_hot_container").appendChild(fragmentHotProjects);
            const projectCards = selectorAll(".project_card");
            projectCards.forEach((card) => {
                setTimeout(() => {
                    animateItem(card, "1", "translateY(0)");
                }, 500);
            });
        } catch (error) {
            console.log(error);
        }
    };

    //^CREATE PROJECT RANDOM CARDS
    const createProjectCardRandom = async () => {
        const arrayLenght = typesOfProjects.length;
        const randomItem = Math.floor(Math.random() * arrayLenght);
        let randomTypeSelection = typesOfProjects[randomItem];

        try {
            const rawData = await fetch(portfolioData);
            const data = await rawData.json();
            let randomItems = [];
            data.forEach((item) => {
                const itemsTypesOfProjects = item["projects"]["type"];
                if (itemsTypesOfProjects.includes(randomTypeSelection)) {
                    randomItems.push(item);
                    titleSubsectionCardsSearch.textContent = randomTypeSelection;
                }
            });
            //*console.log(randomItems);
            randomItems.forEach((item) => {
                createCard(item, fragmentSearchProjects);
            });

            porfolioSearchCardsContainer.appendChild(fragmentSearchProjects);
            const projectCards = selectorAll(".project_card");

            projectCards.forEach((card) => {
                setTimeout(() => {
                    animateItem(card, "1", "translateY(0)");
                }, 500);
            });
        } catch (error) {
            console.log(error);
        }
    };

    //^CREATE SLIDER MARKERS AND CHECK POSITION SLIDER
    sliderContainersProject.forEach((slider) => {
        slidersServicesCount++;
        const cloneMarker = markersTemplate.cloneNode(true);
        const newMarker = cloneMarker.querySelector(".marker_slider_btn");
        newMarker.setAttribute("id", `marker_slider_btn_${slidersServicesCount}`);
        newMarker.classList.add("marker_slider_services_btn");
        newMarker.setAttribute("name", slider.id);
        fragmentSliderMarkersServices.appendChild(newMarker);

        const watchSliders = ([entry]) => {
            const sliderMarkers = selectorAll(".marker_slider_services_btn");
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                //*console.log(currentId);
                sliderMarkers.forEach((marker) => {
                    let currentMarker = marker.getAttribute("id");
                    let currentMarkerName = marker.getAttribute("name");
                    //*console.log(currentMarker);
                    if (currentMarkerName === currentId) {
                        const markerActive = selector(`#${currentMarker}`);
                        markerActive.style.background = "var(--secondColor)";
                    } else {
                        const markerInactive = selector(`#${currentMarker}`);
                        markerInactive.style.background = "var(--firstColor)";
                    }
                });
            }
        };
        const optionsIO_sliders = {
            threshold: 0.4,
        };
        let sliderObserver = new IntersectionObserver(watchSliders, optionsIO_sliders);
        sliderObserver.observe(slider);
    });
    let dinamicSliderWidth = slidersServicesCount * 100;
    sliderWindowContainerProjects.style.width = `${dinamicSliderWidth}%`;
    sliderPageMarkersContainerServices.appendChild(fragmentSliderMarkersServices);

    //^ SLIDER BTNS CONSTANT
    //& MARKERS CONTANT
    const sliderMarkersServices = selectorAll(".marker_slider_services_btn");
    //& CREATE SLIDER MARKERS BTNS
    sliderMarkersServices.forEach((marker) => {
        const checkSlider = () => {
            const sliderId = marker.name;
            const sliderSearched = selector(`#${sliderId}`).getBoundingClientRect().left;
            const sliderWidth = sliderWindowContainerProjects.getBoundingClientRect().width;
            //*console.log(sliderFullCountServices, sliderSearched, sliderWidth);

            if (sliderSearched > 0) {
                sliderFullCountServices += sliderSearched;
                sliderWindowContainerProjects.style.transform = `translateX(-${sliderFullCountServices}px)`;
                //*console.log(sliderFullCountServices, sliderSearched, sliderWidth, 'by higher than 0');
            } else if (sliderSearched < 0) {
                sliderFullCountServices += sliderSearched;
                sliderWindowContainerProjects.style.transform = `translateX(-${sliderFullCountServices}px)`;
                //*console.log(sliderFullCountServices, sliderSearched, sliderWidth, 'by lower than 0');
            } else if (sliderSearched === 0) {
                //*console.log(sliderFullCountServices, sliderSearched, sliderWidth, 'by equal than 0');
            }
        };
        marker.addEventListener("enter", checkSlider);
        marker.addEventListener("click", checkSlider);
    });

    //! ADD EVENT LISTENERS
    window.addEventListener("scroll", scrollBody);
    body.addEventListener("click", closeByBodyClick);
    btnLogo.addEventListener("click", toTheTop);
    btnMenuContainer.addEventListener("click", () => btnNavMenu(menuStatus));
    closeMenuBtn.addEventListener("click", closeMenu);
    btnHeroDown.addEventListener("click", scrollOneHeight);
    acceptBtnStorageWarningBtn.addEventListener("click", acceptStorage);

    //^ CLOSE MODAL BTN
    closeModalBtn.forEach((btn) => {
        const dataName = btn.getAttribute("data-name");
        /* console.log(dataName); */
        btn.addEventListener("click", () => {
            switch (dataName) {
                case "storage":
                    closeModal(storageAlertModal);
                    break;
                case "legal":
                    const currentPosition = modalInfoLegal.getBoundingClientRect().top;
                    if (currentPosition !== 0) {
                        modalInfoLegal.scrollTo(currentPosition, 0);
                        setTimeout(() => {
                            closeModal(legalModal);
                        }, 500);
                    } else {
                        closeModal(legalModal);
                    }
                    break;
                case "contact":
                    closeModal(contactModal);
                    break;
            }
        });
    });
    //^OPEN LEGALS

    btnsLinks.forEach((btn) => {
        const dataName = btn.getAttribute("data-name");
        /* console.log(dataName); */
        btn.addEventListener("click", () => {
            switch (dataName) {
                case "legal":
                    openModal(legalModal);
                    break;
                case "data":
                    openModal(storageAlertModal);
                    break;
                case "inter":
                    storageAlertModal.style.opacity = "0";
                    storageAlertModal.style.transform = "translate(-50%,-50%)";
                    setTimeout(() => {
                        storageAlertModal.style.display = none;
                        legalModal.style.display = flx;
                        setTimeout(() => {
                            legalModal.style.transform = "translate(-50%, 0)";
                            legalModal.style.opacity = "1";
                        }, 200);
                    }, 1200);
                    break;
            }
        });
    });

    menuSocialBtn.addEventListener("click", socialMenuBtnActions);
    //^BTN LEFT SLIDER
    sliderBtnLeftServices.addEventListener("click", () => {
        const sliderWidth = sliderWindowContainerProjects.getBoundingClientRect().width;
        //*console.log(slidersServicesCount);
        const sliderWidthFull = sliderWidth / slidersServicesCount;
        if (sliderFullCountServices === 0) {
            sliderFullCountServices = sliderWidth - sliderWidthFull;
            sliderWindowContainerProjects.style.transform = `translateX(-${sliderFullCountServices}px)`;
        } else {
            sliderFullCountServices -= sliderWidthFull;
            sliderWindowContainerProjects.style.transform = `translateX(-${sliderFullCountServices}px)`;
        }
    });

    //^BTN RIGHT SLIDER
    sliderBtnRightServices.addEventListener("click", () => {
        const sliderWidth = sliderWindowContainerProjects.getBoundingClientRect().width;
        //*console.log(slidersServicesCount);
        const sliderWidthFull = sliderWidth / slidersServicesCount;
        sliderFullCountServices += sliderWidthFull;
        if (sliderFullCountServices === sliderWidth) {
            sliderWindowContainerProjects.style.transform = `translateX(0)`;
            sliderFullCountServices = 0;
        } else {
            sliderWindowContainerProjects.style.transform = `translateX(-${sliderFullCountServices}px)`;
        }
    });

    //^ CHANGE THEME BTN && --/CHANGE THE THEME PAGE BY THE MENU BTN
    const changeThemeBtn = (tm) => {
        const navTop = nav.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 2;
        if (tm === themeL) {
            currentTheme = themeD;
            btnThemeNav.innerHTML = sunIcon;
            btnThemeMenu.innerHTML = sunIcon;

            if (navTop >= windowHeight) {
                nav.style.background = "hsl(0, 0%, 5%)";
            } else if (navTop < windowHeight) {
                nav.style.background = "hsla(0, 0%, 5%,75%)";
            }
        } else if (tm === themeD) {
            currentTheme = themeL;
            btnThemeNav.innerHTML = moonIcon;
            btnThemeMenu.innerHTML = moonIcon;

            if (navTop >= windowHeight) {
                nav.style.background = "hsl(0, 0%, 95%)";
            } else if (navTop < windowHeight) {
                nav.style.background = "hsla(0, 0%, 95%,75%)";
            }
        }
        body.className = currentTheme;
    };
    btnsTheme.forEach((btn) => {
        btn.addEventListener("click", () => changeThemeBtn(currentTheme));
    });
    //^ SOCIAL BTNS
    btnsMenuSocial.forEach((btn) => {
        btn.addEventListener("click", closeMenuSocial);
    });

    //^ CLOSE MENU BY BTN && --/EVERYTIME A MENU BTN CLICK MENU CLOSE
    btnsMenu.forEach((btn) => {
        btn.addEventListener("click", closeMenu);
    });

    //^ BTNS SCROLLS TO SECTION
    btnsHero.forEach((btn) => {
        btn.addEventListener("click", () => {
            scrollToSection(btn);
        });
    });
    btnsSection.forEach((btn) => {
        btn.addEventListener("click", () => {
            scrollToSection(btn);
        });
    });

    //^ CONTACT BTNS OPEN MODAL
    btnsContact.forEach((btn) => {
        btn.addEventListener("click", () => openModal(contactModal));
    });

    //^ SEND FORM
    sendBtnFormModal.addEventListener("click", (e) => {
        e.preventDefault();
    });

    //! ******** !//
    //!  acoplar !//
    //! ******** !//
});
