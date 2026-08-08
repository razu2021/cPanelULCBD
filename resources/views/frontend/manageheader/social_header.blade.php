             

<section class="mainsocialmenu1">
    <div class="container main_socialmenu">

        <div class="main_scial">
            <ul>
                @if(!empty($sitesocials) &&  $sitesocials->count() > 0)
                    @foreach($sitesocials as $sitecoail)
                        @if($sitecoail->type == 'primary')
                            <li><a href="{{$sitecoail->url ?? '#'}}"><span><i class="{{$sitecoail->icon ?? 'bi bi-facebook'}}"></i></span></a></li>
                        @endif
                    @endforeach
                @endif
                
            </ul>
        </div>

        <div class="main_contact">
            <ul>
                <!-- site phone -->
                @if(!empty($sitephones) &&  $sitephones->count() > 0)
                    @foreach($sitephones->take(2) as $sitephone)
                        @if($sitephone->type == 'primary')
                             <li><a href="tel:{{$sitephone->phone ?? '01858-xxxxxxx'}}"><span><i class="bi bi-telephone"></i></span> {{$sitephone->phone ?? '01858-xxxxxxx'}} </a></li>
                        @endif
                    @endforeach
                @endif

                <!-- site email -->
                @if(!empty($siteemails) &&  $siteemails->count() > 0)
                    @foreach($siteemails->take(2) as $siteemail)
                        @if($siteemail->type == 'primary')
                             <li><a href="mailto:{{$siteemail->email ?? ''}}"><span><i class="bi bi-envelope"></i></span> {{$siteemail->email ?? 'admin@example.com'}} </a></li>
                        @endif
                    @endforeach
                @endif
            </ul>
        </div>

    </div>
</section>