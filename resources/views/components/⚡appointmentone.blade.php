<?php

use Livewire\Component;
use Livewire\Attributes\Validate;
use App\Services\clientData\usercontactService;
new class extends Component
{
        /**
     * ==============================================================
     * user input data 
     * ==============================================================
    */
    #[Validate('required|string|min:3|max:50')]
    public $name='';
    #[Validate('required|email')]
    public $email='';
    #[Validate('required|string|min:5|max:20')]
    public $phone='';
    #[Validate('required|string|max:30')]
    public $service='';
    #[Validate('required|date|after_or_equal:today')]
    public $date='';
    #[Validate('required|string|max:30')]
    public $time='';
    #[Validate('required|in:online,in_person')]
    public $type='';
   #[Validate('required|string|min:10|max:500')]
    public $short_des='';


    /**
     * ==============================================================
     *  this function will use for live validation of user input data
     * ==============================================================
    */  

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }



    public function submitAppointmenttForm(usercontactService $usercontactService){
        $validateData = $this->validate();
        $sanitizedData = array_map(fn($item) => is_string($item) ? strip_tags($item) : $item, $validateData);

        try{

      
        $data = $usercontactService->storeAppointmentFormData($sanitizedData);
            if($data){
                $this->reset();
                session()->flash('form_success', 'Success! Your message has been sent successfully!');
            }

        }catch(\Exception $e){
            $this->addError('form_error', 'Something went wrong. Please try again later.');
        }

    }

};
?>

<div>
    <form wire:submit="submitAppointmenttForm" class="appointment-form">
           {{-- ১. সাকসেস মেসেজ (Session Flash) --}}
        @if (session()->has('form_success'))
            <div class="alert alert-success alert-dismissible fade show mb-4" role="alert" style="color: #155724; background-color: #d4edda; border-color: #c3e6cb; padding: 12px 20px; border-radius: 6px;">
               {{ session('form_success') }}
            </div>
        @endif

        {{-- ২. গ্লোবাল এরর মেসেজ (addError দিয়ে যা সেট করেছেন) --}}
        @error('form_error')
            <div class="alert alert-danger mb-4" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb; padding: 12px 20px; border-radius: 6px;">
                <strong>Error!</strong> {{ $message }}
            </div>
        @enderror

        {{-- Error Alert --}}
        @error('form_error') 
            <div class="form-alert" role="alert">
                <i class="bi bi-exclamation-triangle-fill"></i>
                <span>{{ $message }}</span>
            </div> 
        @enderror
    <div class="row g-3">
        <!-- Full Name -->
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label">Full Name *</label>
                <div class="input-wrapper">
                    <i class="bi bi-person input-icon"></i>
                    <input type="text" wire:model.blur="name" name="name" class="form-control" placeholder="John Doe" >
                </div>
                @error('name') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Phone Number -->
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label">Phone Number *</label>
                <div class="input-wrapper">
                    <i class="bi bi-telephone input-icon"></i>
                    <input type="text"  wire:model.blur="phone" name="phone" class="form-control" placeholder="+880 1700-000000" >
                </div>
                @error('phone') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>
        {{-- email --}}
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label">Email *</label>
                <div class="input-wrapper">
                    <i class="bi bi-envelope input-icon"></i>
                    <input type="email"  wire:model.blur="email" name="email" class="form-control" placeholder="example@gmail.com" >
                </div>
                @error('email') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Legal Practice Area -->
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label">Service Area *</label>
                <div class="input-wrapper">
                    <i class="bi bi-briefcase input-icon"></i>
                    <select name="practice_area" class="form-select"  wire:model.blur="service">
                        <option value="" selected disabled>Select Practice Area</option>
                        <option value="Legal_matters">Legal Metterrs</option>
                        <option value="immigration_matters">Immigration Metterrs</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                @error('service') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Preferred Date -->
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label">Preferred Date *</label>
                <div class="input-wrapper">
                    <i class="bi bi-calendar-event input-icon"></i>
                    <input type="date" name="appointment_date" class="form-control"  wire:model.blur="date">
                </div>
                @error('date') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>
        {{-- time --}}
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label"> Select Appointment Time *</label>
                <div class="input-wrapper">
                    <i class="bi bi-clock input-icon"></i>
                    <select name="practice_area" class="form-select"  wire:model.blur="time">
                        <option value="" selected disabled>Select Appointment Time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                    </select>
                 
                </div>
                   @error('time') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>
        {{-- select appoinment type --}}
        <div class="col-12 col-md-12">
            <div class="input-group-custom">
                <label class="form-label"> Select Appointment Type *</label>
                <div class="input-wrapper">
                    <i class="bi bi-view-list input-icon"></i>
                    <select name="practice_area" class="form-select"  wire:model.blur="type">
                        <option value="" selected disabled>Select Appointment Time</option>
                        <option value="in_person">In-Person </option>
                        <option value="online">Virtual Counselling via the (Online Platform) </option>
                        
                    </select>
                  
                </div>
                  @error('type') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>



        <!-- Brief Message -->
        <div class="col-12">
            <div class="input-group-custom">
                <label class="form-label">Case Details / Brief Summary</label>
                <div class="input-wrapper align-items-start">
                    <i class="bi bi-chat-left-text input-icon mt-2"></i>
                    <textarea name="message"  wire:model.blur="short_des" class="form-control" rows="3" placeholder="Briefly describe your legal inquiry..."></textarea>
                </div>
                @error('short_des') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Submit Button -->
        <div class="col-12 mt-4">
            <button type="submit" class="btn-submit w-100"  wire:loading.attr="disabled">
                <span wire:loading.remove wire:target="submitAppointmenttForm">Confirm Appointment <i class="bi bi-arrow-right-short"></i></span>
                
                 {{-- Loading State --}}
                    <span wire:loading.inline-flex wire:target="submitAppointmenttForm" class="btn-content">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Sending...
                    </span
            </button>
        </div>
    </div>
</form>
</div>