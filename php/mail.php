<?php
// ----------------------------конфигурация-------------------------- //
if (empty($_POST["test"])){
    $adminemail="info@webcoster.ru";  // 

    $date=date("d.m.y"); // число.месяц.год

    $time=date("H:i"); // часы:минуты:секунды

    //---------------------------------------------------------------------- //


    // Принимаем данные с формы
    if (isset($_POST["form_subject"]) && !empty($_POST["form_subject"])){
        $subject=$_POST['form_subject'];
    }
    else{
        $subject="Сообщение с webcoster.ru";
    }

    $msg="Сообщение с webcoster.ru

    $subject";

    if (!empty($_POST["name"])){
        $name=$_POST['name'];
        $msg = $msg . "\n\n" . "Клиент: " . $name;
    }

    if (!empty($_POST["phone"])){
        $phone=$_POST['phone'];
        $msg = $msg . "\n\n" . "Телефон: " . $phone;
    }

    if (!empty($_POST["email"])){
        $mail=$_POST['email'];
        $msg = $msg . "\n\n" . "Email: " . $mail;
    }

    if (!empty($_POST["message"])){
        $message=$_POST['message'];
        $msg = $msg . "\n\n" . "Сообщение: " . $message;
    }

    if (!empty($_POST["time"])){
        $tm=$_POST['time'];
        $msg = $msg . "\n\n" . "Удобное время: " . $tm;
    }

    // Выводим сообщение пользователю
    
    echo '
    <html>
    	<head>
    	<meta charset="utf-8">
    	<title>Спасибо ваше сообщение! Мы ответим как можно скорее!</title>
    	<link rel="shortcut icon" href="../img/favicon.png" type="image/png">
    	<!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
        new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
        "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,"script","dataLayer","GTM-TN9C5PR");</script>
        <!-- End Google Tag Manager -->
    	</head>
    	<body>
        	<!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.ht...9C5PR";
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
    		<div class="content-wrapper">
    			<div class="content">
    				<div class="content-heading">
    					<h1>Спасибо за сообщение!</h1>
    				</div>
    				<div class="content-message">
    					<h3>Наш менеджер свяжется с вами как можно скорее.</h3>
    				</div>
    				<div class="content-link">
    					<a href="/">Ссылка на главную страницу сайта</a></p>
    				</div>
    			</div>
    		</div>

    		<style>
    			body{
    				font-family: sans-serif
    			}
    			.content-wrapper{
    				width:500px;
    				margin: auto;
    				position: absolute;
    				top: 0;
    				left: 0;
    				bottom: 0;
    				right: 0;
    				height: 500px;
    				background-color:#fbfbfb;
    				display: flex;
    				align-items: center;
    				justify-content: center;
    				flex-direction: column;
    				-webkit-box-shadow: 0px 0px 16px 2px rgba(201,201,201,1);
    				-moz-box-shadow: 0px 0px 16px 2px rgba(201,201,201,1);
    				box-shadow: 0px 0px 16px 2px rgba(201,201,201,1);
    			}
    			.content{
    				margin: auto;
    				top: 0;
    				left: 0;
    				bottom: 0;
    				right: 0;
    			}
    			.content-heading{
    				text-align: center;
    			}
    			.content-message{
    				margin-top: 25px;
    				margin-bottom: 25px;
    				text-align: center;
    			}
    			.content-link{
    				text-align: center;
    			}
    			.content-logo-img{
    				max-width:206px;
    				margin-left: 147px;
    				margin-right: 147px;
    			}
    			.content-logo{
    				margin: 0 auto;
    			}
    		</style>
    	</body>
    </html>';
    
    if (!empty($_POST['form_subject'])){
    // Отправляем письмо админу
        mail("$adminemail", "$date $time Сообщение с webcoster.ru", "$msg");
        echo "<meta http-equiv=refresh content='0;url=http://webcoster.ru/php/mail.php'>";
        exit();
    }

    exit();
}else{
    echo '
    <html>
    	<head>
    	<meta charset="utf-8">
    	<title>Вы спаммер</title>
    	</head>
    	<body>
    		<div class="content-wrapper">
    			<div class="content">
    				<div class="content-heading">
    					<h1>Вы спаммер</h1>
    				</div>
    				<div class="content-message">
    					<h3>спамить нехорошо</h3>
    				</div>
    			</div>
    		</div>

    		<style>
    			body{
    				font-family: sans-serif
    			}
    			.content-wrapper{
    				width:500px;
    				margin: auto;
    				position: absolute;
    				top: 0;
    				left: 0;
    				bottom: 0;
    				right: 0;
    				height: 500px;
    				background-color:#fbfbfb;
    				display: flex;
    				align-items: center;
    				justify-content: center;
    				flex-direction: column;
    				-webkit-box-shadow: 0px 0px 16px 2px rgba(201,201,201,1);
    				-moz-box-shadow: 0px 0px 16px 2px rgba(201,201,201,1);
    				box-shadow: 0px 0px 16px 2px rgba(201,201,201,1);
    			}
    			.content{
    				margin: auto;
    				top: 0;
    				left: 0;
    				bottom: 0;
    				right: 0;
    			}
    			.content-heading{
    				text-align: center;
    			}
    			.content-message{
    				margin-top: 25px;
    				margin-bottom: 25px;
    				text-align: center;
    			}
    			.content-link{
    				text-align: center;
    			}
    			.content-logo-img{
    				max-width:206px;
    				margin-left: 147px;
    				margin-right: 147px;
    			}
    			.content-logo{
    				margin: 0 auto;
    			}
    		</style>
    	</body>
    </html>';
    exit();
}

?>