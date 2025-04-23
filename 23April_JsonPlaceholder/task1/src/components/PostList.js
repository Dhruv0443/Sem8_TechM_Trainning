const PostList = ({data, loading,error})=>{
    if(loading) return <p>Loading posts....</p>
    if(error) return <p>Error:{error}</p>
    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map((post)=>(
                    <li key={post.id}>
                        <strong>{post.title} </strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PostList;