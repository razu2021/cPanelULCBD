<footer>
    @if($managefooter->isNotEmpty())
        @foreach ($managefooter as $footers)
            @includeIf('frontend.managefooter.'.$footers->theme ?? 'main_footer')
        @endforeach
    @else
        @includeIf('frontend.managefooter.main_footer')
    @endif
</footer>