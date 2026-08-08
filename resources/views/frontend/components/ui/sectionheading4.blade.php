@php 
    $words = explode(' ' ,$data->section_heading ?? ' Sections Heading Defualt');
    $lastword = array_pop($words);
    $first = implode(' ' , $words);
    $date = now();
@endphp
<div class="sectionheading3">
    <div class="watermark-text">{{$lastword ?? ''}}</div>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="heading-inner">
                    <div class="glass-badge">
                        <i class="bi bi-cpu-fill"></i>
                        <span>{{$data->section_title ?? 'Defualt Section Title !'}}</span>
                    </div>

                    <div class="title-flex">
                        <h2 class="main-title">
                            {{ $first ?? '' }} <br>
                            <span class="highlight">{{$lastword ?? ''}}</span>
                        </h2>
                        <div class="side-info">
                            <p>{{ Str::words($data->description,25 ?? '') }}</p>
                            <div class="action-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>