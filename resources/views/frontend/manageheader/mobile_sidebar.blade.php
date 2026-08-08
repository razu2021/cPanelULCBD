
{{-- <div class="mobile_side_bar m-3">
    <a href="#" id="exploreBtn"><i class="bi bi-grid-fill"></i> Explore Categories</a>
</div> --}}

@if (!empty($categorys) && $categorys->count() > 0)
<div class="mobile_sidebar_menu" id="mobileSidebarMenu">
    {{-- main category panel --}}
    <div class="menu-panel category-panel active">
        <div class="menu-header d-flex justify-content-between align-items-center">
            <h6>Main Categories</h6>
            <button id="closeSidebar" class="btn btn-sm btn-outline-danger border-0 fs-3">&times;</button>
        </div>
        <ul class="menu-list">
             <li><a href="{{ route('index') }}">Home</a></li>
            @foreach ($categorys as $cate)
            <li>
                <a href="{{ route('categorypage',$cate->url ?? '#') }}">{{ $cate->name ?? '' }}</a>
                @if ($cate->subCategory->count() > 0)
                <span class="toggle-submenu" data-target="subcategory-panel-{{ $cate->slug }}"><i class="bi bi-chevron-right"></i></span>
                @endif
            </li>
            @endforeach
        </ul>
    </div>

    {{-- sub category panel --}}
    @foreach ($categorys as $cate)
    <div class="menu-panel subcategory-panel-{{ $cate->slug }}">
        <div class="menu-header d-flex align-items-center gap-3">
            <button class="back-btn" data-back="category-panel"><i class="bi bi-chevron-left"></i></button>
            <h6>{{ $cate->name ?? '' }}</h6>
        </div>
        <ul class="menu-list">
            @foreach ($cate->subCategory as $subcate)
            <li>
                <a href="{{ route('sub_categorypage',[$cate->url ?? '#',$subcate->url ?? '#']) }}">{{ $subcate->name ?? '' }}</a>
                @if ($subcate->childCategory->count() > 0)
                    <span class="toggle-submenu" data-target="childcategory-panel-{{ $subcate->slug }}"><i class="bi bi-chevron-right"></i></span>
                @endif
            </li>
            @endforeach
        </ul>
    </div> 
    @endforeach

    {{-- child category panel --}}
    @foreach ($categorys as $cate)
    @foreach ($cate->subCategory as $subcate)
    <div class="menu-panel childcategory-panel-{{ $subcate->slug }}">
        <div class="menu-header d-flex align-items-center gap-3">
            <button class="back-btn" data-back="subcategory-panel"><i class="bi bi-chevron-left"></i></button>
            <h6>{{ $subcate->name ?? '' }}</h6>
        </div>
        <ul class="menu-list">
            @foreach ($subcate->childCategory as $childcate)
            <li><a href="{{ route('child_CategoryPage',[$cate->url ?? '#',$subcate->url ?? '#', $childcate->url ?? '#']) }}">{{ $childcate->name ?? '' }}</a></li>   
            @endforeach
        </ul>
    </div>
    @endforeach
    @endforeach
</div>

@endif