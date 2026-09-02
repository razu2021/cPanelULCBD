@if(!empty($contents) && $contents->count() > 0)
<section class="legalStats11">
    <div class="container">
        <div class="legalStats11__grid">
            @foreach ($contents->take(4) as $stat)
                <div class="legalStats11__item">
                    <div class="legalStats11__count">
                        <span  class="legalStats11__number" data-count="{{ $stat->count ?? 0 }}" > 0 </span>
                    </div>
                    <h3>{{ $stat->title ?? '' }}</h3>
                    <p> {{ $stat->short_des ?? '' }}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endif
<script>
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(
        ".legalStats11__number"
    );
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.count) || 0;
        const duration = 1800;
        const startTime = performance.now();
        const update = (currentTime) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );
            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(
                target * easedProgress
            );
            counter.textContent =
                currentValue.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent =
                    target.toLocaleString();
            }
        };
        requestAnimationFrame(update);
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
            threshold: 0.4
        }
    );
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
</script>