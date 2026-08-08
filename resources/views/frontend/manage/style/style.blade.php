
    <link href="{{asset('contents/website/assets/css/bootstrap.min.css')}}" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <link href="{{asset('contents/website/assets/css/swiper.min.css')}}" rel="stylesheet"/>
        <script src="{{ asset('contents/website/assets/js/swiper.min.js') }}"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"/>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>

    <link href="{{asset('contents/website/assets/css/style.css')}}" rel="stylesheet"/>
    <link href="{{asset('contents/website/assets/sass/main.css')}}" rel="stylesheet" />



    {{-- custom script add=  --}}
    @if(!empty($customscript['header_script']))
    <script>
    {!! $customscript['header_script'] !!}
    </script>
    @endif
    {{-- === custom css load here === --}}
    @if(!empty($customcss))
    <style>{!! $customcss !!}</style>
    @endif
