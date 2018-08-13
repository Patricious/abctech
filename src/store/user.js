/**
*
*/

import fb from './fb'
import firebase from './firebase'
import store from 'store2'

const user = {
	  state: {
        authenticated: false,
        authError: null,
		currentUser: null,
		signError: 0
    },
    plugins: [],
    mutations: {
        AuthUser(state) {
            state.authenticated = true
            state.authError = null
        },
        AuthError(state, e) {
            state.authError = e
			state.signError += state.signError
			if(state.currentUser){state.currentUser = null}     
			if(state.authenticated){state.authenticated = false}  
        },
		AddUser(state,email){
			state.currentUser = email
			state.authenticated = true
			store('ce',email)
			console.log(email)
		},
		DelUser(state){
			state.currentUser = null
		},
		PostUser(state,{email,password,username, idNumber, firstName, surname, dob, policy}){
			if(state.signError > 0){
				
			} else {fb.postUser(email,password,username, idNumber, firstName, surname, dob, policy);}
		},
		SignError(state,data){
			state.signError = data
		}
    },
    actions: {
    signin({commit}, { email, password}){
	 fb.si_Email(email, password)
        },
    signup({ commit }, {email, password,username, idNumber, firstName, surname, dob, policy}) {
	try{
		fb.signUp(email,password)
		setTimeout(() => {
	commit({
		type:'PostUser',
		email: email,
		password:password,
		username: username,
		idNumber: idNumber,
		firstName: firstName,
		surname: surname,
		dob: dob,
		policy: policy
	});
	commit('AddUser',email)
		},3000) //was 4000		
	} catch(error){console.log(error); commit('signError')}     
	
        },
		loginError({commit}){
		commit('AuthError')
		},
		isAuth({commit}){
        fb.isSignedIn()
		console.log(fb.isSignedIn())
		},
		acGetUser({commit}){			
		fb.getUsername(null);
		},
		acPostUser({commit},{email, password,username}){
		fb.postUser(email);
		},
		acSignError({commit},data){
		commit('SignError',data)
		},
		isSignedIn: function(){
			return (firebase.auth().currentUser!==null);	
	    },
		acUserN({commit},data){
		store('ce', data)
		fb.getUsername(data)			
	},
		acGetAllUsers(){
    	return fb.getAllUsers();
		}
    }    
}

export default user