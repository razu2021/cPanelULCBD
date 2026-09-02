@if(!empty($contents) && $contents->count() > 0)
@php
    $promot = $contents->first();
@endphp
<section class="storymain">
    <div class="container">

        <div class="storymain__top">
            <div>
                <span class="storymain__tag">
                    <i class="bi bi-stars"></i>
                    {{$sectionsdata->section_title ?? ''}}
                </span>

                <h2 class="storymain__title">
                   {{$sectionsdata->section_heading ?? ''}}
                </h2>
            </div>

            <p class="storymain__intro">
                {{$sectionsdata->description ?? ''}}
            </p>
        </div>


        <!-- Featured Story -->
        <div class="storymain__featured">

            <div class="storymain__featured-image">
                <img src="{{asset($promot->cover_image ?? 'https://i.pinimg.com/1200x/c4/b6/72/c4b672f729340e5358397a125bd0f7be.jpg')}}"
                     alt="Act Legal story"
                     loading="lazy">

                <div class="storymain__featured-overlay"></div>

                {{-- <div class="storymain__featured-badge">
                    <span>EST.</span>
                    <strong>1977</strong>
                </div> --}}

                <div class="storymain__image-caption">
                    <i class="bi bi-camera"></i>
                    {{$promot->sub_title ?? ''}}
                </div>
            </div>


            <div class="storymain__featured-content">

                <span class="storymain__number">01</span>

                <span class="storymain__label">
                   {{$promot->title ?? ''}}
                </span>

                <h3>
                   {{$promot->heading ?? ''}}
                    <span>{{$promot->sub_heading ?? ''}}</span>
                </h3>

                <p>
                   {{$promot->short_des ?? ''}}
                </p>

                <p>
                   {!! $promot->description ?? '' !!}
                </p>

                @if ($promot->button_url)
                <a href="#" class="storymain__button">
                    Discover Our Journey
                    <span>
                        <i class="bi bi-arrow-up-right"></i>
                    </span>
                </a>
                @endif
            </div>

        </div>
    </div>
</section>
@endif