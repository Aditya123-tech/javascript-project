<h1>Add Member</h1>
<form action="add" method="POST">
@csrf
<input type="text" name="name" placeholder="Enter your name"><br><br>
<input type="email" name="email" placeholder="Enter your email"><br><br>
<input type="password" name="password" placeholder="enter passowrd"><br><br>
<button type="submit">submit</button>
</form>
<img src="{{URL::asset('public/download.png')}" alt="Girl in a jacket" width="500" height="500">