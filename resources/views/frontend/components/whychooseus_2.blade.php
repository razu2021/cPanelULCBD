@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents as $key => $whyc)


<section class="whyChoose whyChoose7">
    <div class="whyChoose7__pattern"></div>

    <div class="container">

        {{-- Section Header --}}
        <div class="row justify-content-center text-center">
            <div class="col-lg-8">
                <div class="whyChoose7__header">

                    <span class="whyChoose7__eyebrow">
                        <i class="bi bi-shield-check"></i>
                        {{$whyc->title ?? ''}}
                    </span>

                    <h2>
                        {{$whyc->heading ?? ''}}
                        <span>{{$why->sub_heading ?? ''}}</span>
                    </h2>

                    <p>
                        {{$whyc->short_des ?? ''}}
                    </p>

                </div>
            </div>
        </div>

        {{-- Cards --}}
        <div class="row g-4 mt-4 mt-lg-5">

                @if($whyc)
                @foreach($whyc->features as $feature)
                <div class="col-sm-6 col-lg-4">
                    <div class="whyChoose7__card">

                        <div class="whyChoose7__card-top">

                            <span class="whyChoose7__number">
                                {{ $loop->iteration }}
                            </span>

                            <div class="whyChoose7__icon">
                                <i class="{{$feature->icon}}"></i>
                            </div>

                        </div>

                        <div class="whyChoose7__card-body">

                            <h3>
                                {{ $feature->title ?? '' }}
                            </h3>

                            <p>
                                {{ $feature->short_des ?? '' }}
                            </p>

                           

                        </div>

                        <span class="whyChoose7__card-line"></span>

                    </div>
                </div>
                @endforeach
           @endif

        </div>

    </div>
</section>
 @endforeach
@endif