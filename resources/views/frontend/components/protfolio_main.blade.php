@if(!empty($contents) && $contents->count() > 0)
<section class="py-5">
    <div class="container">
        <div class="row">
            @foreach($contents->take(4) as $prot)
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3">
                <div class="card1">
                    <div class="card1-img">
                        <img src="{{asset($prot->cover_image ?? 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop')}}" alt="{{$prot->title ?? 'protfolio image'}}">
                    </div>

                    <div class="card1-body">
                        <span class="card1-badge">{{$prot->type ?? 'no type'}}</span>

                        <h4 class="card1-title">
                            {{$prot->title ?? ''}}
                        </h4>

                        <p class="card1-text">
                           {{Str::words($prot->short_des ?? '' ,20)}}
                        </p>

                        <div class="card1-footer">
                            <a href="{{route('details.protfolios',[$prot->id,$prot->url])}}" class="card1-btn">{{$prot->button ?? 'Explore More'}} →</a>
                        </div>
                    </div>
                </div>

                <!-- card end -->
            </div>
            @endforeach
            <!-- col end -->
        </div>
    </div>
</section>
@endif