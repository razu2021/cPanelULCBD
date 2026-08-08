<div class="sectionheading4">
    <div class="container">
        <div class="heading-wrapper">
            <div class="accent-line"></div>
            <div class="content-left">
                <span class="head-label">{{$data->section_title ?? 'Defualt Section Title !'}}</span>
                <h2 class="main-title">
                    {{$data->section_heading ?? 'Defualt Section Heading'}}
                </h2>
                <p class="description">
                    {{Str::words($data->description,25 ?? 'Section short Description')}}
                </p>
            </div>
        </div>
    </div>
</div>