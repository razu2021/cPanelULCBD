<?php
use Livewire\Attributes\Validate;
use Livewire\Component;
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
#[Validate('nullable|string|min:5|max:20')]
public $phone='';
#[Validate('required|string|max:100')]
public $subject='';
#[Validate('required|string|max:500')]
public $description='';


/**
 * ==============================================================
 *  this function will use for live validation of user input data
 * ==============================================================
*/  

public function updated($propertyName)
{
    $this->validateOnly($propertyName);
}







/***==============================================================
 * submit contact form 
 * ==============================================================
*/
public function submitContactForm(usercontactService $usercontactService){
    $validateData = $this->validate();
    $sanitizedData = array_map(fn($item) => is_string($item) ? strip_tags($item) : $item, $validateData);
    try{

      
        $data = $usercontactService->storeContactFormData($sanitizedData);

     

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
    <form wire:submit="submitContactForm" class="contact-form">
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
                <label class="form-label">Your Name *</label>
                <div class="input-wrapper">
                    <i class="bi bi-person input-icon"></i>
                    <input type="text" wire:model.blur="name" class="form-control" placeholder="e.g. Raju Ahmed" >
                </div>
                @error('name') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Email Address -->
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label">Email Address *</label>
                <div class="input-wrapper">
                    <i class="bi bi-envelope input-icon"></i>
                    <input type="email" wire:model.blur="email" class="form-control" placeholder="raju@example.com" >
                </div>
                  @error('email') 
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
                    <input type="text" wire:model.blur="phone" class="form-control" placeholder="+880 1700-000000" >
                </div>
                @error('phone') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Subject -->
        <div class="col-12 col-md-6">
            <div class="input-group-custom">
                <label class="form-label">Subject *</label>
                <div class="input-wrapper">
                    <i class="bi bi-tag input-icon"></i>
                    <input type="text" wire:model.blur="subject" class="form-control" placeholder="Inquiry about Legal Consultation" >
                </div>
                @error('subject') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Message Body -->
        <div class="col-12">
            <div class="input-group-custom">
                <label class="form-label">Your Message *</label>
                <div class="input-wrapper align-items-start">
                    <i class="bi bi-pencil-square input-icon mt-2"></i>
                    <textarea wire:model.blur="description" class="form-control" rows="4" placeholder="How can we help you?" ></textarea>
                </div>
                @error('description') 
                    <div class="field-error text-danger"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>
        </div>

        <!-- Submit Button -->
       
        <div class="col-12 mt-4">
        <button type="submit" class="btn-send w-100" wire:loading.attr="disabled">
            {{-- Normal State --}}
            <span wire:loading.remove wire:target="submitContactForm" class="align-items-center justify-content-center gap-2">
                <span>Send Message</span>
                <i class="bi bi-send-fill"></i>
            </span>

            {{-- Loading State (wire:loading.flex স্বয়ংক্রিয়ভাবে flex ও hide পরিচালনা করবে) --}}
            <span wire:loading.flex wire:target="submitContactForm" class="align-items-center justify-content-center gap-2">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span>Sending...</span>
            </span>
        </button>
              
        </div>
    
</form>

</div>