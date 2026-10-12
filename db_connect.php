<?php
$servername = "localhost"; // Change if using a live server
$username = "root"; // Default for local XAMPP/WAMP setup
$password = ""; // Leave blank if using default MySQL install
$dbname = "college_admission";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>