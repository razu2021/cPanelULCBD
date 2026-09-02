@if(!empty($contents) && $contents->count() > 0)
<section class="achievement10">
    <div class="achievement10__ornament achievement10__ornament--top"></div>
    <div class="achievement10__ornament achievement10__ornament--bottom"></div>
    <div class="container">
        <div class="row align-items-center g-5">
            {{-- Left Content --}}
            <div class="col-lg-4">
                <div class="achievement10__intro">
                    <span class="achievement10__label">
                        <span></span>
                        {{$sectionsdata->section_title ?? 'Achivements'}}
                    </span>
                    <h2>
                       {{$sectionsdata->heading ?? 'Our Achievements'}}
                    </h2>
                    <p>{{$sectionsdata->short_des ?? ''}}</p>
                </div>
            </div>
            {{-- Right Statistics --}}
            <div class="col-lg-8">
                <div class="achievement10__stats">
                    @foreach ($contents->take(4) as $key => $achivment)
                        <div class="achievement10__stat">
                            <div class="achievement10__stat-number">
                                <span
                                    class="achievement10__count"
                                    data-count="{{ $achivment->count ?? 0 }}"> 0
                                </span>
                            </div>
                            <div class="achievement10__stat-info">
                                <span class="achievement10__stat-index">
                                    {{ $loop->iteration }}
                                </span>
                                <div>
                                    <h3>{{ $achivment->title ?? '' }}</h3>
                                    <p>{{ $achivment->short_des ?? '' }}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
@endif

<script>
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".achievement10__count");
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.count) || 0;
        const duration = 1800;
        const startTime = performance.now();
        const update = (currentTime) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(
                target * eased
            ).toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);

                observer.unobserve(entry.target);
            }
        });

    }, {
        threshold: 0.35
    });
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
</script>