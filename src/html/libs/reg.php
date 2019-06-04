<?php
    include('conn.php');
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];

    $sql = "select * from fankeproduct where use_name='$username'";

    $result = $mysqli->query($sql);
    $result = $mysqli->query($sql);
    // var_dump($result);
    // var $result->num_rows;
    if($result->num_rows>0){
        die('{"msg":"用户名已存在"}');
    }
    $insertSql = "insert into fankeproduct(use_name,use_password)values('$username','$password')";

    $res = $mysqli->query($insertSql);
    // var_dump($res);
    if($res){
        echo '{"msg":"注册成功"}';
    }

    $mysqli->close();  //关闭连接
?>