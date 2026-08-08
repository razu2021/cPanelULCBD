@if(!empty($announcements) && $announcements->count() > 0)
@if($announcements->type == 'header')
<div class="announcement-bar d-flex align-items-center">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 text-center position-relative">
                <div class="announcement-content">
                    <span class="badge-new">New</span>
                    <p class="announcement-text">
                        {{ $announcements->description ?? 'Discover new Offers !' }}
                       
                    </p>
                </div>
                <button class="close-announcement" onclick="this.parentElement.parentElement.parentElement.parentElement.style.display='none'">
                    <i class="bi bi-times"></i>
                </button>
            </div>
        </div>
    </div>
</div>
@endif
@endif