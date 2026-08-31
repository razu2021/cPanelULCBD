@if(!empty($contents) && $contents->count() > 0)
<section class="py-5">
    <div class="container">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading5',['data' => $sectionsdata,])
        <!-- section heading end here  -->
          
        <div class="row g-3 py-5">
        @foreach ($contents as $client)
        <div class="col-12 col-sm-6 col-xl-3 ">
            <div class="clientmini">
                <div class="clientmini__image">
                    @if($client->cover_image )
                    <img src="{{asset($client->cover_image)}}" alt="Client">
                    @else
                        <img src="{{asset('contents/website/assets/images/avater.gif')}}" alt="Client">
                    @endif
                </div>

                <div class="clientmini__content">
                    <span class="clientmini__name">|{{$client->name ?? ''}}</span>

                    <h3>{{$client->case_title ?? ''}}</h3>

                    <p>
                       {{Str::words($client->short_des ?? '' , 25)}}
                    </p>
                </div>
            </div>
        </div>
      @endforeach

    </div>
    </div>
</section>
@endif