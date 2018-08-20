Vue.component("sign-in", {
	template: `
	<div v-if="signup" class="signIn col-lg-4 col-md-6 col-sm-8 col-xs-12">
		<img src="./assets/img/logo.png">
		<form>
			<h2>SignUp</h2>
			<div class="form-group">
				<label for="exampleInputEmail1">Name</label>
				<input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name">
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
			</div>
			<button @click="signupExec" type="button" class="btn btn-info">Submit</button>
			<a @click="switchSign">Have Account? Sign In</a>
		</form>
	</div>
	<div v-else class="signIn col-lg-4 col-md-6 col-sm-8 col-xs-12">
		<img src="./assets/img/logo.png">
		<form>
			<h2>SignIn</h2>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password"  v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
			</div>
			<button @click="signinExec" type="button" class="btn btn-info">Submit</button>
			<a @click="switchSign">Didn't Have Account? Sign up</a>
		</form>
	</div>
	`,
	data: function() {
		return {
			signup: true,
			email: "",
			name: "",
			password: ""
		};
	},
	methods: {
		clearForm: function() {
			this.email = this.name = this.password = "";
		},
		switchSign: function() {
			this.clearForm();
			this.signup = !this.signup;
		},
		signupExec: function() {
			axios
				.post("http://35.237.231.92/api/auths/signup", {
					email:this.email,
					password:this.password,
					name:this.name
				})
				.then(({ data }) => {
					if (data.message === "success") {
						this.switchSign();
					} else {
						//Warning?
					}
				})
				.catch(err => {
					console.log(err);
				});
			
		},
		signinExec: function() {
			axios
				.post("http://35.237.231.92/api/auths/login", {
					email:this.email,
					password:this.password
				})
				.then(({data}) => {
					if()
				})
				.catch(err => {
					console.log(err);
				});
			
		},
		switchToDashboard: function(){
			this.$emit("switch-to-dashboard",[]);
		}
	}
});
