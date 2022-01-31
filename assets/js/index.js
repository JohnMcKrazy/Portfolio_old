document.addEventListener('DOMContentLoaded', () => {
    //!GENERAL CONSTANTS --START
    const fragmentProjects = document.createDocumentFragment();

    const cardProjectTemplate = document.querySelector('#card_project_template').content;
    const btnProjectTemplate = document.querySelector('#btn_project_template').content;
    const tooltipTemplate = document.querySelector('#tooltip_template').content;

    const body = document.querySelector('BODY');
    const nav = document.querySelector('.nav');
    const btnLogo = document.querySelector('#logo_nav_btn');
    const btnThemeMenu = document.querySelector('#change_theme_btn_menu');
    const btnThemeNav = document.querySelector('#change_theme_btn_nav');
    const btnsTheme = document.querySelectorAll('.btn_theme');
    const menuContainer = document.querySelector('#menu_container');
    const closeMenuBtn = document.querySelector('#nav_menu_close_btn');
    const btnsMenu = document.querySelectorAll('.btn_menu');
    const btnsNav = document.querySelectorAll('.btn_nav');
    const btnsSection = document.querySelectorAll('.btn_section');
    const formEnviarBtn = document.querySelector('#contact_form_send_btn');
    const btnContact = document.querySelectorAll('.contact_btn');
    const storageAlertModal = document.querySelector('#storage_alert_modal');
    const acceptStorageWarningBtn = document.querySelector('#storage_alert_modal_accept_btn');
    const contactModal = document.querySelector('#contact_modal');
    const closeModalContactForm = document.querySelector('#modal_form_close_btn');
    const btnHeroDown = document.querySelector('#hero_btn_down');
    const btnsHero = document.querySelectorAll('.btn_hero');
    const sections = document.querySelectorAll('.section');
    const btnMenuContainer = document.querySelector('#btn_menu_container');
    const btnsNavContainer = document.querySelector('#nav_sections_btns_container');
    const portfolioHotCardsContainer = document.querySelector('#portfolio_hot_cards_container');
    const htmlLebel = document.documentElement;
    const loader = document.querySelector('.loader');
    const openMenuSound = document.querySelector('#menu_open_sound');
    const menuSocialContainer = document.querySelector('#menu_social_container');
    const btnsMenuSocial = document.querySelectorAll('.social_btn');
    const menuSocialBtn = document.querySelector('#contact_menu_btn');
    const menuSocialBtnsContainer = document.querySelector('.menu_social_btns_container');
    const swipeAnimationContainersFull = document.querySelectorAll('.swipe_animation_container_full');
    const swipeAnimationContainersHalf = document.querySelectorAll('.swipe_animation_container_half');

    const skillsContainer = document.querySelector('.skills_containers');
    const lebelBtnMain = document.querySelector('#main_btn_nav');
    const lebelBtnAbout = document.querySelector('#about_btn_nav');
    const lebelBtnSkills = document.querySelector('#skills_btn_nav');
    const lebelBtnServices = document.querySelector('#services_btn_nav');
    const lebelBtnPortfolio = document.querySelector('#portfolio_btn_nav');
    const lebelBtnClient = document.querySelector('#clients_btn_nav');
    const heroBtnsContainer = document.querySelector('#hero_btns_container');

    const servicesContainer = document.querySelector('#services_container_id');
    const serviceContainer = document.querySelectorAll('.service_container');
    const serviceCardsLeft = document.querySelectorAll('.service_card_left');
    const serviceCardsRight = document.querySelectorAll('.service_card_right');

    const flagBtns = document.querySelectorAll('.flag_project_btn');

    const legalBtns = document.querySelectorAll('.btn_link_legal');
    const modalInfoLegal = document.querySelector('#modal_info_legal');
    const legalModal = document.querySelector('#legal_modal');
    const legalAccept = document.querySelector('#legal_modal_accept_btn');
    //^FETCH JASON COMPANYS DATA-- START
    const portfolioData = './portfolioDB.json';
    //^FETCH JSON COMPANYS DATA-- OVER
    //^ ***********************************************************************************************//
    //!GENERAL CONSTANTS --OVER
    //! ***********************************************************************************************//
    //!GENERAL VARIANTS--START
    const sunIcon =
        '<svg class="theme_icon_svg" id="sun_icon_svg"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Tema día</title><path class="cls-1" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/></svg>';
    const moonIcon =
        '<svg class="theme_icon_svg" id="moon_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Tema noche</title><path class="cls-1" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/></svg>';
    let menuStatus = 'close';
    let menuSocialStatus = 'close';
    let contactModalStatus = 'close';
    let alertStorageModalStatus = 'open';
    //! ************************************************************************************************************ *//

    //! SEARCH LOCAL STORAGE--START
    const localStorageName = 'JohnK_page_storage';
    let storageForJohnKPage = {
        page_view_count: 1,
        page_alert_status: 'open',
    };
    //! SEARCH LOCAL STORAGE--OVER
    //! ************************************************************************************************************ *//
    //!OBJECTS--START

    const infoSoftware = [
        {
            tech_name: 'Illustrator',
            tech_complete_name: 'Adobe Illustrator',
            tech_info:
                'Editor de gráficos vectoriales en forma de taller de arte que trabaja sobre un tablero de dibujo, conocido como «mesa de trabajo» y está destinado a la creación artística de dibujo y pintura para ilustración, para crear y diseñar imágenes, sirve para editar entre otras cosas.',
        },
        {
            tech_name: 'Photoshop',
            tech_complete_name: 'Adobe Photoshop',
            tech_info:
                'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa "taller de fotos".',
        },
    ];
    //!OBJECTS--OVER
    //&PRUEBAS
    const addTooltip = (parent, itemData) => {
        //^^ADD OBJECT WITH TOOLTIPS INFO--OVER
        //^^ ************************************************************************************* *//

        const cloneTooltip = tooltipTemplate.cloneNode(true);
        const tooltip = cloneTooltip.querySelector('.tooltip');
        const tooltipTitle = cloneTooltip.querySelector('.tooltip_title');
        const tooltipInfo = cloneTooltip.querySelector('.tooltip_info');
        infoSoftware.forEach((infoItem) => {
            const techName = infoItem['tech_name'];
            const techCompleteName = infoItem['tech_complete_name'];
            const techInfo = infoItem['tech_info'];
            if (itemData === techName) {
                tooltipTitle.textContent = techCompleteName;
                tooltipInfo.textContent = techInfo;
            }
        });
        parent.appendChild(tooltip);
        setTimeout(() => {
            animateItem(tooltip, '1', 'translateY(0)');
        }, 100);
    };
    const delateTooltip = (parent) => {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach((tooltip) => {
            if (parent.hasChildNodes()) {
                animateItem(tooltip, '0', 'var(--translateUp)');
                parent.removeChild(tooltip);
            }
        });
    };
    //&PRUEBAS
    //& ***************************************************************************************** *//
    //! ************************************************************************************************** *//
    //!GENERAL VARIANTS--OVER
    //! ***********************************************************************************************//
    //!GENERAL START FUNCTIONS-- START
    //^CHANGE THEME BY HOUR-- START
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
    //^CHANGE THEME BY HOUR-- OVER
    //^ ***********************************************************************************************//
    //^^ADD OBJECT WITH TOOLTIPS INFO--START

    //!MUTATION OBSERVER --START
    const watchChanges = (entries) => {
        const newNodes = entries[0]['addedNodes'];
        newNodes.forEach((node) => {
            const eachItem = node['children'][0]['children'][0]['childNodes'];
            eachItem.forEach((item) => {
                if (item['outerHTML']) {
                    const classNames = item.classList;
                    classNames.forEach((name) => {
                        if (name === 'btns_flag_project_container') {
                            const currentItemsChildren = item['childNodes'];
                            currentItemsChildren.forEach((item) => {
                                const currentItemClassName = item.className;
                                if (currentItemClassName === 'btn flag_project_btn') {
                                    const itemData = item['childNodes'][0].data;
                                    const addTooltipProjectCard = () => {
                                        //^^ADD OBJECT WITH TOOLTIPS INFO--OVER
                                        //^^ ************************************************************************************* * //

                                        const cloneTooltip = tooltipTemplate.cloneNode(true);
                                        const tooltip = cloneTooltip.querySelector('.tooltip');
                                        const tooltipTitle = cloneTooltip.querySelector('.tooltip_title');
                                        const tooltipInfo = cloneTooltip.querySelector('.tooltip_info');

                                        infoSoftware.forEach((infoItem) => {
                                            const techName = infoItem['tech_name'];
                                            const techCompleteName = infoItem['tech_complete_name'];
                                            const techInfo = infoItem['tech_info'];
                                            if (itemData === techName) {
                                                tooltipTitle.textContent = techCompleteName;
                                                tooltipInfo.textContent = techInfo;
                                            }
                                        });

                                        item.appendChild(tooltip);
                                        setTimeout(() => {
                                            tooltip.classList.remove('tooltip_hidden');
                                        }, 100);
                                    };
                                    item.addEventListener('mouseenter', addTooltipProjectCard);
                                    const delateTooltipProjectCard = () => {
                                        const tooltips = document.querySelectorAll('.tooltip');

                                        tooltips.forEach((tooltip) => {
                                            if (item.hasChildNodes()) {
                                                tooltip.classList.add('tooltip_hidden');
                                                item.removeChild(tooltip);
                                            }
                                        });
                                    };

                                    item.addEventListener('mouseleave', delateTooltipProjectCard);
                                }
                            });
                        }
                    });
                }
            });
        });
    };
    const changeObserver = new MutationObserver(watchChanges);
    changeObserver.observe(portfolioHotCardsContainer, { childList: true });

    //!MUTATION OBSERVER --OVER
    //! ************************************************************************************************** *//
    //!SESSION STORAGE--START

    //!SESSION STORAGE--OVER
    //! ******************************************************************************** /** */
    //^^BASICK FUNCTION ANIMATION-- START
    const animateItem = (container, opacity, transform) => {
        container.style.opacity = opacity;
        container.style.transform = transform;
    };

    //^^BASICK FUNCTION ANIMATION-- OVER
    //^ ************************************************************************* *//

    //^ CREATE TEMPLATE PROJECT CARD --START
    const createProjectCard = async () => {
        try {
            const rawData = await fetch(portfolioData);
            const data = await rawData.json();
            const dataLength = data.length;

            data.forEach((item) => {
                const cloneProjectCard = cardProjectTemplate.cloneNode(true);
                const projectCard = cloneProjectCard.querySelector('.project_card');
                const fieldsetCard = cloneProjectCard.querySelector('.btns_flag_project_container');
                const cardTitle = cloneProjectCard.querySelector('.title');
                //* ******************************************************************************** *//

                const clientName = item['client_name'];

                const bdName = item['db_name'];
                projectCard.setAttribute('id', `${bdName}_project_card`);
                const cardImg = item['projects']['images']['hero']['small'];
                projectCard.style.backgroundImage = `url("${cardImg}")`;
                const clientTechnologiesInProjects = item['projects'].technologies;
                clientTechnologiesInProjects.forEach((project) => {
                    const cloneBtn = btnProjectTemplate.cloneNode(true);
                    const flagBtn = cloneBtn.querySelector('.flag_project_btn');
                    flagBtn.textContent = project;
                    fieldsetCard.appendChild(flagBtn);
                });
                cardTitle.textContent = clientName;
                fragmentProjects.appendChild(projectCard);
            });
            portfolioHotCardsContainer.appendChild(fragmentProjects);
            const projectCards = document.querySelectorAll('.project_card');
            projectCards.forEach((card) => {
                setTimeout(() => {
                    animateItem(card, '1', 'translateY(0)');
                }, 500);
            });
        } catch (error) {
            console.log(error);
        }
    };
    const spinnersLoadersContainers = document.querySelectorAll('.spinner_container');
    spinnersLoadersContainers.forEach((spinnerLoader) => {
        const watchPortfolioContainer = ([entry]) => {
            const dataNameContainer = entry.target.attributes['data-name'].value;
            if (entry.isIntersecting && dataNameContainer === 'portfolio_hot_cards_container') {
                const loaderPortfolio = document.querySelector('#loader_portfolio');
                animateItem(loaderPortfolio, '0', 'translateY(-50%)');
                portfolioObserver.unobserve(loaderPortfolio);
                setTimeout(() => {
                    createProjectCard();
                    loaderPortfolio.style.display = 'none';
                }, 1500);
            }
        };
        const optionsIO_portfolio = {
            threshold: '.7',
        };
        const portfolioObserver = new IntersectionObserver(watchPortfolioContainer, optionsIO_portfolio);
        portfolioObserver.observe(spinnerLoader);
    });

    //^ CREATE TEMPLATE PROJECT CARD --OVER
    //^ ************************************************************************* *//
    //^ CLOSE MENU SOCIAL-- START
    const closeMenuSocial = () => {
        menuSocialBtnsContainer.style.opacity = 0;
        menuSocialStatus = 'close';
    };
    //^ CLOSE MENU SOCIAL-- OVER
    //^ ***************************************************************************** *//
    //^ ACTIONS BTN MENU SOCIAL--START
    const socialMenuBtnActions = () => {
        if (menuSocialStatus === 'close') {
            menuSocialBtnsContainer.style.opacity = 1;
            menuSocialStatus = 'open';
        } else if (menuSocialStatus === 'open') {
            closeMenuSocial();
        }
    };
    //^ ACTIONS BTN MENU SOCIAL--OVER
    //^ ***************************************************************************** *//
    //^SOCIAL MENU CLOSE EN BODY CLICK--START
    const closeByBodyClick = (e) => {
        if (menuSocialStatus === 'open' && e.target.id !== 'contact_menu_btn') {
            closeMenuSocial();
        }
    };
    //^SOCIAL MENU CLOSE EN BODY CLICK--OVER
    //^^ ******************************************************************************* *//

    //^ OPEN MENU-- START
    const btnNavMenu = () => {
        if (menuStatus === 'close') {
            menuStatus = 'open';
            menuContainer.style.opacity = '1';
            menuContainer.style.transform = 'translateY(0)';
            //*openMenuSound.play();
        } else if (menuStatus === 'open') {
            closeMenu();
        }
    };
    //^ OPEN MENU-- OVER
    //^  **************************************************************/
    //^ CLOSE MENU--START
    const closeMenu = () => {
        let menuTop = menuContainer.style.top;

        if (menuTop === '0px' || menuTop === 0 || menuTop === '') {
            menuStatus = 'close';
            menuContainer.style.transform = 'translateY(-100%)';
            menuContainer.style.opacity = '0';
        } else if (menuTop === 'inherit') {
            menuStatus = 'close';
            menuContainer.style.transform = 'translateY(100%)';
            menuContainer.style.opacity = '0';
        }
    };
    //^ CLOSE MENU--OVER
    //^  **************************************************************/
    //~GENERAL MODAL ACTIONS--START
    const openModal = (cont) => {
        cont.style.display = 'flex';
        setTimeout(() => {
            animateItem(cont, '1', 'translate(-50%, 0)');
        }, 500);
    };
    const closeModal = (cont) => {
        animateItem(cont, '0', 'translate(-50%, -50%)');
        setTimeout(() => {
            cont.style.display = 'none';
        }, 1200);
    };
    //~GENERAL MODAL ACTIONS--OVER
    //~ ******************************************************************************* *//
    //^ OPEN CONTACT MODAL-- START
    const openContactModal = () => {
        if (contactModalStatus === 'close') {
            openModal(contactModal);
            contactModalStatus = 'open';
        }
    };
    //^ OPEN CONTACT MODAL-- OVER
    //^ ******************************************************************** *//
    //^ CLOSE MODAL CONTACT FORM-- START
    const closeContactModal = () => {
        if (contactModalStatus === 'open') {
            closeModal(contactModal);
            contactModalStatus = 'close';
        }
    };
    //^ CLOSE MODAL CONTACT FORM-- OVER
    //^ ************************************************************************ *//
    //^^STORAGE WARNING CLOSE--START
    const checkAlertStorageAnswer = () => {
        let storageContent = JSON.parse(localStorage.getItem(localStorageName));
        if (!storageContent) {
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            console.log('local storage item is created');
            setTimeout(() => {
                animateItem(storageAlertModal, '1', 'translate(-50%, 0)');
            }, 2000);
        } else if (storageContent && storageContent['page_alert_status'] === 'open') {
            storageForJohnKPage['page_view_count'] = storageContent['page_view_count'] + 1;
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            console.log(`local storage item answer= ${storageContent['page_alert_status']}, page views= ${storageContent['page_view_count']}`);
            setTimeout(() => {
                animateItem(storageAlertModal, '1', 'translate(-50%, 0)');
            }, 2000);
        } else if (storageContent && storageContent['page_alert_status'] === 'close') {
            storageForJohnKPage['page_alert_status'] = 'close';
            storageForJohnKPage['page_view_count'] = storageContent['page_view_count'] + 1;
            console.log(storageForJohnKPage);
            localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
            storageAlertModal.style.display = 'none';
            console.log(`local storage item answer= ${storageContent['page_alert_status']}, page views= ${storageContent['page_view_count']}`);
        }
    };
    checkAlertStorageAnswer();
    const closeAlertStorageModal = () => {
        storageForJohnKPage['page_alert_status'] = 'close';
        closeModal(storageAlertModal);
        localStorage.setItem(localStorageName, JSON.stringify(storageForJohnKPage));
        console.log(localStorage.getItem(localStorageName));
    };
    //^^STORAGE WARNING CLOSE--OVER
    //^^ *********************************************************************************** *//
    //^^LEAGL MODAL CLOSE--START
    const closeLegalModal = () => {
        const currentPosition = modalInfoLegal.getBoundingClientRect().top;
        modalInfoLegal.scrollTo(currentPosition, 0);
        setTimeout(() => {
            closeModal(legalModal);
        }, 500);
    };
    //^^LEAGL MODAL CLOSE--OVER
    //^^ *********************************************************************************** *//
    //^TO THE TOP-- START && **/RETURN THE PAGE TO THE PAGE TOP
    const toTheTop = () => {
        const currentPosition = body.getBoundingClientRect().top;
        window.scrollTo(currentPosition, 0);
    };
    //^ TO THE TOP-- OVER
    //^ ************************************************************************* *//
    //^SCROLL T0-- START
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
    //^SCROLL T0-- OVER
    //^ ************************************************************************** *//
    //^ CHECK MENU POSITION WINDOW-- START && **/SCALE THE NAVBAR AND CHANGE THE MENU POSITION BY THE PAGE POSITION
    //&CONFIGURATION SIZE SCREEN--START ->//THIS FUNCTION BRING ALL THE CONTAINERS CARACTERISTICTS BY THE SIZE OF THE WINDOW
    const configSize = (widConf) => {
        //~~SET CARD CHANGES--START -> // CHANGE FLEX DIRECTIION AND HEIGHT OF CARD
        const changeCardStyle = (container, fd, he) => {
            container.style.flexDirection = fd;
            container.style.height = he;
        };
        //~~SET CARD CHANGES--OVER
        //~~ ************************************************************************************************** *//
        const firstBreak = 1300;
        const secondBreak = 950;
        if (widConf > firstBreak) {
            lebelBtnMain.innerHTML = '<h3 class="btn_lebel">Inicio</h3>';
            lebelBtnAbout.innerHTML = '<h3 class="btn_lebel">Acerca de</h3>';
            lebelBtnSkills.innerHTML = '<h3 class="btn_lebel">Habilidades</h3>';
            lebelBtnServices.innerHTML = '<h3 class="btn_lebel">Servicios</h3>';
            lebelBtnPortfolio.innerHTML = '<h3 class="btn_lebel">Portafolio</h3>';
            lebelBtnClient.innerHTML = '<h3 class="btn_lebel">Clientes</h3>';
            servicesContainer.classList.add('services_container_one_columns');
            servicesContainer.classList.remove('services_container_two_columns');
            serviceContainer.forEach((container) => {
                container.style.width = '100%';
                serviceCardsLeft.forEach((card) => {
                    changeCardStyle(card, 'row', '30rem');
                });
                serviceCardsRight.forEach((card) => {
                    changeCardStyle(card, 'row-reverse', '30rem');
                });
            });
        } else if (widConf > secondBreak || (widConf < firstBreak && widConf > secondBreak)) {
            lebelBtnMain.innerHTML =
                '<svg class="nav_menu_icon_svg" id="home_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Inicio</title><path class="cls-1" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z"/></svg>';
            lebelBtnAbout.innerHTML =
                '<svg class="nav_menu_icon_svg" id="about_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Acerca de</title><path class="cls-1" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>';
            lebelBtnSkills.innerHTML =
                '<svg class="nav_menu_icon_svg" id="skills_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Habilidades</title><path class="cls-1" d="M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zm0 5.207l-.739 1.777-1.916.153 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.459-1.252-1.915-.153L12 13.707zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"/></svg>';
            lebelBtnServices.innerHTML =
                '<svg class="nav_menu_icon_svg" id="services_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Servicios</title><path class="cls-1" d="M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"/></svg>';
            lebelBtnPortfolio.innerHTML =
                '<svg class="nav_menu_icon_svg" id="portfolio_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Portafolio</title><path class="cls-1" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm10 2v5h3V7h-3zm-2 0H9v5h6V7zM7 7H4v5h3V7zm2-4v2h6V3H9z"/></svg>';
            lebelBtnClient.innerHTML =
                '<svg class="nav_menu_icon_svg" id="clients_icon_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><title>Clientes</title><path class="cls-1" d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z"/></svg>';
            btnMenuContainer.style.display = 'none';
            btnsNavContainer.style.display = 'flex';
            menuSocialContainer.style.display = 'flex';
            skillsContainer.style.flexDirection = 'row';
            skillsContainer.style.justifyContent = 'center';
            skillsContainer.style.alignItems = 'flex-start';
            heroBtnsContainer.style.flexDirection = 'row';
            servicesContainer.classList.add('services_container_two_columns');
            servicesContainer.classList.remove('services_container_one_columns');
            serviceContainer.forEach((container) => {
                container.style.width = '280px';
                container.style.height = 'auto';
                serviceCardsLeft.forEach((card) => {
                    changeCardStyle(card, 'column', 'auto');
                });
                serviceCardsRight.forEach((card) => {
                    changeCardStyle(card, 'column', 'auto');
                });
            });

            closeMenu();
        } else if (widConf <= secondBreak) {
            btnsNavContainer.style.display = 'none';
            btnMenuContainer.style.display = 'flex';
            menuSocialContainer.style.display = 'none';
            skillsContainer.style.flexDirection = 'column';
            skillsContainer.style.justifyContent = 'flex-start';
            skillsContainer.style.alignItems = 'center';
            heroBtnsContainer.style.flexDirection = 'column';
            servicesContainer.classList.add('services_container_two_columns');
            servicesContainer.classList.remove('services_container_one_columns');
            serviceContainer.forEach((container) => {
                container.style.width = '280px';
                container.style.height = 'auto';
                serviceCardsLeft.forEach((card) => {
                    changeCardStyle(card, 'column', 'auto');
                });
                serviceCardsRight.forEach((card) => {
                    changeCardStyle(card, 'column', 'auto');
                });
            });
            closeMenuSocial();
        }
    };
    //&CONFIGURATION SIZE SCREEN--OVER
    //& ********** *********************************************************************************************//
    const checkWindowWidth = () => {
        const windowWidth = window.innerWidth;
        configSize(windowWidth);
    };
    checkWindowWidth();
    const checkWindowHeight = () => {
        const navTop = nav.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 2;
        let borderRadius = '1rem';
        if (navTop >= windowHeight) {
            nav.style.height = '10rem';

            menuSocialContainer.style.bottom = 'inherit';
            menuSocialContainer.style.top = '2rem';
            menuSocialContainer.style.flexDirection = 'column';
            btnLogo.style.width = '7rem';
            closeMenu();
            closeMenuSocial();
            setTimeout(() => {
                menuContainer.style.top = 0;
                menuContainer.style.bottom = 'inherit';
                menuContainer.style.flexDirection = 'column';
                menuContainer.style.borderRadius = `0 0 ${borderRadius} ${borderRadius}`;

                if (menuStatus === 'close') {
                    menuContainer.style.transform = 'translateY(-100%)';
                }
            }, 500);
        } else if (navTop < windowHeight) {
            nav.style.height = '6rem';
            menuSocialContainer.style.top = 'inherit';
            menuSocialContainer.style.bottom = '2rem';
            menuSocialContainer.style.flexDirection = 'column-reverse';
            btnLogo.style.width = '5rem';

            closeMenu();
            closeMenuSocial();
            setTimeout(() => {
                menuContainer.style.top = 'inherit';
                menuContainer.style.bottom = 0;
                menuContainer.style.flexDirection = 'column-reverse';
                menuContainer.style.borderRadius = `${borderRadius} ${borderRadius} 0 0`;
                if (menuStatus === 'close') {
                    menuContainer.style.transform = 'translateY(100%)';
                }
            }, 500);
        }
    };
    checkWindowHeight();
    //^ CHECK MENU POSITION WINDOW-- OVER
    //^ *********************************************************************** *//
    //^ SCROLL NAV-- START && --/USE SCROLL FUNCTION TO CHECK THE POSITION OF THE PAGE
    const scrollBody = () => {
        checkWindowHeight();
    };
    //^ SCROLL NAV-- OVER
    //^  *******************************************************************/
    //^SCROLL HEIGHT --START && --/SCROLL TO FIRST PART OF PAGE (NO HERO)
    const scrollOneHeight = () => {
        const windowHeight = window.innerHeight;
        const navHeight = nav.getBoundingClientRect().height;
        const fixHeight = windowHeight - navHeight;
        window.scrollTo(0, windowHeight);
    };
    //^SCROLL HEIGHT --OVER
    //^ ***************************************************************************** *// //^
    //!GENERAL START FUNCTIONS-- OVER
    //! ***********************************************************************************************//
    //!FUNCTIONS --START
    //^CHECK MENU SECTION POSITION-- START && **/HIGHLIGHT IN THE MENU THE SECTION TARGET
    sections.forEach((section) => {
        const watchPage = ([entry]) => {
            if (entry.isIntersecting) {
                const entryName = entry.target.attributes.id.value;
                btnsSection.forEach((btn) => {
                    const btnName = btn.name;
                    if (btnName === entryName) {
                        btn.classList.add('btn_section_active');
                    } else {
                        btn.classList.remove('btn_section_active');
                    }
                });
            }
        };
        const optionsIO_sections = {
            threshold: 0.6,
        };
        const pageObserver = new IntersectionObserver(watchPage, optionsIO_sections);
        pageObserver.observe(section);
    });
    //^CHECK MENU SECTION POSITION-- OVER
    //^ ************************************************************************* *//
    //^^ANIMATION ITEM SWIPE--START
    const swipingAnimation = () => {
        swipeAnimationContainersFull.forEach((container) => {
            const watchSwipeAnimationContainer = ([entry]) => {
                const animationLeftContainers = entry.target.querySelectorAll('.animation_left');
                const animationRightContainers = entry.target.querySelectorAll('.animation_right');
                const animationUpContainers = entry.target.querySelectorAll('.animation_up');
                if (entry.isIntersecting) {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '1', 'translateX(0)');
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '1', 'translateX(0)');
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '1', 'translateY(0)');
                    });
                } else {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '0', 'translateX(-50%)');
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '0', 'translateX(50%)');
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '0', 'translateY(50%)');
                    });
                }
            };
            const optionsIO_skills = {
                threshold: '1',
            };

            const skillsContainersObserver = new IntersectionObserver(watchSwipeAnimationContainer, optionsIO_skills);
            skillsContainersObserver.observe(container);
        });

        swipeAnimationContainersHalf.forEach((container) => {
            const watchSwipeAnimationContainer = ([entry]) => {
                const animationLeftContainers = entry.target.querySelectorAll('.animation_left');
                const animationRightContainers = entry.target.querySelectorAll('.animation_right');
                const animationUpContainers = entry.target.querySelectorAll('.animation_up');
                if (entry.isIntersecting) {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '1', 'translateX(0)');
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '1', 'translateX(0)');
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '1', 'translateY(0)');
                    });
                } else {
                    animationLeftContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '0', 'translateX(-50%)');
                    });
                    animationRightContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '0', 'translateX(50%)');
                    });
                    animationUpContainers.forEach((container) => {
                        const currentItem = document.querySelector(`#${container.id}`);
                        animateItem(currentItem, '0', 'translateY(50%)');
                    });
                }
            };
            const optionsIO_skills = {
                threshold: '.4',
            };

            const skillsContainersObserver = new IntersectionObserver(watchSwipeAnimationContainer, optionsIO_skills);
            skillsContainersObserver.observe(container);
        });
    };
    swipingAnimation();
    //^^ANIMATION ITEM SWIPE--OVER
    //^^ *************************************************************************** *//
    //^ NAV RESIZE OBSERVER PARA MENU RESPONSIVE-- START --/CHANGE MENU NAV BY SCREEN SIZE
    const watchNavResize = ([entry]) => {
        const navWidth = entry.contentRect.width;
        configSize(navWidth);
    };
    const navResizeObserve = new ResizeObserver(watchNavResize);
    navResizeObserve.observe(nav);
    //^ NAV RESIZE OBSERVER PARA MENU RESPONSIVE-- OVER
    //^ ***********************************************************************************  *//
    //&CHANGE LANG BY CLICK--START
    const changeLang = (lang) => {
        document.documentElement.setAttribute('lang', lang);
    };
    //&CHANGE LANG BY CLICK --OVER
    //& ***********************************************************************************  *//
    //!FUNCTIONS --OVER
    //! ******************************************************************************//
    //! ADD EVENT LISTENERS
    window.addEventListener('scroll', scrollBody);
    body.addEventListener('click', closeByBodyClick);
    btnLogo.addEventListener('click', toTheTop);
    btnMenuContainer.addEventListener('click', btnNavMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    closeModalContactForm.addEventListener('click', closeContactModal);
    btnHeroDown.addEventListener('click', scrollOneHeight);
    acceptStorageWarningBtn.addEventListener('click', closeAlertStorageModal);
    legalAccept.addEventListener('click', closeLegalModal);
    menuSocialBtn.addEventListener('click', socialMenuBtnActions);
    //^^LEGAL BTNS--START
    legalBtns.forEach((btn) => {
        const openLegalModal = () => {
            if (alertStorageModalStatus === 'open') {
                closeModal(storageAlertModal);
                openModal(legalModal);
                alertStorageModalStatus = 'close';
            } else if (alertStorageModalStatus === 'close') {
                openModal(legalModal);
            }
        };
        btn.addEventListener('click', openLegalModal);
    });
    //^^LEGAL BTNS--OVER
    //^^ ************************************************************************** *//
    //^ BTNS HERO-- START && **/POSITION THE PAGE IN SECTIONS BY THE BTNS IN THE HERO SECTION
    btnsHero.forEach((btn) => {
        btn.addEventListener('click', () => {
            scrollToSection(btn);
        });
    });
    //^ BTNS HERO-- OVER
    //^ ************************************************************************* *//
    //^ CHANGE THEME BTN-- START && --/CHANGE THE THEME PAGE BY THE MENU BTN
    btnsTheme.forEach((btn) => {
        const changeThemeBtn = () => {
            if (body.className === 'light_theme') {
                body.className = 'dark_theme';
                btnThemeNav.innerHTML = sunIcon;
                btnThemeMenu.innerHTML = sunIcon;
            } else if (body.className === 'dark_theme') {
                body.className = 'light_theme';
                btnThemeNav.innerHTML = moonIcon;
                btnThemeMenu.innerHTML = moonIcon;
            }
        };
        btn.addEventListener('click', changeThemeBtn);
    });
    //^ CHANGE THEME BTN-- OVER
    btnsMenuSocial.forEach((btn) => {
        btn.addEventListener('click', closeMenuSocial);
    });
    //^ ********************************************************************/
    //^ CLOSE MENU BY BTN-- START && --/EVERYTIME A MENU BTN CLICK MENU CLOSE
    btnsMenu.forEach((btn) => {
        btn.addEventListener('click', closeMenu);
    });
    //^ CLOSE MENU BY BTNS-- OVER
    //^ *****************************************************************************//

    //^ BTNS SCROLLS TO SECTION--START
    btnsSection.forEach((btn) => {
        btn.addEventListener('click', () => {
            scrollToSection(btn);
        });
    });
    //^ BTNS SCROLLS TO SECTION--OVER
    //^ *****************************************************************************//
    //^^ CONTACT BTNS OPEN MODAL-- START
    btnContact.forEach((btn) => {
        btn.addEventListener('click', openContactModal);
    });
    //^^ CONTACT BTNS OPEN MODAL-- OVER
    //^^ ***************************************************************************** *//
    //! *************************************************************************/
    //^ SEND FORM-- START
    formEnviarBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });
    //^ SEND FORM-- OVER
    //^ ************************************************************************* *//

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
