    <header>
        @if($manageheader->isNotEmpty())
            @foreach ($manageheader as $headers)
                @includeIf('frontend.manageheader.'.$headers->theme ?? 'main_header')
            @endforeach
        @else
            @includeIf('frontend.manageheader.main_header_defualt')
        @endif
    </header>
