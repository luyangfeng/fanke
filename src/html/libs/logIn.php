<?php
    include('conn.php');
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];

    $sql="select * from fankeproduct where use_name='$username' and use_password='$password'";

    $res=$mysqli->query($sql);
    if($res->num_rows>0){
    echo '{"msg":"登陆成功"}';
    }else{
        echo'{"msg":"登陆失败"}';
    }
?>