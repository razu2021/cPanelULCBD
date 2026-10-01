# How to make file inside the folder

- php artisan make:model "App\Domains\Chatbot\Models\Warehouse" -m 
- php artisan make:export "App/Domains/Chatbot/Export/ChatbotIntentExport" --model="App/Domains/Chatbot/Models/ChatbotIntent"
- php artisan make:request "App\Domains\Chatbot\Request\WarehouseRequest" 
- php artisan make:controller "App\Domains\Chatbot\Controller\StockManagementController"