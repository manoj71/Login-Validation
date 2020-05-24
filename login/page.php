<?php 
session_start();
if(!isset($_SESSION['username']))
  header('location:http://localhost/login/home.html');
?>
<html>
<head>
</head>
<body>
<h2>WELCOME TO THE HOME PAGE,<?php echo $_SESSION['username'];?></h2>
<a href="logout.php">Logout</a>
</body>
</html>
