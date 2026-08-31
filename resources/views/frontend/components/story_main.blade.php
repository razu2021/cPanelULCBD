@if(!empty($contents) && $contents->count() > 0)
<section class="clintstory1">
    <div class="container">

        <!-- Section Header -->
        <div class="clintstory1__header">
            <div>
                <span class="clintstory1__eyebrow">
                    <i class="bi bi-journal-richtext"></i>
                   {{$sectionsdata->section_title ?? 'Title'}}
                </span>

                <h2 class="clintstory1__title">
                    
                    <span>{{$sectionsdata->section_heading ?? 'Heading'}}</span>
                </h2>
            </div>

            <p class="clintstory1__intro">
                {{$sectionsdata->description ?? 'Description'}}
            </p>
        </div>


        <!-- Stories -->
        <div class="row g-4">

            <!-- Story Card -->
            @foreach ($contents as $story)
                
            <div class="col-12 col-md-6 col-xl-4">
                <article class="clintstory1__card">

                    <div class="clintstory1__image">
                        @if($story->cover_image )
                        <img src="{{asset($story->cover_image)}}"
                             alt="Client story"
                             loading="lazy">

                        @else
                            <img src="{{asset('contents/website/assets/images/avater.gif')}}" alt="{{$res->title ?? ''}}" loading="lazy">
                        @endif
                        <span class="clintstory1__category">
                           {{$story->type ?? ''}}
                        </span>

                        <span class="clintstory1__count">
                           {{$loop->iteration }}
                        </span>
                    </div>

                    <div class="clintstory1__body">

                        <div class="clintstory1__client">
                            <span class="clintstory1__avatar">
                                <i class="bi bi-person"></i>
                            </span>

                            <div>
                                <small>{{$story->sub_heading ?? ''}}</small>
                                <strong>{{$story->heading ?? ''}}</strong>
                            </div>
                        </div>

                        <span class="clintstory1__date">
                            <i class="bi bi-calendar3"></i>
                            {{$story->created_at->format('Y')}}
                        </span>

                        <h3 class="clintstory1__case">
                           {{$story->title ?? ''}}
                        </h3>

                        <p class="clintstory1__description">
                           {{Str::words($story->short_des ?? '' , 30)}}
                        </p>

                        <div class="clintstory1__footer">
                            <span class="clintstory1__status">
                                <i class="bi bi-check-circle-fill"></i>
                                {{$story->sub_title ?? ''}}
                            </span>

                            @if($story->button_url)
                            <a href="{{$story->button_url ?? '#'}}" class="clintstory1__button">
                                Read Story
                                <i class="bi bi-arrow-up-right"></i>
                            </a>
                            @else 
                            <a href="{{route('details.storys',[$story->id,$story->url])}}" class="clintstory1__button">
                                Read Story
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