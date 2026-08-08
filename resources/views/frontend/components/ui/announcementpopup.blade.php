@if(!empty($announcements) && $announcements->count() > 0)
@if($announcements->type == 'popup')
<div class="modal fade" id="announcementModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content announcement-popup-content">
            <button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
                <i class="bi bi-x-octagon-fill"></i>
            </button>

            <div class="modal-body p-0">
                <div class="popup-grid">
                    <div class="popup-header">
                        <div class="geometric-shape"></div>
                        <i class="bi bi-gift popup-icon"></i>
                    </div>
                    <div class="popup-body-content text-center px-4 pb-5">
                        <h2 class="popup-title">{{$announcements->heading ?? 'Exclusive Offers !'}}</h2>
                        <p class="popup-text">
                            {{ $announcements->description ?? '' }}
                        </p>
                        
                        <div class="promo-code-box mb-4">
                            <img src="{{ asset($announcements->thumbnail ?? 'https://i.pinimg.com/736x/c4/9e/15/c49e159a6c5e316ad29f43fb002fb7e3.jpg') }}" alt="">
                        </div>

                        <div class="d-grid gap-2">
                          
                            <button type="button" class="btn-popup-link" data-bs-dismiss="modal">Maybe Later</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var myModal = new bootstrap.Modal(document.getElementById('announcementModal'));
        // 1.5 second delay por popup ashbe
        setTimeout(function() {
            myModal.show();
        }, 1500);
    });
</script>
@endif
@endif
