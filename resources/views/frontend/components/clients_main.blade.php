@if(!empty($contents) && $contents->count() > 0)


<section class="clients-section section-padding">
    <div class="container">

        <!-- Section Header -->
        <div class="clients-section__header">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading5',['data' => $sectionsdata,])
        <!-- section heading end here  -->
        </div>
        <!-- Clients Grid -->
        <div class="row g-4">

            <!-- Client Card -->
            @foreach ($contents as $client)
            <div class="col-12 col-md-6 col-xl-4">
                <article class="client-card">

                    <div class="client-card__image">
                        @if($client->cover_image )
                        <img src="{{asset($client->cover_image)}}"alt="Corporate Legal Case" loading="lazy">
                          @else
                        <img src="{{asset('contents/website/assets/images/avater.gif')}}" alt="Client">
                        @endif
                        <span class="client-card__category">
                            {{ $client->type ?? '' }}
                        </span>
                    </div>

                    <div class="client-card__content">

                        <div class="client-card__meta">
                            <span>
                                <i class="bi bi-person"></i>
                               {{ $client->name ?? '' }}
                            </span>

                            <span>
                                <i class="bi bi-calendar3"></i>
                               {{ $client->created_at->format('Y') }}
                            </span>
                        </div>

                        <h3 class="client-card__title">
                            {{ $client->case_title ?? '' }}
                        </h3>

                        <p class="client-card__description">
                            {{ Str::words($client->short_des ?? ''  , 20 ) }}
                        </p>

                      @if(!empty($client->button_url))
                            <a href="{{ $client->button_url }}" class="client-card__btn" target="_blank">
                                View Case
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        @else 
                            <a href="{{ route('details.clients', [$client->id, $client->url]) }}" class="client-card__btn">
                                View Case
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        @endif

                    </div>
                </article>
            </div>
           @endforeach
            <!-- Client Card -->
        </div>
    </div>
</section>
@endif
