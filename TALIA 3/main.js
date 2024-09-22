<!doctype html>
<html>

<head>
    <meta charset="utf-8" />

    <title>Un ramo para ti</title>
    <style>
        body {
            height: 100%;
            width: 100%;
            background: #080f1a;
            overflow: hidden;
        }

        .container {
            position: absolute;
            left: 50%;
            top: 30%;
            transform: translate(-50%, -50%);
        }

        .glass {
            height: 800px;
            width: 600px;
            background: #122139;
            border-radius: 300px 300px 0px 0px;
        }

        .glass:before {
            content: "";
            height: 40px;
            width: 40px;
            transform-origin: center;
            border: 25px solid #122139;
            border-radius: 100%;
            position: absolute;
            left: 256px;
            top: -74px;
        }

        .glass:after {
            content: "";
            position: absolute;
            height: 15px;
            width: 600px;
            background: #ca1717;
            top: 100%;
            left: 0%;
        }

        .shine {
            width: 26px;
            height: 330px;
            background: white;
            opacity: 0.2;
            position: absolute;
            left: 85%;
            top: 200px;
            border-radius: 100px;
            z-index: 10;
        }

        .shine:before {
            content: "";
            width: 26px;
            height: 40px;
            position: absolute;
            background: white;
            top: 365px;
            border-radius: 100px;
        }

        .petals>div {
            position: absolute;
            background: #ffffff;
            width: 85px;
            height: 120px;
            top: 200px;
            transition: all 0.5s ease-out;
        }

        .petals>div:nth-child(1) {
            border-radius: 15px;
            box-shadow: 0px 0px 60px rgba(245, 148, 184, 1);
            left: 268px;
            top: 200px;
            background: #fffffff6;
        }

        .petals>div:nth-child(2),
        .petals>div:nth-child(4),
        .petals>div:nth-child(6) {
            background: #b81b43;
            left: 230px;
            border-radius: 0px 50px 0px 50px;
            transform-origin: bottom right;
        }

        .petals>div:nth-child(3),
        .petals>div:nth-child(5),
        .petals>div:nth-child(7) {
            background: #b81b1b;
            left: 300px;
            border-radius: 50px 0px 50px 0px;
            transform-origin: bottom left;
        }

        .petals>div:nth-child(2) {
            z-index: 5;
            background: #f09000e3;
            top: 218px;
            height: 130px;
            box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);
            animation: bloom2 3s ease-in-out;
            animation-fill-mode: forwards;
        }

        .petals>div:nth-child(3) {
            z-index: 4;
            background: #d1277c;
            top: 218px;
            height: 130px;
            box-shadow: 0px 0px 60px rgba(245, 148, 184, .5);
            animation: bloom3 3s ease-in-out, glowing 2.5s ease-in-out infinite;
            animation-fill-mode: forwards;
        }

        .petals>div:nth-child(4) {
            z-index: 3;
            background: #8eb81b;
            top: 213px;
            height: 135px;
            box-shadow: 0px 0px 60px rgb(163, 216, 39);
            animation: bloom4 3s ease-in-out, glowing 2.5s ease-in-out infinite;
            animation-fill-mode: forwards;
        }

        .petals>div:nth-child(5) {
            z-index: 2;
            background: #fc0808;
            top: 213px;
            height: 135px;
            box-shadow: 0px 0px 60px rgb(242, 255, 55);
            animation: bloom5 3s ease-in-out, glowing 2.5s ease-in-out infinite;
            animation-fill-mode: forwards;
        }

        .petals>div:nth-child(6) {
            z-index: 1;
            background: #2596ff;
            top: 200px;
            height: 130px;
            box-shadow: 0px 0px 60px rgb(197, 255, 39);
            animation: bloom6 3s ease-in-out, glowing 2.5s ease-in-out infinite;
            animation-fill-mode: forwards;
        }

        .petals>div:nth-child(7) {
            z-index: 0;
            background: #b9ca1d;
            top: 200px;
            height: 130px;
            box-shadow: 0px 0px 60px rgb(191, 202, 31);
            animation: bloom7 3s ease-in-out, glowing 2.5s ease-in-out infinite;
            animation-fill-mode: forwards;
        }

        .deadPetals>div {
            position: absolute;
            background: #f1ff32;
            width: 20px;
            height: 15px;
            top: 200px;
            border-radius: 0px 30px 0px 30px;
            box-shadow: 0px 0px 30px rgb(240, 255, 31);
            transition: all 0.5s ease-out;
        }

        .deadPetals>div:nth-child(1) {
            left: 119229959987px;
            transform: rotate(-30deg);
            animation: falling 20s 4s ease-in-out infinite;
        }

        .deadPetals>div:nth-child(2) {
            left: 26331084746px;
            transform: rotate(-30deg);
            animation: falling 20s 8s ease-in-out infinite;
        }

        .deadPetals>div:nth-child(3) {
            left: 129759500363px;
            transform: rotate(-30deg);
            animation: falling 20s 12s ease-in-out infinite;
        }

        .deadPetals>div:nth-child(4) {
            left: 99323149959px;
            transform: rotate(-30deg);
            animation: falling 20s 16s ease-in-out infinite;
        }

        .leaves>div:nth-last-child(1) {
            position: absolute;
            width: 55px;
            height: 30px;
            background: #338f37;
            top: 334px;
            left: 278px;
            border-radius: 100px;
        }

        .leaves>div:nth-child(1) {
            position: absolute;
            width: 15px;
            height: 390px;
            background: #14b814;
            top: 308px;
            left: 300px;
            border-radius: 0 0 100px 100px;
        }

        .leaves>div:nth-child(2) {
            position: absolute;
            width: 60px;
            height: 100px;
            top: 53px;
            border-radius: 10px 80px 40px 80px;
            background: #13b413;
            transform-origin: bottom;
            transform: rotate(-30deg);
            top: 412px;
            left: 254px;
            box-shadow: inset 10px 10px #13c413;
        }

        .leaves>div:nth-child(3) {
            position: absolute;
            width: 60px;
            height: 100px;
            top: 53px;
            border-radius: 80px 1px 80px 40px;
            background: #14bb14;
            transform-origin: bottom;
            transform: rotate(30deg);
            top: 360px;
            left: 300px;
            box-shadow: inset -10px 10px #12bd12;
        }

        .thorns>div {
            position: absolute;
            width: 0;
            height: 0;
            top: 200px;
        }

        .thorns>div:nth-child(odd) {
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-left: 15px solid #1abe1a;
            left: 315px;
        }

        .thorns>div:nth-child(even) {
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-right: 15px solid #11bd11;
            left: 285px;
        }

        .thorns>div:nth-child(1) {
            top: 465px;
        }

        .thorns>div:nth-child(2) {
            top: 390px;
        }

        .thorns>div:nth-child(4) {
            top: 525px;
        }

        @keyframes bloom2 {
            50% {
                transform: rotate(-90deg);
                top: 400px;
                left: 150px;
            }

            100% {
                transform: rotate(-60deg);
                top: 615px;
                left: 100px;
                background: #000000;
                box-shadow: 0px 0px 0px rgba(245, 148, 184, 0);
            }
        }

        @keyframes bloom3 {
            100% {
                transform: rotate(50deg);
            }
        }

        @keyframes bloom4 {
            100% {
                transform: rotate(-25deg);
            }
        }

        @keyframes bloom5 {
            100% {
                transform: rotate(25deg);
            }
        }

        @keyframes bloom6 {
            100% {
                transform: rotate(-10deg);
            }
        }

        @keyframes bloom7 {
            100% {
                transform: rotate(10deg);
            }
        }

        @keyframes glowing {
            50% {
                background: #dbb5b5a2;
                box-shadow: 0px 0px 60px rgba(245, 148, 184, 1);
            }
        }

        @keyframes falling {
            20% {
                top: 335px;
                background: #ffffff;
                box-shadow: 0px 0px 0px rgb(255, 255, 255);
            }

            100% {
                top: 335px;
                opacity: 0;
            }
        }

        .texto {
            top: 50%;
            color: white;
            font-size: 35px;
            position: absolute;
            left: 10%;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="glass">
            <div class="shine"></div>
        </div>
        <div class="thorns">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="leaves">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="petals">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="deadPetals">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div>
        <h4 class="texto">JAJAJA EL PRIMERO NO ESTABA TAN BONITO PERO AL MENOS DISFRUTA DE LOS POEMAS JAJAJ PERO AL MENOS ME ESFORCÉ JAJAJA UN FUERTE ABRAZO PARA TI Y ESPERO QUE TU DÍA DE Haya IDO DE LO MEJOR TE LO MERECES FUERTE ABRASO </h>
    </div>
</body>

</html>