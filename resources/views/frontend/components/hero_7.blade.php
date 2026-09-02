<section class="banner6">

    <div class="swiper banner6-slider">

        <div class="swiper-wrapper">

            @foreach ($contents as $data)

                <div class="swiper-slide">

                    {{-- Background --}}
                    <div
                        class="bg-layer"
                        style="background-image: url('{{ asset($data->thumbnail ?? 'https://html.rrdevs.net/consulter/assets/img/banner/banner-home.png') }}');">
                    </div>


                    {{-- Cinematic Overlay --}}
                    <div class="gradient-mask"></div>


                    {{-- Decorative Architecture --}}
                    <div class="banner6-architecture">

                        <span class="architecture-line line-1"></span>
                        <span class="architecture-line line-2"></span>
                        <span class="architecture-line line-3"></span>

                        <span class="corner corner-tl"></span>
                        <span class="corner corner-br"></span>

                    </div>


                    {{-- Main Content --}}
                    <div class="container">

                        <div class="row align-items-center">

                            <div class="col-12 col-lg-10 col-xl-9">

                                <div class="content-v6-wrapper">


                                    {{-- Small Label --}}
                                    <div
                                        class="upper-tag anim-item"
                                        data-swiper-parallax="-100">

                                        <span class="number">
                                            {{$loop->iteration}}
                                        </span>

                                        <span class="line"></span>

                                        <span class="text">
                                            {{ $data->title ?? 'Legal Excellence' }}
                                        </span>

                                    </div>


                                    {{-- Heading --}}
                                    <h1
                                        class="v6-title anim-item"
                                        data-swiper-parallax="-250">

                                        <span class="main-title">
                                            {{ $data->heading ?? 'Protecting' }}
                                        </span>

                                        <span class="outline-title">
                                            {{ $data->sub_heading ?? 'Your Rights' }}
                                        </span>

                                    </h1>


                                    {{-- Description --}}
                                    <p
                                        class="v6-desc anim-item"
                                        data-swiper-parallax="-400">

                                        {{ $data->short_des ?? 'Trusted legal counsel built on experience, integrity and results.' }}

                                    </p>


                                    {{-- Action --}}
                                    <div
                                        class="v6-btns anim-item"
                                        data-swiper-parallax="-550">

                                        <a
                                            href="{{ $data->button_url ?? '#' }}"
                                            class="btn-main-v6">

                                            <span class="btn-icon">
                                                <i class="bi bi-arrow-up-right"></i>
                                            </span>

                                            <span class="btn-text">
                                                {{ $data->button ?? 'Explore More' }}
                                            </span>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {{-- Side Information --}}
                    <div class="banner6-side-info">

                        <span class="side-line"></span>

                        <span class="side-text">
                            Rights • Solutions 
                        </span>

                    </div>


                    {{-- Scroll Indicator --}}
                    <div class="banner6-scroll">

                        <span class="scroll-text">
                            SCROLL TO EXPLORE
                        </span>

                        <span class="scroll-line"></span>

                    </div>

                </div>

            @endforeach

        </div>


        {{-- Pagination --}}
        <div class="swiper-pagination v6-pagination"></div>


        {{-- Progress --}}
        <div class="banner6-progress">
            <span></span>
        </div>

    </div>

</section>