@if(!empty($contents) && $contents->count() > 0)
<section class="faq9">
    <div class="container">
        <div class="faq9__header">
            <div class="faq9__heading-wrap">
                <span class="faq9__eyebrow">
                    <i class="bi bi-patch-question-fill"></i>
                  {{$sectionsdata->section_title ?? 'Have Questions?'}}
                </span>

                <h2 class="faq9__title">
                    {{$sectionsdata->section_heading ?? ''}}
                    {{-- <span>Important Questions</span> --}}
                </h2>

                <p class="faq9__description">
                    {{$sectionsdata->description ?? ''}}
                </p>
            </div>

            
        </div>
      
        <div class="row g-4">
            <!-- FAQ 01 -->
        <div class="col-lg-12">
            <div class="faq9__search">
                <div class="faq9__search-box">
                    <i class="bi bi-search faq9__search-icon"></i>

                    <input
                        type="search"
                        wire:model.live="search"
                        class="faq9__search-input"
                        placeholder="Search your question..."
                        aria-label="Search FAQ"
                    />
                </div>

                <p class="faq9__search-hint">
                    Search by legal topic, service, dispute or consultation.
                </p>
            </div>
        </div>
        @foreach ($contents as $faq)
            <div class="col-lg-6">
                <div class="faq9__item" data-bs-toggle="modal" data-bs-target="#{{$faq->id}}">
                    <div class="faq9__number">{{$loop->iteration}}</div>

                    <div class="faq9__content">
                        <h3>{{ $faq->title ?? '' }}</h3>
                        <p>
                            {{ Str::words($faq->short_des ?? '' , 20) }}
                        </p>
                    </div>

                    <div class="faq9__arrow">
                        <i class="bi bi-arrow-up-right"></i>
                    </div>
                </div>
            </div>
            @endforeach
            <!-- FAQ 02 -->
        </div>
    </div>
</section>


<!-- Modal 01 -->
 @foreach ($contents as $faq)
<div class="modal fade faq9__modal" id="{{$faq->id}}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable  modal-lg">
        <div class="modal-content">

            <div class="faq9__modal-header">
                <div class="faq9__modal-icon">
                    <i class="bi bi-patch-question-fill"></i>
                </div>

                <button type="button" class="faq9__modal-close" data-bs-dismiss="modal">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>

            <div class="faq9__modal-body">
                <span class="faq9__modal-number">{{$loop->iteration}}</span>

                <h2>{{$faq->title ?? ''}}</h2>

                <p>
                    {{$faq->short_des ?? ''}}
                </p>

                @if($faq->description)
                <div class="content-editor">
                    {!! $faq->description ?? '' !!}
                </div>
                @endif

             
            </div>
        </div>
    </div>
</div>
@endforeach
@endif


