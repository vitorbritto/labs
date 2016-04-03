<?php require ('core/db.inc.php'); ?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 60px;
                padding-bottom: 40px;
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
        <link rel="stylesheet" href="css/main.css">

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->
    </head>
    <body>

        <div class="container well">

            <form action="index.php" method="POST" class="form-inline">
                <legend>Sistema de Busca </legend>
                <input type="text" name="search" class="span8">
                <input type="submit" value="busca" class="btn btn-primary">
                <select class="pull-right">
                  <option>Filtrar por:</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
            </form>

        </div>

        <div class="container">
            <?php

            if (isset($_POST['search'])) {

                $search = mysql_real_escape_string(htmlentities(trim($_POST['search'])));

                if (!empty($search)) {

                        if (strlen($search) >= 4) {

                            $query = "SELECT firstname, lastname, email FROM users WHERE username='$search'";

                            $result = $mysqldb->query($query);

                            if ($result->num_rows > 0) {
            ?>

                            <p>Resultados Encontrados:</p>
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>

            <?php
                            while ($row = $result->fetch_object()) {
                                echo "
                                    <tr>
                                        <td>$row->firstname $row->lastname</td>
                                        <td>$row->email</td>
                                    </tr>
                                    ";
                                }
                            } else {
                                echo '<div class="alert alert-error"> <a class="close" data-dismiss="alert" href="#">x</a>Sem resultados para: '.$search.'</div>';
                            }
                        } else {
                            echo '<div class="alert alert-error"> <a class="close" data-dismiss="alert" href="#">x</a>O termo precisa ter ao menos 4 caracteres.</div>';
                        }
                    } else {
                        echo '<div class="alert alert-error"> <a class="close" data-dismiss="alert" href="#">x</a>Favor inserir um termo para iniciar a pesquisa.</div>';
                    }
                }

                ?>
                                </tbody>
                            </table>

        </div> <!-- /container -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.3.min.js"><\/script>')</script>

        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/main.js"></script>
    </body>
</html>
