const qualifications = [
    {
        title: "Full Stack Web Development",
        year: 2022,
        description: "Complete web development course which included HTML to JavaScript, React, Node/Expressjs, MongoDB etc.",
        institute: {
            name: "Institute of Information and Communication Technology ",
            shortName: "IICT,SUST",
            duration: "December 2024 - February 2025"
        }
    },
    {
        title: "BSc. in Chemistry",
        year: 2020,
        description: "Achieved four years bechelor degree from a reputed university. It was a great really a experience of life.",
        institute: {
            name: "Shahjalal University of Science and Technology.",
            shortName: "SUST",
            duration: "January 2018 - December 2022"
        }
    },
    {
        title: "Higher Secondary School Certificate",
        year: 2018,
        description: "Achieved two years higher secondary degree from Science major from a reputed college.",
        institute: {
            name: "Rajshahi University School",
            shortName: "RUS",
            duration: "July 2016 - Jun 2018"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href="https://drive.google.com/file/d/1jiPsseEVlWW4JVgTpHr1JvwO0pw4uj-E/view?usp=sharing" target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

