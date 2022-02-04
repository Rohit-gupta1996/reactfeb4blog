import React,{Component} from 'react'
import axios from 'axios'
class PostForm extends Component{
    constructor(props){
    super(props)
    this.state={
        userID: '',
        title:'',
        body:''

    }
}
changeHandler = event=>{
this.setState({[event.target.name]:event.target.value})
}
submitHandler =event =>
{
    event.preventDefault()
    console.log(this.state)
    
    axios
    .post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response =>{
        console.log(response)
        
    })
    .catch(error =>{
        console.log(error)
    })
}
render(){
    const {userID,title,body} = this.state
    return(
        <div>
            <form onSubmit={this.submitHandler}>
            <div>
                <label>
                    USERID:
                     </label>
                    <input type="text" name= "userID" placeholder="userid" value={userID} onChange={this.changeHandler}/>
               
                </div>
                <div>
                <label>
                    TITLE:
                    </label>
                    <input type="text" name= "title" placeholder="title" value={title} onChange={this.changeHandler}/>
                
                </div>
                <div>
                <label>
                    BODY:
                    </label>
                    <input type="text" name= "body" placeholder="body" value={body} onChange={this.changeHandler}/>
                

            </div>
            <input  type ="submit" value ="submit"/>

            </form>
            
        </div>
        
    )
    
}
}
export default PostForm;