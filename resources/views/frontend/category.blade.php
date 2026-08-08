@extends('layouts/frontend')
{{-- Meta Title  --}}
@section('meta_title', $category->title ?? '')
@section('meta_description', $category->description ?? '')
{{-- Meta Description  --}}
@section('seocontent')
@if(!empty($category->seo))
    <meta name="keywords" content="{{ $category->seo->meta_keywords }}">
    <meta name="robots" content="{{ $category->seo->meta_robots }}">
    <link rel="canonical" href="{{ $category->seo->canonical_url ?? url()->current() }}">
    <meta property="og:title" content="{{ $category->seo->og_title ?? $category->seo->meta_title }}">
    <meta property="og:description" content="{{ $category->seo->og_description ?? $category->seo->meta_description }}">
    <meta property="og:url" content="{{ $category->seo->og_url ?? url()->current() }}">
    <meta property="og:type" content="{{ $category->seo->og_type }}">
    <meta property="og:locale" content="{{ $category->seo->og_locale }}">
    <meta property="og:image" content="{{ asset('storage/' . $category->seo->seo_image) }}">
    <meta name="twitter:card" content="{{ $category->seo->twitter_card }}">
    <meta name="twitter:title" content="{{ $category->seo->twitter_title ?? $category->seo->meta_title }}">
    <meta name="twitter:description" content="{{ $category->seo->twitter_description ?? $category->seo->meta_description }}">
    <meta name="twitter:image" content="{{ asset('storage/' . $category->seo->seo_image) }}">
    <meta name="pinterest-rich-pin" content="{{ $category->seo->pinterest_rich_pin ?? 'article' }}">
    <meta name="pinterest-description" content="{{ $category->seo->pinterest_description ?? $category->seo->meta_description }}">
    @if($category->seo->structured_data)
    <script type="application/ld+json">
        {!! json_encode($category->seo->structured_data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
    </script>
@endif
@endif
@endsection

<!-- ======= web content ====== -->
@section('web_content')
    @if(!empty($category))
        @foreach ($category->getCategorySection as $sections)
            @includeIf('frontend/components/'.$sections->section_key,['contents' => $sections->contents,'sectionsdata'=>$sections ])   
            {{-- component loaded --}}
        @endforeach
    @endif
@endsection