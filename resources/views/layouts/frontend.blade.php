<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{asset($siteinfo->cover_image ?? '')}}" type="image/x-icon" style="border-radius:20%">
    <title>@yield('meta_title', config('app.name'))</title>
    <meta name="description" content="@yield('meta_description', 'Default website description')">
    @yield('seocontent')
    {{-- ============= include header section ================== --}}
        @includeIf('frontend.manage.style.style')
    {{-- ============= include header section ================== --}}
    {{-- ============= include header section ================== --}}
        @includeIf('frontend.manage.header.analitics')
    {{-- ============= include header section ================== --}}
</head>
<body>
@includeif('frontend/components/ui/announcement')


<div class="snake-scroll-wrapper">
    <div class="snake-icon-root">
        <div class="ball-3d-box">
            <div class="globe-content">
                <i class="fas fa-globe"></i> 
            </div>
            <div class="ball-reflection"></div>
        </div>
    </div>
</div>
<div id="cursor-ripple-container"></div>

    {{-- ============= include header section ================== --}}
        @includeIf('frontend.manage.preloader.preloader')
    {{-- ============= include header section ================== --}}
    

    {{-- ============= include header section ================== --}}
        @includeIf('frontend.manage.header.header')
        @includeIf('frontend.manageheader.mobile_sidebar')
    {{-- ============= include header section ================== --}}

    {{-- =================  all content load here -============= --}}
        @yield('web_content')
    {{-- =================  all content load here -============= --}}

    {{-- ================= include footer section ============== --}}
        @includeIf('frontend.manage.footer.footer')
    {{-- ================= include footer section ============== --}}

    {{-- ================= include footer section ============== --}}
        @includeIf('frontend.manage.script.script')
    {{-- ================= include footer section ============== --}}
    {{-- ================= include footer section ============== --}}
        @includeIf('frontend.manage.footer.footer_analitics')
    {{-- ================= include footer section ============== --}}
<div class="progress-wrap">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
    <div class="arrow-icon">
        <i class="bi bi-chevron-up"></i> 
    </div>
</div>
</body>
</html>