@if(!empty($contents) && $contents->count() > 0)
<section class="partner2">
    <div class="partner2__canvas">
        <div class="graphic shape-a animate-float"></div>
        <div class="graphic shape-b animate-float-delay"></div>
        <div class="graphic shape-c">
            <svg class="dotted-path" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke-width="1" stroke-dasharray="2,2" fill="none" /></svg>
        </div>
    </div>

    <div class="container">
        <div class="section-head text-center">
            <span class="sub-title"><i class="bi bi-shield-check"></i> GLOBAL NETWORK</span>
            <h2 class="main-title">Trusted by Leading Universities & Accredited Bodies</h2>
            <p class="description">We collaborate with top academic institutions and recognized accreditation boards to ensure your success.</p>
        </div>

        <div class="swiper partnerSlider">
            <div class="swiper-wrapper">
                @foreach ($contents as $partner)
                <div class="swiper-slide">
                    <div class="partner-card t-card">
                        <div class="card-glass"></div>
                        <img src="{{ asset($partner->cover_image ?? 'https://i.pinimg.com/736x/57/82/c1/5782c188d4cdcf14f3f71dc08b9053cc.jpg') }}" alt="{{ $partner->title ?? 'Partner image' }}">
                    </div>
                </div>
                @endforeach

                
                </div>
            
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>
@endif