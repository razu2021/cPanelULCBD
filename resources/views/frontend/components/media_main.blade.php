@if(!empty($contents) && $contents->count() > 0)

<section class="midia1">
    <div class="container">

        <div class="midia1__header">
            <div>
                <span class="midia1__eyebrow">
                    <i class="bi bi-camera"></i>
                  {{$sectionsdata->section_title ?? 'Section Title '}}
                </span>

                <h2 class="midia1__title">
                    <span>{{$sectionsdata->section_heading ?? 'Section Heading'}}</span>
                </h2>
            </div>

            
        </div>


        <div class="row g-4">

            <!-- Media Card -->
              @foreach ($contents as $media)
                
            
            <div class="col-12 col-md-4">
                <a href="{{route('details.media',[$media->id,$media->url])}}" class="midia1__card">

                    <div class="midia1__image">
                        @if($media->cover_image)
                        <img src="{{asset($media->cover_image)}}"
                             alt="{{$media->title ?? ''}} Media"
                             loading="lazy">
                        @else 
                            <img src="{{asset('contents/website/assets/images/avater.gif')}}" alt="{{$res->title ?? ''}}" loading="lazy">
                        @endif

                        <div class="midia1__overlay"></div>

                        <span class="midia1__number">
                           {{$media->type ?? ''}}
                        </span>

                       
                            <span class="midia1__icon">
                                
                            <i class="bi bi-arrow-up-right"></i>
                             
                            </span>
                       

                        <h3>
                           {{$media->title ?? ''}}
                        </h3>
                    </div>

                </a>
            </div>
  @endforeach


           

         
        </div>

    </div>
</section>
@endif