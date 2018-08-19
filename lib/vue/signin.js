Vue.component("sign-in",{
	template:`
	<div v-if="signup" class="signIn col-lg-4 col-md-6 col-sm-8 col-xs-12">
		<img src="./assets/img/logo.png">
		<form>
			<h2>SignUp</h2>
			<div class="form-group">
				<label for="exampleInputEmail1">Name</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name">
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
			</div>
			<button type="submit" class="btn btn-info">Submit</button>
			<a @click="switchSign">Have Account? Sign In</a>
		</form>
	</div>
	<div v-else class="signIn col-lg-4 col-md-6 col-sm-8 col-xs-12">
		<img src="./assets/img/logo.png">
		<form>
			<h2>SignIn</h2>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
			</div>
			<button type="submit" class="btn btn-info">Submit</button>
			<a @click="switchSign">Didn't Have Account? Sign up</a>
		</form>
	</div>
	`,
	data:function(){
		return{
			signup:true
		};
	},
	methods:{
		switchSign:function(){
			if(this.signup) this.signup=false;
			else this.signup=true;
		}
	}
})