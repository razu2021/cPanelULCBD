

<section class="main_footer">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="footer_column">
               
                    <h4> About us</h4>
                    @foreach($siteaddress->take(1) as $address)
                        <p> {{$address->description ?? ''}}</p>
                        <h4>{{$address->title ?? ''}}</h4>
                        <address class="text-white">
                            {{$address->address ?? ''}}
                        </address>
                    @endforeach
                </div>
            </div>
            {{-- col end --}}
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="footer_column">
                    <h4> Useful links  </h4>
                    <div class="footer_menu">
                        <ul>
                            @if(!empty($categorys) && $categorys->count() > 0)
                            @foreach($categorys->take(6) as $cate)
                            <li><a href="{{$cate->url ?? '#'}}">{{$cate->name ?? ''}}</a></li>
                            @endforeach
                            @endif
                        </ul>
                    </div>
                </div>
            </div>
            {{-- col end --}}
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="footer_column">
                    <h4> Social Links </h4>
                    <div class="footer_menu">
                        <ul>
                            @if(!empty($sitesocials) && $sitesocials->count() > 0)
                            @foreach($sitesocials->take(6) as $social)
                            <li><a href="{{$social->url ?? '#'}}">{{$social->title ?? ''}}</a></li>
                            @endforeach
                            @endif
                        </ul>
                    </div>
                </div>
            </div>
            {{-- col end --}}
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="footer_column">
                    <h4> Quick Contact </h4>
                    <div class="footer_menu">
                        <ul>
                            @if(!empty($sitephones) && $sitephones->count() > 0)
                            @foreach($sitephones->take(3) as $phone)
                            <li><a href="tel:{{$phone->phone}}">{{$phone->phone ?? ''}}</a></li>
                            @endforeach
                            @endif
                            <!-- end phone -->
                            @if(!empty($siteemails) && $siteemails->count() > 0)
                            @foreach($siteemails->take(3) as $email)
                            <li><a href="mailto:{{$email->email}}">{{$email->email ?? ''}}</a></li>
                            @endforeach
                            @endif
                            <!-- email end  -->
                        </ul>
                    </div>
                </div>
            </div>
            {{-- col end --}}
        </div>
    </div>
</section>
