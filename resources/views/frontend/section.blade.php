@extends('layouts/frontend')
@section('web_content')
{{-- @includeif('frontend/components/ui/team_card1') --}}

<section class="banner-airline">
    <div class="container-fluid p-0">
        <div class="row g-0 align-items-center">
            <!-- Left Side: Content & Search Form -->
            <div class="col-lg-6 order-2 order-lg-1">
                <div class="banner-content">
                    <h1 class="main-heading">Discover the world <br> with our flights.</h1>

                    <!-- Flight Search Form -->
                    <div class="booking-card">
                        <div class="trip-type d-flex gap-4 mb-4">
                            <label class="custom-radio">
                                <input type="radio" name="trip" checked> <span>Return</span>
                            </label>
                            <label class="custom-radio">
                                <input type="radio" name="trip"> <span>One-way</span>
                            </label>
                        </div>

                        <div class="row g-3">
                            <div class="col-md-6">
                                <label>Airport - Take Off</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" value="Frankfurt am Main">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label>Airport - Arrival</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" value="Bangkok">
                                </div>
                            </div>
                            <div class="col-md-5">
                                <label>Date - Take Off</label>
                                <input type="text" class="form-control" value="Sun 20.10.">
                            </div>
                            <div class="col-md-5">
                                <label>Date - Return</label>
                                <input type="text" class="form-control" value="Sun 10.11.">
                            </div>
                            <div class="col-md-2 d-flex align-items-end">
                                <button class="btn-search"><i class="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>

                    <!-- Destination Slider (Swiper) -->
                    <div class="destinations-section">
                        <h6>Popular beach destinations</h6>
                        <div class="swiper destSwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="dest-card" style="background-image: url('path/to/beach1.jpg');">
                                        <div class="info"><span>Philippines</span><p>El Nido <strong>+643€</strong></p></div>
                                    </div>
                                </div>
                                <!-- Repeat slides for Indonesia, Maldives -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Side: 3D Airplane & Image -->
            <div class="col-lg-6 order-1 order-lg-2 position-relative">
                <div class="visual-wrapper">
                    <div class="main-image"></div> <!-- Beach Image -->
                    <div class="cloud-mask"></div> <!-- Custom cloud effect -->
                    <img src="path/to/airplane.png" class="airplane-img" alt="Airplane">
                </div>
            </div>
        </div>
    </div>
</section>
@endsection