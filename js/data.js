const data = {
    ru: {
        lang: "ru",
        label: "Выберите язык: ",
        title: "Третяк Сергей CV",
        content: "Шаблон CV для экспорта в PDF",
        alt: "фото Третяка Сергея",
        name: "Третяк Сергей Казимирович",
        jobTitle: "Веб-разработчик",
        jobRequirements: {
            jobRequirementsValue: "Требования к должности",
            employment: "занятость: ",
            employmentValue: "полная / частичная",
            schedule: "график работы: ",
            scheduleValue: "полный день / гибкий / удаленная работа",
            businessTrip: "готовность к командировкам: ",
            businessTripValue: "да",
            relocation: "готовность к переезду: ",
            relocationValue: "да"
        },
        personal: {
            personalValue: "Личная информация",
            city: "город проживания: ",
            cityValue: "Гродно, Беларусь",
            citizenship: "гражданство: ",
            citizenshipValue: "Беларусь",
            birthdate: "дата рождения: ",
            birthdateValue: "16.07.1988",
            sex: "пол: ",
            sexValue: "мужской",
            marital: "семейное положение: ",
            maritalValue: "холост",
            children: "дети: ",
            childrenValue: "нет"
        },
        experiences: {
            experiencesValue: "Опыт",
            experience: [{
                organization: "организация: ",
                organizationValue: "фрилансер",
                workPeriod: "период работы: ",
                since: "01.2016",
                for: "настоящее время",
                position: "должность: ",
                positionValue: "программист",
                jobDuties: "должностные обязанности: ",
                jobDuty: [
                    "Front-end разработка",
                    "Full-stack разработка",
                    "верстка сайтов",
                    "написание скриптов JavaScript",
                    "написание скриптов VBA"
                ],
                achievements: "достижения: ",
                achievement: [
                    "высокий рейтинг",
                    "хорошие отзывы",
                    "вхождение в список top-talents в первый год работы"
                ]
            }, {
                organization: "организация: ",
                organizationValue: "Гродненская региональная таможня",
                workPeriod: "период работы: ",
                since: "07.2011",
                for: "12.2015",
                position: "должность: ",
                positionValue: "инспектор",
                jobDuties: "должностные обязанности (релевантные): ",
                jobDuty: [
                    "написание скриптов VBA",
                    "написание SQL-запросов",
                ],
                achievements: "достижения: ",
                achievement: [
                    "автоматизировал рутинные задачи, многократно повысив cкорость выполнения однотипных задач",
                    "благодарности",
                    "премирования"
                ]
            }, {
                education: "учреждение образования: ",
                educationValue: "Гродненский государственный университет им. Я. Купалы",
                period: "период учебы: ",
                since: "09.2006",
                for: "06.2011",
                faculty: "факультет: ",
                facultyValue: "математики и информатики",
                educationForm: "форма обучения: ",
                educationFormValue: "очная",
                specialty: "специальность: ",
                specialtyValue: "математик-экономист",
                degree: "ступень образования: ",
                degreeValue: "бакалавр"
            }]
        },
        skills: [{
            skillsValue: "Навыки",
            languages: "языки: ",
            language: [
                "английский ",
                "русский ",
                "белорусский ",
                "польский "
            ],
            programmingLanguages: "языки программирования: ",
            frameworks: "фреймворки: ",
            other: "другие знания: "
        }],
        about: "Обо мне",
        aboutValue: "Интеллект, чувство юмора, невозмутимость, жажда cаморазвития. Самообучаюсь, работаю над собственным проектом, интересуюсь машинным обучением, много читаю.",
        contact: "Контактная информация",
        email: "электронная почта"
    },
    en: {
        lang: "en",
        label: "Select language: ",
        title: "Tretyak Sergey CV",
        content: "CV template for export to PDF",
        alt: "photo of Tretyak Sergey",
        name: "Tretyak Sergey Kazimirovich",
        jobTitle: "Web developer",
        jobRequirements: {
            jobRequirementsValue: "Job requirements",
            employment: "employment: ",
            employmentValue: "full-time / part-time",
            schedule: "work schedule: ",
            scheduleValue: "full day / flexible / remote work",
            businessTrip: "readiness for business trips: ",
            businessTripValue: "yes",
            relocation: "willing to relocate: ",
            relocationValue: "yes"
        },
        personal: {
            personalValue: "Personal information",
            city: "current city: ",
            cityValue: "Grodno, Belarus",
            citizenship: "citizenship: ",
            citizenshipValue: "Belarus",
            birthdate: "birthdate: ",
            birthdateValue: "07/16/1988",
            sex: "sex: ",
            sexValue: "male",
            marital: "marital status: ",
            maritalValue: "single",
            children: "children: ",
            childrenValue: "no"
        },
        experiences: {
            experiencesValue: "Experience",
            experience: [{
                organization: "organization: ",
                organizationValue: "freelancer",
                workPeriod: "work period: ",
                since: "01/2016",
                for: "current time",
                position: "position: ",
                positionValue: "programmer",
                jobDuties: "job duties: ",
                jobDuty: [
                    "Front-end development",
                    "Full-stack development",
                    "sites layouts",
                    "JavaScript scripting",
                    "VBA scripting"
                ],
                achievements: "achievements: ",
                achievement: [
                    "high rating",
                    "good feedback",
                    "entry into the list of top-talents in the first year of work"
                ]
            }, {
                organization: "organization: ",
                organizationValue: "Grodno Regional Customs",
                workPeriod: "work period: ",
                since: "07/2011",
                for: "12/2015",
                position: "position: ",
                positionValue: "inspector",
                jobDuties: "job duties (relevant): ",
                jobDuty: [
                    "VBA scripting",
                    "writing SQL queries",
                ],
                achievements: "achievements: ",
                achievement: [
                    "automated routine tasks, significantly increasing the speed of performing tasks of the same type",
                    "gratitude",
                    "bonuses"
                ]
            }, {
                education: "educational institution: ",
                educationValue: "Yanka Kupala State University of Grodno",
                period: "period of study: ",
                since: "09/2006",
                for: "06/2011",
                faculty: "faculty: ",
                facultyValue: "mathematics and computer science",
                educationForm: "education form: ",
                educationFormValue: "full-time",
                specialty: "specialty: ",
                specialtyValue: "mathematician-economist",
                degree: "academic degree: ",
                degreeValue: "bachelor"
            }]
        },
        skills: [{
            skillsValue: "Skills",
            languages: "languages: ",
            language: [
                "English ",
                "Russian ",
                "Belorussian ",
                "Polish "
            ],
            programmingLanguages: "programming languages: ",
            frameworks: "frameworks: ",
            other: "other knowledge: "
        }],
        about: "About me",
        aboutValue: "Intelligence, sense of humor, equanimity, thirst for self-development. I am self-taught, working on my own project, interested in machine learning, read a lot.",
        contact: "Contact info",
        email: "email"
    }
}

export { data };