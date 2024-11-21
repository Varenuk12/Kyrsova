
        const ctxBar = document.getElementById('achievementBarChart').getContext('2d');
        const achievementBarChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['2020', '2021', '2022', '2023'], 
                datasets: [{
                    label: 'Медалі на міжнародних змаганнях',
                    data: [15, 20, 25, 30], 
                    backgroundColor: '#4caf50', 
                    borderColor: '#388e3c',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctxDoughnut = document.getElementById('achievementCircle').getContext('2d');
        const achievementCircleChart = new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Золото', 'Срібло', 'Бронза'],  
                datasets: [{
                    data: [10, 15, 5],  
                    backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32'],  
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });

        const ctxRadar = document.getElementById('achievementRadar').getContext('2d');
        const achievementRadarChart = new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['Футбол', 'Баскетбол', 'Легка атлетика', 'Плавання', 'Гімнастика'], 
                datasets: [{
                    label: 'Продуктивність спортсменів',
                    data: [85, 70, 90, 80, 75],  
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',  
                    borderColor: '#4caf50', 
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        grid: {
                            display: true 
                        },
                        ticks: {
                            display: false 
                        }
                    }
                }
            }
        });
            function openModal(img) {
                var modal = document.getElementById("photoModal");
                var modalImg = document.getElementById("modalImage");

                modal.style.display = "flex";
                modalImg.src = img.src;
            }


            function closeModal() {
                var modal = document.getElementById("photoModal");
                modal.style.display = "none";
            }
         
                window.onclick = function (event) {
                    var modal = document.getElementById("photoModal");
                    if (event.target == modal) {
                        closeModal();
                    }
                }
                let currentImageIndex = 0;
                    const galleryImages = [
                        "../img/competition/1.jpg",
                        "../img/competition/2.jpg",
                        "../img/competition/3.jpg",
                        "../img/competition/4.webp",
                        "../img/competition/5.jpg",
                        "../img/competition/6.jpeg",
                    ];

                    function openModal(img) {
                        currentImageIndex = galleryImages.indexOf(img.src); 
                        const modal = document.getElementById("photoModal");
                        const modalImg = document.getElementById("modalImage");

                        modal.style.display = "flex";
                        modalImg.src = img.src;
                    }

                    function closeModal() {
                        const modal = document.getElementById("photoModal");
                        modal.style.display = "none";
                    }

                    function changeImage(direction) {
                        currentImageIndex += direction;

                        if (currentImageIndex < 0) {
                            currentImageIndex = galleryImages.length - 1; 
                        } else if (currentImageIndex >= galleryImages.length) {
                            currentImageIndex = 0; 
                        }

                        const modalImg = document.getElementById("modalImage");
                        modalImg.src = galleryImages[currentImageIndex];
                    }

    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const options = {
            root: null, 
            threshold: 0.5, 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const step = target / 100;

                    let count = 0;
                    const updateCounter = () => {
                        if (count < target) {
                            count += step;
                            counter.textContent = Math.ceil(count);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target; 
                        }
                    };

                    updateCounter();
                    observer.unobserve(counter); 
                }
            });
        }, options);

        counters.forEach((counter) => observer.observe(counter));
    }

    document.addEventListener('DOMContentLoaded', animateCounters);
    document.addEventListener('DOMContentLoaded', function () {
        const ambitionsArray = [
            "Громадські спортивні програми для дітей та молоді",
            "Ініціативи для розвитку національних спортивних федерацій",
            "Підтримка спортсменів у підготовці до міжнародних змагань",
            "Організація тренувальних таборів для професійних команд",
            "Програми реабілітації та фізичної підготовки для ветеранів",
            "Стипендії для талановитих спортсменів",
            "Розробка інфраструктурних проєктів для розвитку спортивних комплексів",
            "Проведення освітніх семінарів і тренінгів для тренерів та інструкторів",
            "Популяризація здорового способу життя через загальнонаціональні ініціативи",
            "Співпраця з міжнародними спортивними організаціями"
        ];

        const ambitionsList = document.getElementById('ambitions-list');

        ambitionsArray.forEach(function (ambition) {
            const listItem = document.createElement('li');
            listItem.textContent = ambition;
            ambitionsList.appendChild(listItem);
        });
    });
