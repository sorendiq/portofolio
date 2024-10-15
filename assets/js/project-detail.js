// project-detail.js

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    // Data proyek yang bisa diubah sesuai keperluan
    const projects = {
        1: {
            title: 'Project Title 1',
            img: 'assets/img/project1.jpg',
            description: 'Detailed information about project 1...'
        },
        2: {
            title: 'Project Title 2',
            img: 'assets/img/project2.jpg',
            description: 'Detailed information about project 2...'
        },
        3: {
            title: 'Project Title 3',
            img: 'assets/img/project3.jpg',
            description: 'Detailed information about project 3...'
        },
        4: {
            title: 'Project Title 4',
            img: 'assets/img/project4.jpg',
            description: 'Detailed information about project 4...'
        }
    };

    // Ambil elemen HTML
    const projectTitle = document.querySelector('.project-title');
    const projectImage = document.querySelector('.project-detail-image');
    const projectDescription = document.querySelector('.project-description');

    // Update konten berdasarkan ID proyek
    const project = projects[projectId];
    if (project) {
        projectTitle.textContent = project.title;
        projectImage.src = project.img;
        projectDescription.textContent = project.description;
    } else {
        projectTitle.textContent = "Project Not Found";
        projectImage.style.display = 'none';
        projectDescription.textContent = "The project you are looking for does not exist.";
    }
});
