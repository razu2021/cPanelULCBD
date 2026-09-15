@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $contents->first();
@endphp
<section class="breadcrumb8" style="background-image: url('{{ asset($data->thumbnail ?? '') }}')">
    <div class="breadcrumb8__overlay"></div>

    <div class="breadcrumb8__glow breadcrumb8__glow--one"></div>
    <div class="breadcrumb8__glow breadcrumb8__glow--two"></div>

    <div class="breadcrumb8__line breadcrumb8__line--one"></div>
    <div class="breadcrumb8__line breadcrumb8__line--two"></div>

    <div class="container">
        <div class="breadcrumb8__wrapper">

            <!-- Page Heading -->
            <div class="breadcrumb8__content">

                <div class="breadcrumb8__eyebrow">
                    <span></span>
                    <small>{{$data->title ?? ''}}</small>
                    <span></span>
                </div>

                <h1 class="breadcrumb8__title">
                    {{$data->heading ?? ''}}
                </h1>

                <p class="breadcrumb8__description">
                    {{$data->short_des ?? ''}}
                </p>

            </div>

        </div>
    </div>

    <!-- Bottom Decoration -->
    <div class="breadcrumb8__bottom">
        <span></span>
    </div>
</section>

@endif