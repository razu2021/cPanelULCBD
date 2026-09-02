@if(!empty($contents) && $contents->count() > 0)

<section class="achievement9">
    <div class="container">
        <div class="row g-3 g-md-4">
            @foreach ($contents->take(4) as $key => $achivment)
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="achievement9__card">
                        <div class="achievement9__top">
                            <span class="achievement9__number">
                                {{ str_pad($key + 1, 2, '0', STR_PAD_LEFT) }}
                            </span>
                            <div class="achievement9__icon">
                                <i class="{{$achivment->icon ?? 'bi bi-trophy'}}"></i>
                            </div>
                        </div>
                        <div class="achievement9__content">
                            {{-- Counter --}}
                            <div class="achievement9__counter">
                                <span
                                    class="achievement9__count"
                                    data-count="{{ $achivment->count ?? 0 }}">
                                    0
                                </span>
                                @if(!empty($achivment->suffix))
                                    <span class="achievement9__suffix">
                                        {{ $achivment->suffix }}
                                    </span>
                                @endif
                            </div>
                            <h3> {{ $achivment->title ?? '' }}</h3>
                            <p>{{ $achivment->short_des ?? '' }}</p>
                        </div>
                        <span class="achievement9__accent"></span>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endif
<script>
document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".achievement9__count");

    const animateCounter = (counter) => {

        const target = parseInt(counter.dataset.count) || 0;
        const duration = 1800;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth ease-out
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(
                easedProgress * target
            );

            counter.textContent = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(updateCounter);
    };


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.5
        }
    );


    counters.forEach(counter => {
        observer.observe(counter);
    });

});
</script>