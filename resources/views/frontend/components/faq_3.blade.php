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
      
        {{-- livewire component  --}}
        <livewire:faq_all />

</section>



@endif




