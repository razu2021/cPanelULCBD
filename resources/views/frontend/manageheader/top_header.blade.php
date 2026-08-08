<section class="topheader">
    <div class="container">
        <!-- Office Info -->
        <div class="office-info">
        @if(!empty($siteaddress) && $siteaddress->count() > 0)
            @foreach($siteaddress->take(1) as $address)
            @if($address->type == 'primary')
            <div class="info-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>{{$address->address ?? 'Dhaka, Bangladesh'}}</span>
            </div>
            @endif
            @endforeach
        @endif

            <div class="info-item">
                <i class="bi bi-clock-fill"></i>
                <span>{{$siteinfo->opening ?? 'Mon - Fri: 9:00 AM - 6:00 PM'}}</span>
            </div>
        </div>

        <!-- Site Navigation -->
        <div class="site-nav">
            <a href="#" class="btn-login">Login</a>
            <a href="#" class="btn-register">Register</a>
        </div>
    </div>
</section>
