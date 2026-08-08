@if ($analitics->isNotEmpty())
{{-- ========== get specific data form cache ====== --}}
@php
    $gtm_id = $analitics->where('key','google_tag_manager')->value('value') ?? null ;
    $analitics_id = $analitics->where('key','google_analytics_id')->value('value') ?? null ;
    $meta_pixcel = $analitics->where('key','meta_pixcel')->value('value') ?? null ;
    $hader_scripts = $analitics->where('key','custom_header_script')->value('value') ?? null ;
@endphp
{{-- ======== Start google tag manager ======== --}}
@if ($gtm_id)
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','{{$gtm_id}}');</script>
@endif
{{-- ======= end google tag manager ====== --}}
{{-- Google tag (gtag.js)--}}
@if ($analitics_id)
<script async src="https://www.googletagmanager.com/gtag/js?id={{$analitics_id}}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '{{$analitics_id}}');
</script>
@endif
{{-- end  Google tag (gtag.js)--}}
@if($meta_pixcel)
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src='https://connect.facebook.net/en_US/fbevents.js';
s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script');

fbq('init', '{{ $meta_pixcel}}'); 
fbq('track', 'PageView');
</script>

<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
@endif
{{-- meta pixcel end here  --}}

@if ($hader_scripts)
    @php
        $script = trim($hader_scripts);
    @endphp

    @if (str_contains($script, '<script>'))
        {!! $script !!}
    @else
        <script>
            {!! $script !!}
        </script>
    @endif
@endif
@endif




