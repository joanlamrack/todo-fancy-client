Vue.component("todo-pages", {
	template: `
		<sign-in v-if="notloggedin"></sign-in>
		<todo-content v-else></todo-content>
	`,
	data: function() {
		return {
			notloggedin: true
		};
	},
	methods: {
		
		FBLogin() {},
		addTodo() {},
		removeTodo() {},
		editTodo() {}
	}
});
