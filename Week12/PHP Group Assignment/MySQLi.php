<!DOCTYPE html>
<html>

<head>
    <title>MySQLi</title>
</head>

<body>

<?php
$con=mysqli_connect("localhost","my_user","my_password","my_db");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="SELECT pfp FROM Users";

if ($result=mysqli_query($con,$sql))
  {
  // Seek to row number 1
  mysqli_data_seek($result,1);

  // Fetch row
  $row=mysqli_fetch_row($result);

  printf ("pfp: %s\n", $row[0], $row[1]);

  // Free result set
  mysqli_free_result($result);
}

mysqli_close($con);
?>

</body>

</html>