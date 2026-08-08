@if(!empty($contents) && $contents->count() > 0)
<section class="team__partner">
    <div class="container">

        <div class="team__partner-header text-center">
            <h2 class="team__partner-title">Our Partners</h2>
            <p class="team__partner-subtitle">
                Trusted by global companies
            </p>
        </div>

        <!-- Swiper -->
        <div class="swiper team__partner-slider">
            <div class="swiper-wrapper">
                @foreach ($contents as $partner)
                <div class="swiper-slide">
                    <div class="team__partner-item">
                        <img src="{{ asset($partner->cover_image ?? '') }}" alt="{{ $partner->title ?? 'Partner image' }}">
                    </div>
                </div>
                @endforeach


                

            </div>
        </div>

    </div>
</section>
@endif
