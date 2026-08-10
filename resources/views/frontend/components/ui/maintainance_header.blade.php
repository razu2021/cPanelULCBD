@if($maintainance)
<div class="text-center p-2 bg-warning">
    <h1>{{$maintainance->title ?? ''}}</h1>
    <p>{{$maintainance->description ?? ''}}</p>
</div>
@endif