@php 
    $words = explode(' ' ,$data->section_heading ?? ' Sections Heading Defualt');
    $lastword = array_pop($words);
    $first = implode(' ' , $words);
    $date = now();
@endphp

<div class="section-head-ultimate text-center">
    <div class="head-icons">
        <div class="icon-circle c-1"><i class="bi bi-rocket-takeoff"></i></div>
        <div class="icon-circle c-2"><i class="bi bi-globe-americas"></i></div>
    </div>

    <div class="ultimate-badge">
        <span class="pulse-ring"></span>
        <span class="text">{{$data->section_title ?? 'Defualt Section Title'}}</span>
    </div>

    <h2 class="main-title">
        {{ $first ?? '' }} <br>
        <span class="highlight-wrapper">
            <span class="text-mask">{{$lastword ?? ''}}</span>
            <svg class="title-underline" viewBox="0 0 400 20" preserveAspectRatio="none">
                <path d="M0,10 C100,20 300,0 400,10" stroke-width="6" fill="none" />
            </svg>
        </span>
    </h2>

    <div class="desc-wrapper">
        <p class="description">
        {{ Str::words($data->description,25 ?? '') }}
        </p>
    </div>

    <div class="head-footer-graphics">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot main"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
</div>