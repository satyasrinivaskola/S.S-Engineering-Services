import react from 'react'
import axios from 'axios'
class Post333  extends react.Component
{
    constructor(props){
        super(props)
        this.state={
            posts :[]
        }
    }
    //
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        console.log(response)
        this.setState({posts:response.data})
    })
    .catch(error =>{
        console.log("i am getting error")
    })
  }
    render(){
        const {posts}= this.state
        return(
            <div>hello 
            {posts.length ? posts.map(
                posts=><div key ={posts.userid}>{posts.title +posts.userid}</div>
            ):null}
            </div>
        )
    }
}
export default Post333