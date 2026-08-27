@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $banner ?? $contents->first();
@endphp

<section class="legal-breadcrumb">
    <div class="container">
        <div class="legal-breadcrumb__inner">

            <div class="legal-breadcrumb__content">

                <span class="legal-breadcrumb__eyebrow">
                    <i class="bi bi-bank2"></i>
                    {{$data->title ?? ''}}
                </span>

                <h1 class="legal-breadcrumb__title">
                    {{$data->heading ?? 'Banner Heading'}}
                </h1>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb legal-breadcrumb__nav">

                        <li class="breadcrumb-item">
                            <a href="{{route('index')}}">
                                <i class="bi bi-house-door"></i>
                                Home
                            </a>
                        </li>

                       


                    </ol>
                </nav>

            </div>

            <div class="legal-breadcrumb__symbol">
                <div class="legal-breadcrumb__symbol-circle">
                    <i class="bi bi-bank2"></i>
                </div>

                <span class="legal-breadcrumb__line"></span>
                <span class="legal-breadcrumb__dot"></span>
            </div>

        </div>
    </div>
</section>

@endif