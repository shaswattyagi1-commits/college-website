<?php
include 'db_connect.php'; // Connects to the MySQL database
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $dob = $_POST['dob'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $permanent_address = $_POST['permanent_address'];
    $education_level = $_POST['education_level'];
    $exam = $_POST['exam'];
    $institute = $_POST['institute'];
    $passing_year = $_POST['passing_year'];
    $grade = $_POST['grade'];
    $program = $_POST['program'];

    // Handle photo upload
    $photoPath = 'uploads/' . basename($_FILES['photo']['name']);
    move_uploaded_file($_FILES['photo']['tmp_name'], $photoPath);

    // Insert data into the database
    $sql = "INSERT INTO students (name, dob, email, phone, address, permanent_address, photo, education_level, exam, institute, passing_year, grade, program)
            VALUES ('$name', '$dob', '$email', '$phone', '$address', '$permanent_address', '$photoPath', '$education_level', '$exam', '$institute', '$passing_year', '$grade', '$program')";

    if ($conn->query($sql) === TRUE) {
        echo "Application submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>