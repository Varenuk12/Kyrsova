
const faqItems = [
    {
        question: "Які послуги надаєте для дітей?",
        answer: "Ми пропонуємо курси для дітей різного віку, включаючи тренування з плавання, аквааеробіку та командні види спорту."
    },
    {
        question: "Чи є можливість індивідуальних тренувань?",
        answer: "Так, ми надаємо індивідуальні та групові тренування для всіх рівнів підготовки."
    },
    {
        question: "Який тип реабілітації ви надаєте?",
        answer: "Ми надаємо професійні програми з фізіотерапії та спеціалізованих вправ для відновлення після травм."
    },
    {
        question: "Чи є можливість тренуватися онлайн?",
        answer: "Так, ми пропонуємо онлайн-заняття з фітнесу та інших видів спорту для тих, хто не може відвідувати наші тренування особисто."
    },
    {
        question: "Як записатися на тренування?",
        answer: "Для запису на тренування ви можете заповнити форму на нашому сайті або звернутися до нашого адміністратора."
    },
    {
        question: "Які години роботи вашого закладу?",
        answer: "Ми працюємо щодня з 8:00 до 20:00, включаючи вихідні дні."
    },
    {
        question: "Чи надаєте ви послуги для людей з обмеженими можливостями?",
        answer: "Так, ми пропонуємо спеціальні тренування для людей з обмеженими можливостями, включаючи фізіотерапію та адаптовані види спорту."
    },
    {
        question: "Як можна оплатити послуги?",
        answer: "Ми приймаємо оплату через банківські картки, онлайн-платежі та готівкою в нашому центрі."
    }
];

const generateFAQItems = () => {
    const accordionContainer = document.getElementById('faqAccordion');
    faqItems.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const button = document.createElement('button');
        button.classList.add('accordion-button');
        button.textContent = item.question;

        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.innerHTML = `<p>${item.answer}</p>`;

        accordionItem.appendChild(button);
        accordionItem.appendChild(content);

        accordionContainer.appendChild(accordionItem);
    });
};

generateFAQItems();

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;

        accordionItem.classList.toggle('open');

        const content = accordionItem.querySelector('.accordion-content');
        content.classList.toggle('show');
    });
});

const achievements = [
    "Участь у міжнародних змаганнях та численні перемоги наших спортсменів.",
    "Наші тренери мають високий рівень кваліфікації та міжнародні сертифікати.",
    "Багато клієнтів відзначили ефективність наших програм з реабілітації після травм.",
    "Організація щорічних місцевих та національних турнірів, які об'єднують сотні учасників.",
    "Впровадження інноваційних технологій для моніторингу прогресу спортсменів.",
    "Створення спеціалізованих програм для розвитку дитячого спорту та залучення молоді."
];

const generateAchievements = () => {
    const achievementsList = document.getElementById('achievementsList');
    
    achievements.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.classList.add('achievement');
        
        const achievementText = document.createElement('p');
        achievementText.textContent = achievement;
        
        achievementDiv.appendChild(achievementText);
        achievementsList.appendChild(achievementDiv);
    });
};

generateAchievements();

const testimonials = [
    {
        name: "Олександр Г.",
        text: `"Завдяки персоналізованому підходу тренера, я відновився після травми швидше, ніж очікував. Професіоналізм на найвищому рівні!"`,
        imgSrc: "../img/profile.png",
        alt: "Олександр Г."
    },
    {
        name: "Лідія В.",
        text: `"Програма реабілітації після операції була розроблена спеціально для мене. Я дуже вдячна за теплий підхід і професійні поради."`,
        imgSrc: "../img/profile.png",
        alt: "Лідія В."
    },
    {
        name: "Дмитро С.",
        text: `"Після тривалих тренувань моя витривалість зросла у кілька разів. Тут справжні професіонали, які дійсно дбають про результати."`,
        imgSrc: "../img/profile.png",
        alt: "Дмитро С."
    },
    {
        name: "Ірина К.",
        text: `"Моя дитина почала займатися в дитячій секції і тепер мріє стати професійним спортсменом. Чудовий колектив і тепла атмосфера."`,
        imgSrc: "../img/profile.png",
        alt: "Ірина К."
    }
];

const generateTestimonials = () => {
    const testimonialsList = document.getElementById('testimonialsList');
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('card', 'mb-4');
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex');
        
        const img = document.createElement('img');
        img.src = testimonial.imgSrc;
        img.alt = testimonial.alt;
        img.classList.add('avatar', 'img-fluid', 'rounded-circle');
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.style.marginRight = "15px";
        
        const textContainer = document.createElement('div');
        
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = testimonial.name;
        
        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = testimonial.text;
        
        textContainer.appendChild(title);
        textContainer.appendChild(text);
        
        cardBody.appendChild(img);
        cardBody.appendChild(textContainer);
        
        testimonialCard.appendChild(cardBody);
        
        testimonialsList.appendChild(testimonialCard);
    });
};

generateTestimonials();
