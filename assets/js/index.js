document.addEventListener("DOMContentLoaded", () => {
    //! TEMPLATE CONSTANTS
    //^ PROJECT CARD TEMPLATE CONSTANTS
    const fragmentHotProjects = document.createDocumentFragment();
    const fragmentSearchProjects = document.createDocumentFragment();
    const fragmentSliderMarkersServices = document.createDocumentFragment();

    const cardProjectTemplate = document.querySelector("#card_project_template").content;
    const btnProjectTemplate = document.querySelector("#btn_project_template").content;
    const markersTemplate = document.querySelector("#marker_slider_template").content;
    //^ SELECTION LIST TEMPLATE CONSTANTS
    const fragmentListProjects = document.createDocumentFragment();
    const selectionListTemplate = document.querySelector("#selection_list_template").content;
    const optionListTemplate = document.querySelector("#option_list_btn_template").content;
    //! GENERAL ELEMENTS
    const htmlLebel = document.documentElement;
    const body = document.querySelector("BODY");
    const btnsHero = document.querySelectorAll(".btn_hero");
    const btnsSection = document.querySelectorAll(".btn_section");
    const btnsContact = document.querySelectorAll(".contact_btn");
    const btnsTheme = document.querySelectorAll(".btn_theme");
    const sections = document.querySelectorAll(".section");
    const legalBtns = document.querySelectorAll(".btn_link_legal");
    const dataBtns = document.querySelectorAll(".btn_link_data");

    //^ CONTAINERS WITH ANIMATION FUNCTIONS
    const swipeAnimationContainersFull = document.querySelectorAll(".swipe_animation_container_full");
    const swipeAnimationContainersHalf = document.querySelectorAll(".swipe_animation_container_half");

    //^ MODALS
    //& CONTACT MODAL
    const sendBtnFormModal = document.querySelector("#contact_form_send_btn");
    const contactModal = document.querySelector("#contact_modal");
    const closeBtnModalContactForm = document.querySelector("#modal_form_close_btn");
    const closeBtnLegalModal = document.querySelector("#modal_legal_close_btn");
    //& LEGAL MODAL
    const modalInfoLegal = document.querySelector("#modal_info_legal");
    const legalModal = document.querySelector("#legal_modal");
    const legalAccept = document.querySelector("#legal_modal_accept_btn");

    //^ ALERT MODAL
    //& STORAGE MODAL
    const storageAlertModal = document.querySelector("#storage_alert_modal");
    const acceptBtnStorageWarningBtn = document.querySelector("#storage_alert_modal_accept_btn");
    const closeBtnAlertModal = document.querySelector("#alert_modal_storage_close_btn");

    //^ MENU CONTENT
    const menuContainer = document.querySelector("#menu_container");
    const btnsMenu = document.querySelectorAll(".btn_menu");
    const btnThemeMenu = document.querySelector("#change_theme_btn_menu");
    const closeMenuBtn = document.querySelector("#menu_container_close_btn");
    const openMenuSound = document.querySelector("#menu_open_sound");

    //^ MENU SOCIAL
    const menuSocialContainer = document.querySelector("#menu_social_container");
    const menuSocialBtn = document.querySelector("#menu_social_btn");
    const menuSocialBtnsContainer = document.querySelector(".menu_social_btns_container");
    const btnsMenuSocial = document.querySelectorAll(".social_btn");

    //^ NAV
    const nav = document.querySelector(".nav");
    const btnMenuContainer = document.querySelector("#btn_menu_slider");
    const btnsNavContainer = document.querySelector("#nav_sections_btns_container");
    const btnsNav = document.querySelectorAll(".btn_nav");
    //& BTN LOGO
    const btnLogo = document.querySelector("#logo_nav_btn");
    //& TBN THEME
    const btnThemeNav = document.querySelector("#change_theme_btn_nav");
    //& BTN LEBELS
    const lebelBtnMain = document.querySelector("#main_btn_nav");
    const lebelBtnAbout = document.querySelector("#about_btn_nav");
    const lebelBtnSkills = document.querySelector("#skills_btn_nav");
    const lebelBtnServices = document.querySelector("#services_btn_nav");
    const lebelBtnPortfolio = document.querySelector("#portfolio_btn_nav");
    const lebelBtnClients = document.querySelector("#clients_btn_nav");
    const lebelBtnContact = document.querySelector("#contact_btn_nav");

    //^ HERO
    const btnHeroDown = document.querySelector("#hero_btn_down");

    //^ SERVICES
    //& SERVICES SLIDERS
    const sliderWindowContainerServices = document.querySelector("#slider_window_container_services");
    const sliderContainersServices = document.querySelectorAll(".slider_container_services");
    const sliderPageMarkersContainerServices = document.querySelector("#slider_page_markers_container_services");
    const sliderBtnLeftServices = document.querySelector("#btn_swipe_left_slider_services");
    const sliderBtnRightServices = document.querySelector("#btn_swipe_right_slider_services");
    const slidersContentServices = document.querySelectorAll(".slider_content_services");
    const sliderImgContainersServices = document.querySelectorAll(".img_container_services");
    const sliderInfoContainersServices = document.querySelectorAll(".info_container_services");
    //& SERVICES CONTAINERS
    const servicesContainer = document.querySelector("#services_container");
    const serviceContainers = document.querySelectorAll(".service_container");
    const serviceCards = document.querySelectorAll(".service_card");
    const serviceCardsLeft = document.querySelectorAll(".service_card_left");
    const serviceCardsRight = document.querySelectorAll(".service_card_right");

    //^ SKILLS
    const skillsContainer = document.querySelector(".skills_containers");
    const skillsIconsContainers = document.querySelectorAll(".skills_icon_container");

    //^ PORTFOLIO
    const titleSubsectionCardsSearch = document.querySelector("#title_subsection_search_type");
    //& CONTAINERS WHERE TEMPLATES APPEND
    const portfolioHotCardsContainer = document.querySelector("#cards_hot_container");
    const searchBtnsContainer = document.querySelector("#search_project_btns_container");
    const porfolioSearchCardsContainer = document.querySelector("#cards_search_container");
    //& CONTAINERS LOADER
    const loadersContainers = document.querySelectorAll(".loader_container");
    const loaderSearchCardsContainer = document.querySelector("#loader_cards_hot_container");
    const spinnerHotCardsContainer = document.querySelector("#spinner_container_cards_hot");
    const loaderHotCardsContainer = document.querySelector("#loader_cards_search_container");
    const spinnerSearchCardContainer = document.querySelector("#spinner_container_cards_search");

    //^ CLIENTS
    const logoClientsContainers = document.querySelectorAll(".client_logo_container");

    //^LEGALS
    const copyrightText = document.querySelector("#made_content");
    const btnLegalFooter = document.querySelector("#btn_legal_legals");
    const btnDataFooter = document.querySelector("#btn_data_legals");

    //^FETCH JASON COMPANYS DATA
    const portfolioData = "./portfolioDB.json";

    //!GENERAL VARIANTS--START
    //^ LANG
    const es = "Español";
    const eng = "English";
    let pageLang = es;

    //^ THEME ICONS
    const sunIcon =
        '<svg class="theme_icon_svg" id="sun_icon_svg"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Tema día</title><path class="cls-1" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/></svg>';
    const moonIcon =
        '<svg class="theme_icon_svg" id="moon_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Tema noche</title><path class="cls-1" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/></svg>';

    //^ STATUS
    const close = "close";
    const open = "open";
    const accepted = "accepted";
    const decline = "decline";

    let menuStatus = close;
    let menuSocialStatus = close;
    let contactModalStatus = close;
    let alertStorageModalStatus = open;
    let legalModalStatus = close;
    let selectListStatus = close;
    let slidersServicesCount = 0;
    let servicecardsCount = 0;
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
        },
        {
            tech_name: "Photoshop",
            tech_complete_name: "Adobe Photoshop",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "InDesign",
            tech_complete_name: "Adobe InDesign",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "Premier",
            tech_complete_name: "Adobe Premier",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "Xd",
            tech_complete_name: "Adobe Xd",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "Figma",
            tech_complete_name: "Figma",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "HTML",
            tech_complete_name: "HTML",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "CSS",
            tech_complete_name: "CSS",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "SASS",
            tech_complete_name: "SASS",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "GitHub",
            tech_complete_name: "GitHub",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "JavaScript",
            tech_complete_name: "JavaScript",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "Node.js",
            tech_complete_name: "Node.js",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "Python",
            tech_complete_name: "Python",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },

        {
            tech_name: "Vue.js",
            tech_complete_name: "Vue.js",
            tech_info: 'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },
    ];

    //!GENERAL START FUNCTIONS
    //^CHANGE THEME BY HOUR
    let todayHour = new Date().getHours();
    //*let todayHour = 9;
    if (todayHour <= 7 || todayHour >= 19) {
        body.classList.remove(`light_theme`);

        body.classList.add(`dark_theme`);

        btnThemeMenu.innerHTML = sunIcon;
        btnThemeNav.innerHTML = sunIcon;
    } else {
        body.classList.remove(`dark_theme`);

        body.classList.add(`light_theme`);
        btnThemeMenu.innerHTML = moonIcon;
        btnThemeNav.innerHTML = moonIcon;
    }

    //^STORAGE FIRST CHECK
    const checkAlertStorageAnswer = () => {
        let storageContent = JSON.parse(localStorage.getItem(localStorageName));
        if (!storageContent) {
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            console.log("local storage item is created");
            setTimeout(() => {
                animateItem(storageAlertModal, "1", "translateY(0)");
            }, 2000);
        } else if (storageContent && storageContent["page_alert_status"] === open) {
            storageForJohnKPage["page_view_count"] = storageContent["page_view_count"] + 1;
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            console.log(`local storage item answer= ${storageContent["page_alert_status"]}, page views= ${storageContent["page_view_count"]}`);
            setTimeout(() => {
                animateItem(storageAlertModal, "1", "translateY(0)");
            }, 2000);
        } else if (storageContent && storageContent["page_alert_status"] === close) {
            storageForJohnKPage["page_alert_status"] = close;
            storageForJohnKPage["page_view_count"] = storageContent["page_view_count"] + 1;
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            storageAlertModal.style.display = "none";
            console.log(`local storage item answer= ${storageContent["page_alert_status"]}, page views= ${storageContent["page_view_count"]}`);
        }
    };
    checkAlertStorageAnswer();

    //^ GENERATE RANDOM ITEM
    const randomDataSelector = (arr) => {
        const arrayLenght = arr.length;
        const randomItem = Math.floor(Math.random() * arrayLenght);
        return arr[randomItem];
    };
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
        cont.style.display = "flex";
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
                    loaderSearchCardsContainer.style.display = "none";
                    createProjectCardHot();
                    setTimeout(() => {
                        loadersObserver.unobserve(spinnerHotCardsContainer);
                    }, 500);
                }, 1200);
            } else if (entry.isIntersecting && dataNameContainer === "loader_cards_search_container") {
                animateItem(spinnerSearchCardContainer, "0", "translateY(-4rem)");
                setTimeout(() => {
                    loaderHotCardsContainer.style.display = "none";

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
    const closeByBodyClick = (e) => {
        if (menuSocialStatus === open && e.target.id !== "menu_social_btn") {
            closeMenuSocial();
        } else if (selectListStatus === open && e.target.id !== "selection_list_search_btn") {
            closeSelectList();
        }
    };

    //^ OPEN MENU
    const btnNavMenu = () => {
        if (menuStatus === close) {
            menuStatus = open;
            menuContainer.style.opacity = "1";
            menuContainer.style.transform = "translateY(0)";
            //*openMenuSound.play();
        } else if (menuStatus === open) {
            closeMenu();
        }
    };

    //^ CLOSE MENU
    const closeMenu = () => {
        let menuTop = menuContainer.style.top;

        if (menuTop === "0px" || menuTop === 0 || menuTop === "") {
            menuStatus = close;
            menuContainer.style.transform = "translateY(-100%)";
            menuContainer.style.opacity = "0";
        } else if (menuTop === "inherit") {
            menuStatus = close;
            menuContainer.style.transform = "translateY(100%)";
            menuContainer.style.opacity = "0";
        }
    };

    //^GENERAL MODAL ACTIONS
    const openModal = (cont) => {
        cont.style.display = "flex";
        setTimeout(() => {
            animateItem(cont, "1", "translate(-50%, 0)");
        }, 500);
    };
    const closeModal = (cont) => {
        animateItem(cont, "0", "translate(-50%, -50%)");
        setTimeout(() => {
            cont.style.display = "none";
        }, 1200);
    };

    //^ CONTACT MODAL OPEN
    const openContactModal = () => {
        if (contactModalStatus === close) {
            openModal(contactModal);
            contactModalStatus = open;
        }
    };

    //^ CONTACT MODAL CLOSE
    const closeContactModal = () => {
        if (contactModalStatus === open) {
            closeModal(contactModal);
            contactModalStatus = close;
        }
    };

    //^ ALERT MODAL OPEN
    const openAlert = (cont) => {
        cont.style.display = "block";
        setTimeout(() => {
            animateItem(cont, "1", "translateY(0)");
        }, 100);
    };

    //^ ALERT MODAL CLOSE
    const closeAlert = (cont) => {
        animateItem(cont, "0", "translateY(-50%)");
        setTimeout(() => {
            cont.style.display = "none";
        }, 1100);
    };

    //^ ALERT STORAGE MODAL CLOSE
    const closeAlertStorageModal = () => {
        storageForJohnKPage["page_alert_status"] = close;
        closeAlert(storageAlertModal);
        localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
        console.log(localStorage.getItem(localStorageName));
    };

    //^ LEGAL MODAL CLOSE
    const closeLegalModal = () => {
        const currentPosition = modalInfoLegal.getBoundingClientRect().top;
        legalModalStatus = close;
        if (currentPosition !== 0) {
            modalInfoLegal.scrollTo(currentPosition, 0);
            setTimeout(() => {
                closeModal(legalModal);
            }, 500);
        } else {
            closeModal(legalModal);
        }
    };

    //^ RETURN THE PAGE TO THE PAGE TOP
    const toTheTop = () => {
        const currentPosition = body.getBoundingClientRect().top;
        window.scrollTo(currentPosition, 0);
    };

    //^SCROLL T0
    const scrollToSection = (btn) => {
        const section = document.querySelector(`#${btn.name}`);
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

    //^ CHECK MENU POSITION WINDOW  && **/SCALE THE NAVBAR AND CHANGE THE MENU POSITION BY THE PAGE POSITION
    //&CONFIGURATION SIZE SCREEN--START ->//THIS FUNCTION BRING ALL THE CONTAINERS CARACTERISTICTS BY THE SIZE OF THE WINDOW
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
            lebelBtnMain.innerHTML = '<h3 class="btn_lebel">Inicio</h3>';
            lebelBtnAbout.innerHTML = '<h3 class="btn_lebel">Acerca de</h3>';
            lebelBtnSkills.innerHTML = '<h3 class="btn_lebel">Conocimientos</h3>';
            lebelBtnServices.innerHTML = '<h3 class="btn_lebel">Servicios</h3>';
            lebelBtnPortfolio.innerHTML = '<h3 class="btn_lebel">Portafolio</h3>';
            lebelBtnClients.innerHTML = '<h3 class="btn_lebel">Clientes</h3>';
            lebelBtnContact.innerHTML = '<h3 class="btn_lebel">Contactame</h3>';
            btnMenuContainer.style.display = "none";
            btnsNavContainer.style.display = "flex";
            menuSocialContainer.style.display = "flex";
            servicesContainer.classList.add("services_container_one_column");
            servicesContainer.classList.remove("services_container_two_columns");

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
            insertFlex(skillsContainer, "row", "center", "flex-start");
            serviceContainers.forEach((container) => {
                container.style.width = "100%";
            });
            serviceCardsLeft.forEach((card) => {
                changeCardStyle(card, "row", "var(--cardServiceHeight)");
            });
            serviceCardsRight.forEach((card) => {
                changeCardStyle(card, "row-reverse", "var(--cardServiceHeight)");
            });
            logoClientsContainers.forEach((container) => {
                container.style.width = "12.5rem";
                container.style.height = "8rem";
            });
            skillsIconsContainers.forEach((container) => {
                container.style.width = "5rem";
                container.style.height = "5rem";
            });
            closeMenu();
        } else if (widConf > secondBreak || (widConf < firstBreak && widConf > secondBreak)) {
            copyrightText.style.marginLeft = "5rem";
            btnLegalFooter.innerHTML = '<h3 class="btn_lebel">Legales</h3>';
            btnDataFooter.innerHTML = '<h3 class="btn_lebel">Uso de datos</h3>';
            lebelBtnMain.innerHTML =
                '<svg class="nav_menu_icon_svg" id="home_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Inicio</title><path class="cls-1" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>';
            /* '<svg class="nav_menu_icon_svg" id="home_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Inicio</title><path class="cls-1" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z"/></svg>'; */
            lebelBtnAbout.innerHTML =
                '<svg class="nav_menu_icon_svg" id="about_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Acerca de</title><circle class="cls-1" cx="12" cy="4" r="2"></circle><path class="cls-1"  d="M15 22V9h5V7H4v2h5v13h2v-7h2v7z"></path></svg>';
            /*   '<svg class="nav_menu_icon_svg" id="about_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Acerca de</title><path class="cls-1" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>'; */
            lebelBtnSkills.innerHTML =
                '<svg class="nav_menu_icon_svg" id="skills_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Conocimientos</title><path class="cls-1" d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z"/></svg>';
            lebelBtnServices.innerHTML =
                '<svg class="nav_menu_icon_svg" id="services_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Servicios</title><path class="cls-1" d="M21 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"/></svg>';
            //*'<svg class="nav_menu_icon_svg" id="services_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Servicios</title><path class="cls-1" d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zm0 3.544L9.022 8.402 3.957 9.887l3.225 4.178-.153 5.275L12 17.566l4.97 1.774-.152-5.275 3.224-4.178-5.064-1.485L12 4.044zM10 12a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"/></svg>';
            lebelBtnPortfolio.innerHTML =
                '<svg class="nav_menu_icon_svg" id="portfolio_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Portafolio</title><path class="cls-1" d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>';
            lebelBtnClients.innerHTML =
                '<svg class="nav_menu_icon_svg" id="clients_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Clientes</title><path class="cls-1" d="M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"/></svg>';
            //* '<svg class="nav_menu_icon_svg" id="clients_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Clientes</title><path class="cls-1" d="M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zm0 5.207l-.739 1.777-1.916.153 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.459-1.252-1.915-.153L12 13.707zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"/></svg>';
            //* '<svg class="nav_menu_icon_svg" id="clients_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Clientes</title><path class="cls-1" d="M2 19h20v2H2v-2zm9-11h2v8h-2V8zM7.965 8h2.125l-2.986 7.964h-2L2.118 8h2.125l1.861 5.113L7.965 8zM17 14v2h-2V8h4a3 3 0 0 1 0 6h-2zm0-4v2h2a1 1 0 0 0 0-2h-2zM2 3h20v2H2V3z"/></svg>';
            //*'<svg class="nav_menu_icon_svg" id="clients_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Clientes</title><path class="cls-1" d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z"/></svg>';
            lebelBtnContact.innerHTML =
                '<svg class="nav_menu_icon_svg" id="contact_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Contactame</title><path class="cls-1" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z"/></svg>';
            btnMenuContainer.style.display = "none";
            btnsNavContainer.style.display = "flex";
            menuSocialContainer.style.display = "flex";
            servicesContainer.classList.add("services_container_one_column");
            servicesContainer.classList.remove("services_container_more_columns");
            insertFlex(skillsContainer, "row", "center", "flex-start");

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
            serviceContainers.forEach((container) => {
                container.style.width = "100%";
            });
            serviceCardsLeft.forEach((card) => {
                changeCardStyle(card, "row", "var(--cardServiceHeight)");
            });
            serviceCardsRight.forEach((card) => {
                changeCardStyle(card, "row-reverse", "var(--cardServiceHeight)");
            });
            logoClientsContainers.forEach((container) => {
                container.style.width = "12.5rem";
                container.style.height = "8rem";
            });
            skillsIconsContainers.forEach((container) => {
                container.style.width = "5rem";
                container.style.height = "5rem";
            });
            closeMenu();
        } else if (widConf <= secondBreak) {
            copyrightText.style.marginLeft = "0";
            btnLegalFooter.innerHTML =
                '<svg class="footer_menu_icon_svg" id="legals_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Legales</title><path class="cls-1" d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"/></svg>';
            btnDataFooter.innerHTML =
                '<svg class="footer_menu_icon_svg" id="data_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Uso de datos</title><path class="cls-1" d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10z"/></svg>';

            btnsNavContainer.style.display = "none";
            btnMenuContainer.style.display = "flex";
            menuSocialContainer.style.display = "none";

            insertFlex(skillsContainer, "column", "flex-start", "center");
            servicesContainer.classList.add("services_container_more_columns");
            servicesContainer.classList.remove("services_container_one_column");

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
            serviceContainers.forEach((container) => {
                container.style.width = "var(--cardServiceWidthMore)";
                container.style.height = "var(--cardServiceHeight)";
            });
            serviceCardsLeft.forEach((card) => {
                changeCardStyle(card, "column", "var(--cardServiceHeight)");
            });
            serviceCardsRight.forEach((card) => {
                changeCardStyle(card, "column", "var(--cardServiceHeight)");
            });

            logoClientsContainers.forEach((container) => {
                container.style.width = "10rem";
                container.style.height = "6rem";
            });
            skillsIconsContainers.forEach((container) => {
                container.style.width = "4rem";
                container.style.height = "4rem";
            });
            closeMenuSocial();
        }
    };

    const checkWindowWidth = () => {
        const windowWidth = window.innerWidth;
        configSize(windowWidth);
    };
    checkWindowWidth();

    const checkWindowHeight = () => {
        const rem = 20;
        const navTop = nav.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 2;

        let borderRadius = "1rem";
        if (navTop >= windowHeight) {
            nav.style.height = "10rem";

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
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateY(0)");
                    });
                } /*  else {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(-50%)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(50%)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
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
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateX(0)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "1", "translateY(0)");
                    });
                } /* else {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(-50%)");
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, "0", "translateX(50%)");
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
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
        const cloneProjectCard = cardProjectTemplate.cloneNode(true);
        const projectCard = cloneProjectCard.querySelector(".project_card");
        const fieldsetCard = cloneProjectCard.querySelector(".btns_flag_project_container");
        const cardTitle = cloneProjectCard.querySelector(".title");
        const moreBtn = cloneProjectCard.querySelector(".more_btn");
        //* ******************************************************************************** *//
        const clientName = item["client_name"];
        const cardImg = item["projects"]["images"]["hero"]["small"];
        projectCard.style.backgroundImage = `url("${cardImg}")`;
        const clientTechnologiesInProjects = item["projects"]["technologies"];
        clientTechnologiesInProjects.forEach((project) => {
            const cloneBtn = btnProjectTemplate.cloneNode(true);
            const flagBtn = cloneBtn.querySelector(".flag_project_btn");

            flagBtn.textContent = project;
            fieldsetCard.appendChild(flagBtn);
        });
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
            console.log(data);
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
            console.log(newProjectsListData);

            const selectionListTemplateClone = selectionListTemplate.cloneNode(true);
            const newList = selectionListTemplateClone.querySelector(".selection_list");
            newList.setAttribute("name", "types_of_projects");
            newList.id = `selection_list_type_of_projects`;
            newProjectsListData.forEach((option) => {
                const optionValue = option["value"];
                /* console.log(optionValue); */

                const optionListTemplateClone = optionListTemplate.cloneNode(true);
                const newOptionBtn = optionListTemplateClone.querySelector(".option_list_btn");

                const newOptionText = optionListTemplateClone.querySelector(".option_list_text");
                newOptionBtn.setAttribute("name", optionValue);
                newOptionText.textContent = optionValue;
                newList.appendChild(newOptionBtn);
            });
            fragmentListProjects.appendChild(newList);
            searchBtnsContainer.appendChild(fragmentListProjects);
            const typesOfProjectOptionList = document.querySelectorAll(".option_list_btn");
            /* console.log(typesOfProjectOptionList); */
            typesOfProjectOptionList.forEach((optionType) => {
                /* console.log(optionType); */
                const createSearchedCards = (e) => {
                    deleteChildElements(porfolioSearchCardsContainer);
                    const currentNameData = e.target.getAttribute("name");
                    /* console.log(currentNameData); */

                    data.forEach((item) => {
                        const dataIncludedResponse = item["projects"]["type"].includes(currentNameData);
                        if (dataIncludedResponse) {
                            //todo CREAR TARJETAS ESPECIFICAS DE BUSQUEDA
                            //*console.log(item);
                            closeSelectList();
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

                optionType.addEventListener("click", createSearchedCards);
            });
        } catch (error) {
            console.log(error);
        }
    };
    createSelectionTypeBtns();

    //^ SELECT LIST ACTIONS
    //& OPEN SELECT LIST
    const openSelectList = () => {
        const selectionTypesList = document.querySelector("#selection_list_type_of_projects");
        const arrowSvg = document.querySelector("#arrow_btn_select_list_svg");
        arrowSvg.style.transform = "rotate(-180deg)";
        selectionTypesList.style.height = "fit-content";
        selectListStatus = open;
    };

    //& CLOSE SELECT LIST
    const closeSelectList = () => {
        const selectionTypesList = document.querySelector("#selection_list_type_of_projects");
        const arrowSvg = document.querySelector("#arrow_btn_select_list_svg");
        arrowSvg.style.transform = "rotate(0)";
        selectionTypesList.style.height = "3rem";
        selectListStatus = close;
    };

    //&& BTNS LIST ACTIVATION
    const btnsListObserve = new MutationObserver(([entry]) => {
        //*console.log(entry);
        const searchListBtn = document.querySelector("#selection_list_search_btn");
        const selectListActions = () => {
            if (selectListStatus === close) {
                openSelectList();
            } else if (selectListStatus === open) {
                closeSelectList();
            }
        };
        searchListBtn.addEventListener("click", selectListActions);
    });
    btnsListObserve.observe(searchBtnsContainer, { childList: true });

    //^ CREATE PROJECT HOT CARDS
    const createProjectCardHot = async () => {
        try {
            const rawData = await fetch(portfolioData);
            const data = await rawData.json();
            data.forEach((item) => {
                createCard(item, fragmentHotProjects);
            });
            portfolioHotCardsContainer.appendChild(fragmentHotProjects);
            const projectCards = document.querySelectorAll(".project_card");
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
        let randomTypeSelection = randomDataSelector(typesOfProjects);
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
            const projectCards = document.querySelectorAll(".project_card");

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
    sliderContainersServices.forEach((slider) => {
        slidersServicesCount++;
        const cloneMarker = markersTemplate.cloneNode(true);
        const newMarker = cloneMarker.querySelector(".marker_slider_btn");
        newMarker.setAttribute("id", `marker_slider_btn_${slidersServicesCount}`);
        newMarker.classList.add("marker_slider_services_btn");
        newMarker.setAttribute("name", slider.id);
        fragmentSliderMarkersServices.appendChild(newMarker);

        const watchSliders = ([entry]) => {
            const sliderMarkers = document.querySelectorAll(".marker_slider_services_btn");
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                //*console.log(currentId);
                sliderMarkers.forEach((marker) => {
                    let currentMarker = marker.getAttribute("id");
                    let currentMarkerName = marker.getAttribute("name");
                    //*console.log(currentMarker);
                    if (currentMarkerName === currentId) {
                        const markerActive = document.querySelector(`#${currentMarker}`);
                        markerActive.style.background = "var(--secondColor)";
                    } else {
                        const markerInactive = document.querySelector(`#${currentMarker}`);
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
    sliderWindowContainerServices.style.width = `${dinamicSliderWidth}%`;
    sliderPageMarkersContainerServices.appendChild(fragmentSliderMarkersServices);

    //^ SLIDER BTNS CONSTANT
    //& MARKERS CONTANT
    const sliderMarkersServices = document.querySelectorAll(".marker_slider_services_btn");
    //& CREATE SLIDER MARKERS BTNS
    sliderMarkersServices.forEach((marker) => {
        const checkSlider = () => {
            const sliderId = marker.name;
            const sliderSearched = document.querySelector(`#${sliderId}`).getBoundingClientRect().left;
            const sliderWidth = sliderWindowContainerServices.getBoundingClientRect().width;
            //*console.log(sliderFullCountServices, sliderSearched, sliderWidth);

            if (sliderSearched > 0) {
                sliderFullCountServices += sliderSearched;
                sliderWindowContainerServices.style.transform = `translateX(-${sliderFullCountServices}px)`;
                //*console.log(sliderFullCountServices, sliderSearched, sliderWidth, 'by higher than 0');
            } else if (sliderSearched < 0) {
                sliderFullCountServices += sliderSearched;
                sliderWindowContainerServices.style.transform = `translateX(-${sliderFullCountServices}px)`;
                //*console.log(sliderFullCountServices, sliderSearched, sliderWidth, 'by lower than 0');
            } else if (sliderSearched === 0) {
                //*console.log(sliderFullCountServices, sliderSearched, sliderWidth, 'by equal than 0');
            }
        };
        marker.addEventListener("click", checkSlider);
    });

    //! ADD EVENT LISTENERS
    window.addEventListener("scroll", scrollBody);
    body.addEventListener("click", closeByBodyClick);
    btnLogo.addEventListener("click", toTheTop);
    btnMenuContainer.addEventListener("click", btnNavMenu);
    closeMenuBtn.addEventListener("click", closeMenu);
    closeBtnModalContactForm.addEventListener("click", closeContactModal);
    btnHeroDown.addEventListener("click", scrollOneHeight);
    acceptBtnStorageWarningBtn.addEventListener("click", closeAlertStorageModal);
    legalAccept.addEventListener("click", closeLegalModal);
    menuSocialBtn.addEventListener("click", socialMenuBtnActions);
    closeBtnLegalModal.addEventListener("click", closeLegalModal);

    //^CLOSE BTN ALERT
    closeBtnAlertModal.addEventListener("click", () => {
        closeAlert(storageAlertModal);
    });

    //^BTN LEFT SLIDER
    sliderBtnLeftServices.addEventListener("click", () => {
        const sliderWidth = sliderWindowContainerServices.getBoundingClientRect().width;
        //*console.log(slidersServicesCount);
        const sliderWidthFull = sliderWidth / slidersServicesCount;
        if (sliderFullCountServices === 0) {
            sliderFullCountServices = sliderWidth - sliderWidthFull;
            sliderWindowContainerServices.style.transform = `translateX(-${sliderFullCountServices}px)`;
        } else {
            sliderFullCountServices -= sliderWidthFull;
            sliderWindowContainerServices.style.transform = `translateX(-${sliderFullCountServices}px)`;
        }
    });

    //^BTN RIGHT SLIDER
    sliderBtnRightServices.addEventListener("click", () => {
        const sliderWidth = sliderWindowContainerServices.getBoundingClientRect().width;
        //*console.log(slidersServicesCount);
        const sliderWidthFull = sliderWidth / slidersServicesCount;
        sliderFullCountServices += sliderWidthFull;
        if (sliderFullCountServices === sliderWidth) {
            sliderWindowContainerServices.style.transform = `translateX(0)`;
            sliderFullCountServices = 0;
        } else {
            sliderWindowContainerServices.style.transform = `translateX(-${sliderFullCountServices}px)`;
        }
    });

    //^ CHANGE THEME BTN && --/CHANGE THE THEME PAGE BY THE MENU BTN
    btnsTheme.forEach((btn) => {
        const changeThemeBtn = () => {
            if (body.className === "light_theme") {
                body.className = "dark_theme";
                btnThemeNav.innerHTML = sunIcon;
                btnThemeMenu.innerHTML = sunIcon;
            } else if (body.className === "dark_theme") {
                body.className = "light_theme";
                btnThemeNav.innerHTML = moonIcon;
                btnThemeMenu.innerHTML = moonIcon;
            }
        };
        btn.addEventListener("click", changeThemeBtn);
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
        btn.addEventListener("click", openContactModal);
    });

    //^ SEND FORM
    sendBtnFormModal.addEventListener("click", (e) => {
        e.preventDefault();
    });

    //^LEGAL BTNS
    legalBtns.forEach((btn) => {
        const openLegalModal = () => {
            if (alertStorageModalStatus === open) {
                openModal(legalModal);
                closeAlert(storageAlertModal);
                alertStorageModalStatus = close;
                legalModalStatus = open;
            } else if (alertStorageModalStatus === close) {
                openModal(legalModal);
                closeAlert(storageAlertModal);
                legalModalStatus = open;
            }
        };
        btn.addEventListener("click", openLegalModal);
    });

    /* const checkMark = () => {
        const checkBtn = document.querySelector('.complete-button');

        const lessonBtn = document.querySelector('.lesson-button-group__item');
        checkBtn.click();
        setTimeout(() => {
            lessonBtn.click();
        }, 2000);
    };
    checkMark(); */
});
