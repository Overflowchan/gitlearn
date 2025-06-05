<?php
$con = mysqli_connect('sql', 'root', 'strongpass', 'project');
if (!$con) {
    echo "fail";
    die(mysqli_error($con));
}
?>