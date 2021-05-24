<h1>Edit details</h1>
<form action="/edit" method="POST">
@csrf
<input type="hidden" name="id" value="{{$data['id']}}">
<input type="text" name="name" value="{{ $data['name']}}"><br><br>
<input type="email" name="email" value="{{ $data['email']}}"><br><br>
<input type="password" name="password" value="{{ $data['password']}}"><br><br>

<button type="submit">Update</button>
</form>