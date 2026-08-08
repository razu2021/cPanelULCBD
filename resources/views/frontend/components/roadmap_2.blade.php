<section class="roadmap3">
    <div class="roadmap3__shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
    </div>

    <div class="container">
        <div class="section-head text-center">
            <span class="sub-title">Success Journey</span>
            <h2 class="main-title">A Seamless Roadmap to Your Future</h2>
        </div>

        <div class="roadmap3__wrapper">
            <svg class="roadmap3__svg-path" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="main-line" d="M0,100 C150,100 250,50 400,100 C550,150 650,100 800,100 C950,100 1050,150 1200,100" stroke="#e0e0e0" stroke-width="4" stroke-dasharray="10 10" />
                <path class="anim-line" d="M0,100 C150,100 250,50 400,100 C550,150 650,100 800,100 C950,100 1050,150 1200,100" stroke="url(#grad)" stroke-width="4" stroke-dasharray="10 10" />
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#007bff" />
                        <stop offset="100%" stop-color="#6f42c1" />
                    </linearGradient>
                </defs>
            </svg>

            <div class="roadmap3__track">

                @foreach($contents as $roadmap)
                <div class="roadmap-item">
                    <div class="glass-card">
                        <div class="step-no">{{$loop->iteration}}</div>
                        <div class="icon-box"><i class="{{$roadmap->icon ?? 'bi bi-chat-heart-fill'}}"></i></div>
                        <h4>{{$roadmap->title ?? ''}}</h4>
                        <p>{{$roadmap->short_des ?? ''}}</p>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
