@if ($analitics->isNotEmpty())
{{-- ========== get specific data form cache ====== --}}
@php
    $gtm_id = $analitics->where('key','google_tag_manager')->value('value') ?? null ;
    $footer_scripts = $analitics->where('key','custom_footer_script')->value('value') ?? null ;
@endphp

{{-- ======== Start Google Tag Manager (noscript) ======== --}}
@if ($gtm_id)
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{$gtm_id}}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
@endif
{{-- ======= end End Google Tag Manager (noscript) ====== --}}

@if ($footer_scripts)
    @php
        $script = trim($footer_scripts);
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