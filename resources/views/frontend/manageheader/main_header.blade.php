<section>
    <div class="main_nav">
        <div class="container main_navbar">
            <div class="logo">
                <a href="{{ route('index') }}" class="brand-link">
                    <img src="{{ asset($siteinfo->cover_image ?? 'https://i.pinimg.com/736x/94/bf/04/94bf045dd270a2de69ec53857e0dbc94.jpg') }}" alt="{{$siteinfo->site_name ?? 'Developer'}} logo">
                    <span class="brand-text"> {{$siteinfo->site_name ?? ''}} </span>
                </a>
                 <button class="menu_toggle_btn opensidebar" id="exploreBtn"> <i class="bi bi-list"></i> </button>
            </div>
           
       
            <div class="main_menu">
                <ul>
                    <li><a href="{{ route('index') }}">Home</a></li>
                @if (!empty($categorys) && $categorys->count() > 0)
                 @foreach ($categorys as $cate)
                    @if($cate->is_nav == 1)
                    <li><a href="{{ route('categorypage',$cate->url ?? '#') }}">{{ $cate->name ?? '' }} @if($cate->subCategory->count() > 0) <span> <i class="bi bi-caret-down-fill"></i></span> @endif</a>
                    @endif
                    @if (!empty($cate->subCategory) && $cate->subCategory->count() > 0)
                        <div class="has_subcategory">
                            <ul>
                                @foreach ($cate->subCategory as $subcate)
                                @if($subcate->is_nav == 1)
                                <li><a href="{{ route('sub_categorypage',[$cate->url ?? '#',$subcate->url ?? '#']) }}">{{ $subcate->name ?? '' }}  @if ($subcate->childCategory->count() > 0) <span> <i class="bi bi-chevron-double-right"></i></span> @endif</a>
                                @endif
                                @if (!empty($subcate->childCategory) && $subcate->childCategory->count() > 0)
                                    <div class="has_childcategory">
                                        <ul>
                                            @foreach ($subcate->childCategory as $childcate)
                                                @if($childcate->is_nav == 1)
                                               <li><a href="{{ route('child_CategoryPage',[$cate->url ?? '#',$subcate->url ?? '#', $childcate->url ?? '#']) }}">{{ $childcate->name ?? '' }} </a></li>
                                                @endif
                                               @endforeach
                                        </ul>
                                    </div>
                                    @endif
                                </li>
                                @endforeach
                            </ul>
                        </div>
                        @endif
                    </li>
                    @endforeach
                @endif

                </ul>
            </div>
            {{-- main menu end here  --}}
            <div class="auth_actions">
                <ul>
                    @foreach($categorys->take(2) as $scate)
                    @if($scate->is_nav == 0)
                    <li><a class="btn_appointment" href="{{$scate->url ?? '#'}}">{{$scate->name}}</a></li>
                    @endif
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</section>


