// Function to show courses based on education level
function showCourses() {
    var educationLevel = document.querySelector('input[name="education_level"]:checked').value;
    var bachelorCourses = document.getElementById("bachelor_courses");
    var masterCourses = document.getElementById("master_courses");
    var programSelect = document.getElementById("program");

    // Reset options visibility
    bachelorCourses.style.display = "none";
    masterCourses.style.display = "none";
    programSelect.disabled = false;

    if (educationLevel === "after_12th") {
        bachelorCourses.style.display = "block";
        masterCourses.style.display = "none";
    } else if (educationLevel === "after_bachelor") {
        bachelorCourses.style.display = "none";
        masterCourses.style.display = "block";
    }
}

// Function to preview photo
function previewPhoto() {
    var file = document.getElementById("photo").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        document.getElementById("photo-preview").style.backgroundImage = "url(" + reader.result + ")";
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById("photo-preview").style.backgroundImage = "none";
    }
}

// Function to generate passing year options
function populatePassingYear() {
    var passingYearSelect = document.getElementById("passing_year");
    var currentYear = new Date().getFullYear();
    for (var year = currentYear; year >= 1980; year--) {
        var option = document.createElement("option");
        option.value = year;
        option.text = year;
        passingYearSelect.appendChild(option);
    }
}

// Initialize the form with the proper event handlers and populate passing year options
document.addEventListener('DOMContentLoaded', function() {
    populatePassingYear();
    var educationRadios = document.querySelectorAll('input[name="education_level"]');
    educationRadios.forEach(function(radio) {
        radio.addEventListener('change', showCourses);
    });
});
