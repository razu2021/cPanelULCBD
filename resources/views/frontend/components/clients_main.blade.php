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
            @foreach ($contents->take(1) as $client)
            <div class="col-12 col-md-6 col-xl-4">
                <article class="client-card">

                    <div class="client-card__image">
                        <img src="https://i.pinimg.com/1200x/c4/b6/72/c4b672f729340e5358397a125bd0f7be.jpg"
                             alt="Corporate Legal Case"
                             loading="lazy">

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

                        {{-- <a href="#" class="client-card__btn">
                            View Case
                            <i class="bi bi-arrow-right"></i>
                        </a> --}}

                    </div>
                </article>
            </div>
           @endforeach

            <!-- Client Card -->
           

          

        </div>
    </div>
</section>

@endif
