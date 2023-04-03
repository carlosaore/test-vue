import { defineStore } from "pinia";

const initialState = {
	comments: [
		{
			id: "randomid1",
			"comment": "This is a comment",
			"author": "John Doe",
			"date": "2021-01-01",
			"likes": 3,
			"dislikes": 4,
		},
		{
			id: "randomid2",
			"comment": "This is another comment",
			"author": "Jane Doe",
			"date": "2021-01-01",
			"likes": 1,
			"dislikes": 8,
		}
	]
}

export const useCommentsStore = defineStore(
	"CommentsStore",
	{
		state: () => ({
			...initialState
		}),
		actions: {
			/**
			 * Add a comment to the store
			 * @param {Object} comment - The comment to add
			 * @param {string} comment.comment - The comment's text
			 * @param {string} comment.author - The comment's author
			 */
			addComment(comment) {
				const nextId = "randomid" + this.comments.length + 1;
				const date = new Date();
				console.log(comment);
				this.comments.push({
					...comment,
					date: date.toISOString(),
					id: nextId,
					likes: 0,
					dislikes: 0
				});
			},
			removeComment(id) {
				this.comments = this.comments.filter(comment => comment.id !== id);
			},
			likeComment(id) {
				const comment = this.comments.find(comment => comment.id === id);
				// if likes < 8, increment likes
				if (comment.likes < 9) {
					comment.likes++;
				}
			},
			dislikeComment(id) {
				const comment = this.comments.find(comment => comment.id === id);
				// if dislikes < 8, increment dislikes
				if (comment.dislikes < 9) {
					comment.dislikes++;
				}
			}
		},
		getters: {
			getComments() {
				return this.comments;
			},
			getComment(id) {
				return this.comments.find(comment => comment.id === id);
			},
			getCommentsByAuthor(author) {
				return this.comments.filter(comment => comment.author === author);
			},
			getPopularComments() {
				return this.comments.filter(comment => comment.likes > 0);
			},
			getUnpopularComments() {
				return this.comments.filter(comment => comment.dislikes > 0);
			}
		},
	}
)

// The above code uses the Options Store syntax. The following uses the Setup Store syntax:
// import { defineStore } from "pinia";
//
// const initialState = {...}
//
//
// export const useCommentsStore = defineStore("CommentsStore", () => {
// 	const state = reactive({
// 		...initialState
// 	});
//
// 	const addComment = (comment) => {
// 		state.comments.push(comment);
// 	};
//
// 	const removeComment = (id) => {
// 		state.comments = state.comments.filter(comment => comment.id !== id);
// 	};
//
// 	const likeComment = (id) => {
// 		const comment = state.comments.find(comment => comment.id === id);
// 		comment.likes++;
// 	};
//
// 	const dislikeComment = (id) => {
// 		const comment = state.comments.find(comment => comment.id === id);
// 		comment.dislikes++;
// 	};
//
// 	const getComments = () => {
// 		return state.comments;
// 	};
//
// 	const getComment = (id) => {
// 		return state.comments.find(comment => comment.id === id);
// 	};
//
// 	const getCommentsByAuthor = (author) => {
// 		return state.comments.filter(comment => comment.author === author);
// 	};
//
// 	const getPopularComments = () => {
// 		return state.comments.filter(comment => comment.likes > 0);
// 	};
//
// 	const getUnpopularComments = () => {
// 		return state.comments.filter(comment => comment.dislikes > 0);
// 	};
//
// 	return {
// 		state,
// 		addComment,
// 		removeComment,
// 		likeComment,
// 		dislikeComment,
// 		getComments,
// 		getComment,
// 		getCommentsByAuthor,
// 		getPopularComments,
// 		getUnpopularComments
// 	};
// });

// Using the Setup Store syntax is good when more complex logic is needed. If it's a simple store, the Options Store syntax is easier to read.
