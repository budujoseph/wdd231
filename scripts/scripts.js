const currentYear = new Date().getFullYear();
// document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Update: ${lastModified}`;

const hamburger = document.querySelector('.top-navs');
const list = document.querySelector('.top-nav-list');

hamburger.addEventListener('click', () => {
    list.classList.toggle('show');
    hamburger.classList.toggle('show');
})


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Change course completion to true if completed

courses[0].completed = true;  // mark CSE 110 as completed
courses[1].completed = true;  // mark WDD 130 as completed
courses[2].completed = true;  // mark CSE 111 as completed
courses[4].completed = true;  // mark WDD 131 as completed

// DOM elements

const coursesContainer = document.getElementById('courses-container');
const totalCreditsElement = document.getElementById('total-credits');
const filterBtns = document.querySelectorAll('.filter-buttons button');

// coursesContainer.textContent = 'HELLO WORLD';
// totalCredits.textContent = 5;

// function to display courses

function displayCourses(filter = 'all') {
    const filteredCourses = courses.filter(course => 
        filter === 'all' || course.subject === filter.toUpperCase()
    );

    coursesContainer.innerHTML = ''; // clear course container 

    //computing total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = totalCredits;

    //display courses

    filteredCourses.forEach(course => {
    //course button

        const coursebtn = document.createElement('button');
        coursebtn.textContent = `${course.subject} ${course.number}`;
        coursebtn.classList.add('course-button');
        coursesContainer.appendChild(coursebtn);

        // add class "completed" to all completed courses
        if (course.completed === true) {
            coursebtn.classList.add('completed-course');
        }


        //eventlistener to display course info

        coursebtn.addEventListener('click' ,() => {
        const allExistingInfo = document.querySelectorAll('.course-info');
        allExistingInfo.forEach(info => info.remove());
            
        // create the course information container
        const courseInfo = document.createElement('div');
        courseInfo.classList.add(
                'course-info',
            );
            courseInfo.setAttribute('course-data', `${course.subject}-${course.number}`);
            courseInfo.innerHTML = '';
            courseInfo.innerHTML = `
                <p><strong>Title: </strong>${course.title}</p>
                <p><strong>Credits: </strong>${course.credits}</p>
                <p><strong>Certificate: </strong>${course.certificate}</p>
                <p><strong>Description: </strong>${course.description}</p>
                <p><strong>Technology: </strong>${course.technology}</p>
                <p><strong>Completed: </strong>${course.completed}</p>
                `;
            coursesContainer.appendChild(courseInfo);
        });
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click' ,() => {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active')

        const filter = btn.dataset.filter;
        displayCourses(filter);
    });
});

displayCourses();




