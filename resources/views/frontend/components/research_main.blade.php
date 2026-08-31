@if(!empty($contents) && $contents->count() > 0)
<section class="research1">
    <div class="container">

        <!-- Section Header -->
        <div class="py-5">
            <!-- section heading start here  -->
            @includeif('frontend/components/ui/sectionheading1',['data' => $sectionsdata,])
            <!-- section heading end here  -->
          
        </div>


        <!-- Research Cards -->
        <div class="row g-4">

            <!-- Card -->
           @foreach ($contents as $res)
            <div class="col-12 col-md-6 col-xl-4">
                <article class="research1__card">
                    <div class="research1__image">
                        @if($res->cover_image )
                        <img src="{{asset($res->cover_image )}}"
                             alt="Constitutional Law Research"
                             loading="lazy">
                        @else 
                            <img src="{{asset('contents/website/assets/images/avater.gif')}}" alt="{{$res->title ?? ''}}" loading="lazy">
                        @endif
                        <span class="research1__category">
                           {{$res->type ?? ''}}
                        </span>

                        <span class="research1__bookmark">
                            <i class="bi bi-bookmark"></i>
                        </span>

                        <span class="research1__index">
                        {{ $loop->iteration }}
                        </span>
                    </div>


                    <div class="research1__body">

                        <div class="research1__meta">
                            <span>
                                <i class="bi bi-calendar3"></i>
                               {{$res->created_at->format('d-m-Y')}}
                            </span>

                          
                        </div>

                        <h3>
                            {{$res->title ?? ''}}
                        </h3>

                        <p>
                           {{$res->short_des ?? ''}}
                        </p>


                        <div class="research1__bottom">

                            <div class="research1__author">
                                <span>
                                    <i class="bi bi-person"></i>
                                </span>

                                <div>
                                    <small>Research By</small>
                                    <strong>Research Team</strong>
                                </div>
                            </div>

                            @if(!empty($client->button_url))
                            <a href="{{$button_url  ?? '#'}}" class="research1__arrow">
                                <i class="bi bi-arrow-up-right"></i>
                            </a>
                            @else 
                             <a href="{{route('details.research',[$res->id,$res->url])}}" class="research1__arrow">
                                <i class="bi bi-arrow-up-right"></i>
                            </a>
                            @endif

                        </div>

                    </div>

                </article>
            </div>
           @endforeach

        </div>
    </div>
</section>
@endif