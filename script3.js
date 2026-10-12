// JavaScript code to handle the popup functionality with more detailed information

const courseDetails = {
    bca: {
        title: "BCA (Bachelor of Computer Applications)",
        summary: "A comprehensive program that prepares students for careers in software development, computer systems, and information technology.",
        details: `
            <strong>Duration:</strong> 3 years<br>
            <strong>Fees:</strong> INR 32,000 per year<br>
            <strong>Semesters:</strong> 6<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Programming</li>
                <li>Software Development</li>
                <li>Computer Systems</li>
                <li>Database Management</li>
                <li>Network Security</li>
            </ul>
        `
    },
    bcom: {
        title: "BCOM (Bachelor of Commerce)",
        summary: "Focuses on commerce, finance, accountancy, and business administration, preparing students for various roles in the business world.",
        details: `
            <strong>Duration:</strong> 3 years<br>
            <strong>Fees:</strong> INR 120,000 per year<br>
            <strong>Semesters:</strong> 6<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Commerce</li>
                <li>Finance</li>
                <li>Accountancy</li>
                <li>Business Administration</li>
                <li>Economics</li>
            </ul>
        `
    },
    bpharma: {
        title: "BPHARMA (Bachelor of Pharmacy)",
        summary: "Covers the study of pharmacy, medicinal chemistry, and pharmaceutical engineering, preparing students for careers in the pharmaceutical industry.",
        details: `
            <strong>Duration:</strong> 4 years<br>
            <strong>Fees:</strong> INR 180,000 per year<br>
            <strong>Semesters:</strong> 8<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Pharmacy</li>
                <li>Medicinal Chemistry</li>
                <li>Pharmaceutical Engineering</li>
                <li>Pharmacology</li>
                <li>Pharmacognosy</li>
            </ul>
        `
    },
    bba: {
        title: "BBA (Bachelor of Business Administration)",
        summary: "Combines business, management, and entrepreneurial studies, equipping students with the skills needed for leadership roles in business.",
        details: `
            <strong>Duration:</strong> 3 years<br>
            <strong>Fees:</strong> INR 140,000 per year<br>
            <strong>Semesters:</strong> 6<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Business Management</li>
                <li>Entrepreneurship</li>
                <li>Marketing</li>
                <li>Human Resource Management</li>
                <li>Financial Management</li>
            </ul>
        `
    },
    llb: {
        title: "LLB (Bachelor of Laws)",
        summary: "Provides a strong foundation in law and legal principles, preparing students for careers in the legal field.",
        details: `
            <strong>Duration:</strong> 3 years<br>
            <strong>Fees:</strong> INR 160,000 per year<br>
            <strong>Semesters:</strong> 6<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Legal Principles</li>
                <li>Jurisprudence</li>
                <li>Constitutional Law</li>
                <li>Criminal Law</li>
                <li>Corporate Law</li>
            </ul>
        `
    },
    bfa: {
        title: "BFA (Bachelor of Fine Arts)",
        summary: "Studies in visual arts, including painting, sculpture, and graphic design, fostering creativity and artistic skills.",
        details: `
            <strong>Duration:</strong> 3 years<br>
            <strong>Fees:</strong> INR 130,000 per year<br>
            <strong>Semesters:</strong> 6<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Painting</li>
                <li>Sculpture</li>
                <li>Graphic Design</li>
                <li>Art History</li>
                <li>Photography</li>
            </ul>
        `
    },
    be: {
        title: "BE (Bachelor of Engineering)",
        summary: "An engineering degree with various specializations, preparing students for technical roles in engineering fields.",
        details: `
            <strong>Duration:</strong> 4 years<br>
            <strong>Fees:</strong> INR 200,000 per year<br>
            <strong>Semesters:</strong> 8<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Electrical Engineering</li>
                <li>Computer Engineering</li>
                <li>Electronics and Communication Engineering</li>
            </ul>
        `
    },
    bsc: {
        title: "B.Sc (Bachelor of Science)",
        summary: "Offers a wide range of science disciplines, providing a solid foundation in scientific principles and research.",
        details: `
            <strong>Duration:</strong> 3 years<br>
            <strong>Fees:</strong> INR 110,000 per year<br>
            <strong>Semesters:</strong> 6<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Environmental Science</li>
            </ul>
        `
    },
    ba: {
        title: "BA (Bachelor of Arts)",
        summary: "A versatile degree with subjects ranging from humanities to social sciences, fostering critical thinking and analytical skills.",
        details: `
            <strong>Duration:</strong> 3 years<br>
            <strong>Fees:</strong> INR 100,000 per year<br>
            <strong>Semesters:</strong> 6<br>
            <strong>Main Topics:</strong>
            <ul>
                <li>Humanities</li>
                <li>Social Sciences</li>
                <li>Languages</li>
                <li>Political Science</li>
                <li>Sociology</li>
            </ul>
        `
    }
};

function showCourseDetails(course) {
    const popup = document.getElementById("course-popup");
    const courseTitle = document.getElementById("course-title");
    const courseSummary = document.getElementById("course-summary");
    const courseDetailsEl = document.getElementById("course-details");
    
    courseTitle.innerText = courseDetails[course].title;
    courseSummary.innerText = courseDetails[course].summary;
    courseDetailsEl.innerHTML = courseDetails[course].details;
    
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("course-popup");
    popup.style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("course-popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
