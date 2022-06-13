window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        // tabContent[i].style.display = 'block';
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    //const deadLine = new Date(new Date().getTime() + 10 * (24 * 60 * 60 * 1000));
    const deadLine = '2022-07-01';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            // hours = Math.floor((t - days * 1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            // minuts = Math.floor((t - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60) / (1000 * 60)),
            // seconds = Math.floor((t - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60 - minuts * 1000 * 60) / 1000);
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minuts = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };

        function setClock(selector, endTime) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds');
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                const t = getTimeRemaining(endTime);

                days.innerHTML = t.days;
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
        setClock('.timer', deadLine);
    });