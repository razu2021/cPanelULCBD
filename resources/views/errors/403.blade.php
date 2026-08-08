@extends('layouts/frontend')
@section('web_content')
<section class="unique-404-body">
    <style>
        /* Base Setup: 1rem = 10px */
        .unique-404-body {
            font-size: 62.5%; 
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #050505;
            overflow: hidden;
            position: relative;
            font-family: 'Inter', sans-serif;
        }

        /* Abstract Background Shapes */
        .unique-404-body::before {
            content: "";
            position: absolute;
            width: clamp(20rem, 40vw, 50rem);
            height: clamp(20rem, 40vw, 50rem);
            background: linear-gradient(45deg, #0d6efd, #6610f2);
            filter: blur(12rem);
            opacity: 0.2;
            border-radius: 50%;
            top: 10%;
            left: 10%;
            animation: moveOrb 15s infinite alternate;
        }

        .container-404 {
            text-align: center;
            z-index: 2;
            position: relative;
        }

        /* Big Animated 404 Text */
        .glitch-wrapper {
            position: relative;
            display: inline-block;
        }

        .main-404 {
            font-size: clamp(10rem, 20vw, 22rem);
            font-weight: 900;
            color: #fff;
            letter-spacing: -0.5rem;
            margin: 0;
            line-height: 1;
            position: relative;
            text-transform: uppercase;
        }

        /* Glitch Layer 1 */
        .main-404::before {
            content: "404";
            position: absolute;
            top: 0; left: -2px;
            width: 100%; height: 100%;
            background: #050505;
            color: #ff00c1;
            overflow: hidden;
            clip: rect(0, 90rem, 0, 0);
            animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        /* Glitch Layer 2 */
        .main-404::after {
            content: "404";
            position: absolute;
            top: 0; left: 2px;
            width: 100%; height: 100%;
            background: #050505;
            color: #00fff9;
            overflow: hidden;
            clip: rect(0, 90rem, 0, 0);
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }

        .error-info {
            margin-top: -1rem;
        }

        .error-info h2 {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            color: #fff;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .error-info p {
            font-size: clamp(1.4rem, 2vw, 1.8rem);
            color: rgba(255, 255, 255, 0.6);
            max-width: 45rem;
            margin: 0 auto 4rem;
        }

        /* Modern Glassmorphic Button */
        .btn-glow {
            font-size: 1.6rem;
            color: #fff;
            text-decoration: none;
            padding: 1.8rem 4.5rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10rem;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(1rem);
            transition: all 0.4s ease;
            display: inline-block;
            box-shadow: 0 1rem 3rem rgba(0,0,0,0.3);
        }

        .btn-glow:hover {
            background: #fff;
            color: #000;
            transform: scale(1.05);
            box-shadow: 0 0 4rem rgba(255, 255, 255, 0.4);
        }

        /* Keyframes */
        @keyframes moveOrb {
            from { transform: translate(0, 0); }
            to { transform: translate(20rem, 10rem); }
        }

        @keyframes glitch-anim {
            0% { clip: rect(2rem, 99.9rem, 3rem, 0); }
            20% { clip: rect(8rem, 99.9rem, 1rem, 0); }
            40% { clip: rect(4rem, 99.9rem, 6rem, 0); }
            60% { clip: rect(9rem, 99.9rem, 2rem, 0); }
            80% { clip: rect(1rem, 99.9rem, 8rem, 0); }
            100% { clip: rect(5rem, 99.9rem, 4rem, 0); }
        }

        @keyframes glitch-anim-2 {
            0% { clip: rect(1rem, 99.9rem, 4rem, 0); }
            25% { clip: rect(6rem, 99.9rem, 2rem, 0); }
            50% { clip: rect(2rem, 99.9rem, 9rem, 0); }
            75% { clip: rect(8rem, 99.9rem, 3rem, 0); }
            100% { clip: rect(3rem, 99.9rem, 7rem, 0); }
        }
    </style>

    <div class="container-404">
        <div class="glitch-wrapper">
            <h1 class="main-404">403</h1>
        </div>
        
        <div class="error-info">
            <h2>LOST IN SPACE?</h2>
            <p>The page you are looking for has vanished into the digital void. Don't worry, we can guide you back.</p>
            
            <a href="{{ url('/') }}" class="btn-glow">
                BACK TO REALITY
            </a>
        </div>
    </div>
</section>
@endsection