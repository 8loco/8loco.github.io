document.addEventListener('DOMContentLoaded', function () {
    const mainNavHTML = `
        <style>
        .main-nav-bar {
            padding: 10px;
            padding-right: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-left: 6px;
        }

        .nav-logo {
            width: 100px;
            margin-bottom: 10px;
        }

        .nav-list {
            list-style-type: none;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-grow: 1;
        }

        .nav-item {
            text-align: center;
            font-family: 'Arimo', sans-serif;
            font-size: 24px;
            margin: 0 20px;
            font-weight: bold;
            letter-spacing: 1.2px;
        }

        .nav-item a {
            text-decoration: none;
            font-size: 85%;
            white-space: nowrap;
        }

        /* Color para "Inicio" */
        .nav-item a {
            color: #ff6f61; 
        }

        /* Color de "Inicio" en modo claro */
        [data-theme="light"] .nav-item:first-child a {
            color: #ff6f61;
        }

        /* Color negro para "Acerca de" y "Contacto" */
        .nav-item:nth-child(2) a,
        .nav-item:nth-child(3) a {
            color: #000; 
        }


        /* Color de los ítems del navbar en modo claro */
        [data-theme="light"] .nav-item:nth-child(2) a,
        [data-theme="light"] .nav-item:nth-child(3) a {
            color: #000; /* Color negro */
        }

       
        .nombre {
            margin-top: 30px;
            font: 900 50px/1 'Calligraffitti', cursive;
            letter-spacing: -.065em;
            position: relative;
            color: #547a82;
            display: inline-block;
            transform: rotate(-20deg);
            /*    line-height: 1.5;    */
        }

        /* Estilos del switch */
        .theme-switch {
            color: white;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            transition: color 0.3s ease;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
        }

        .theme-switch input[type=checkbox] {
            height: 0;
            width: 0;
            visibility: hidden;
        }

        .theme-switch label {
            cursor: pointer;
            text-indent: -9999px;
            width: 52px;
            height: 27px;
            background: grey;
            float: right;
            border-radius: 100px;
            position: relative;
        }

        .theme-switch label:after {
            content: "";
            position: absolute;
            top: 3px;
            left: 3px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 90px;
            transition: 0.3s;
        }

        .theme-switch input:checked + label {
            background: #ff6f61;
        }

        .theme-switch input:checked + label:after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }

        .theme-switch label:active:after {
            width: 45px;
        }

        .theme-switch:hover {
            color: #ccc;
        }
        </style>
        <nav class="main-nav-bar">
        <h1 class="nombre">
        <a href="/html/index.html" style="text-decoration: none; color: inherit;">
            <span style="color: #FF6F61;">I Y</span><br>
        
        </a>
        </h1>

        <ul class="nav-list">
            <li class="nav-item itemitos"><a href="/html/index.html">Inicio</a></li>
            <li class="nav-item itemitos"><a href="/html/acercade.html">Acerca de</a></li>
            <li class="nav-item itemitos"><a href="/html/contacto.html">Contacto</a></li> 
        </ul>
        </nav>
    `;

    const socialNavHTML = `
    <style>
    .social-nav-bar {
        background-color: #333;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    
    .social-icons-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .social-icon {
        font-size: 24px;
        color: white;
        margin: 0 10px;
    }
    .social-icons-container {
        display: flex;
        align-items: center;
        justify-content: center; 
    }
    
    
    .fab.fa-facebook:hover {
        color: #1f5ffc;
    }
    .fab.fa-whatsapp:hover {
        color: #23c760;
    }
    .fab.fa-instagram:hover {
        background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        -webkit-background-clip: text;
        color: transparent;
    }
    
    </style>
    </head>
    <body>
    
    <nav class="social-nav-bar">
    <div class="social-icons-container">
        <a href="https://www.facebook.com/nachitoyardino" target="_blank">
            <i class="social-icon fab fa-facebook"></i>
        </a>
        <a href="https://wa.me/+59895655700" target="_blank">
            <i class="social-icon fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/nacho_yardino/" target="_blank">
            <i class="social-icon fab fa-instagram"></i>
        </a>
    </div>
    <div class="toggle-container theme-switch">
        <input type="checkbox" id="switch" name="theme" />
        <label for="switch">Toggle</label>
    </div>
</nav>


    </nav>
    `;

    document.body.insertAdjacentHTML('beforebegin', socialNavHTML);

    document.body.insertAdjacentHTML('afterbegin', mainNavHTML);

    const checkbox = document.querySelector('input[name="theme"]');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            trans();
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            trans();
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });

    const trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    };
});
