<section class="topheader py-2">
    <div class="container">
        <div class="row align-items-center g-2">

            <!-- Office Opening Hours -->
            <div class="col-6 col-md-3 text-start">
                <div class="office-info">
                    <div class="info-item d-flex align-items-center gap-2">
                        <i class="bi bi-clock-fill"></i>
                        <span class="text-truncate">{{ $siteinfo->opening ?? 'Mon - Fri: 9:00 AM - 6:00 PM' }}</span>
                    </div>
                </div>
            </div>

            <!-- Address Marquee -->
            <div class="col-12 col-md-6 order-3 order-md-2">
                @if(!empty($siteaddress) && $siteaddress->count() > 0)
                    <div class="marquee-wrapper overflow-hidden">
                        <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                            @foreach($siteaddress->take(1) as $address)
                                <div class="info-item d-inline-flex align-items-center gap-2">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <span>{{ $address->address ?? 'Dhaka, Bangladesh' }}</span>
                                </div>
                            @endforeach
                        </marquee>
                    </div>
                @endif
            </div>

            <!-- Site Navigation (Login / Register) -->
            <div class="col-6 col-md-3 text-end order-2 order-md-3">
                <div class="site-nav d-flex align-items-center justify-content-end gap-2">
                    <a href="#" class="btn-login">Login</a>
                    <a href="#" class="btn-register">Register</a>
                </div>
            </div>

        </div>
    </div>
</section>
