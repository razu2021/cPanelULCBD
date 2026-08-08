@if(!empty($contents) && $contents->count() > 0)
<section class="roadmap2">
    <div class="roadmap2__canvas">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <svg class="wave-line" viewBox="0 0 1440 320"><path fill="none" stroke="rgba(0,123,255,0.1)" stroke-width="4" stroke-dasharray="10,10" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128"></path></svg>
    </div>

    <div class="container">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2', ['data' => $sectionsdata,]) 
        <!--section heading end here -->

        <div class="roadmap2__flow">
            @foreach($contents as $roadmap)
            <div class="flow-item">
                <div class="icon-sphere">
                    <i class="{{$roadmap->icon ?? 'bi bi-chat-quote-fill'}}"></i>
                    <div class="pulse-ring"></div>
                </div>
                <div class="content">
                    <span class="no">{{$loop->iteration}}</span>
                    <h4>{{$roadmap->title ?? ''}}</h4>
                    <p>{{$roadmap->short_des ?? ''}}</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endif