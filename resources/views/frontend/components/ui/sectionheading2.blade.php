@php 
    $words = explode(' ' ,$data->section_heading ?? ' Sections Heading ');
    $lasetword = array_pop($words);
    $first = implode(' ' , $words);
    $date = now();
@endphp

<div class="sectionheading2 container">
    <div class="row align-items-end">
        <div class="col-lg-8">
            <div class="heading-wrapper">
                <div class="vertical-tag">
                    <span>{{$date->format('d-M-Y')}}</span>
                </div>
                <div class="title-content">
                    <span class="sub-title">{{$data->section_title ?? 'Expertise & Innovation'}}</span>
                    <h2 class="main-title">
                        {{$first ?? 'Crafting Digital'}} <br> 
                        <span class="strok-text">{{$lasetword ?? 'Section Sub Heading'}}</span> 
                    </h2>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="desc-box">
                <p>{{Str::words($data->description, 25 ?? 'Description')}}</p>
                <div class="animated-progress-line">
                    <span class="fill"></span>
                </div>
            </div>
        </div>
    </div>
</div>
