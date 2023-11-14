import {useEffect, useState} from "react";
import './Blog.css';
import {BlogPost} from "../../types";
import MemoedPostCard from "../../component/PostCard/PostCard";

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [showPostFrom, setShowPostForm] = useState(false);
    const togglePostForm = () => setShowPostForm(prevState => !prevState);

    useEffect(() => {
        console.log('[BLOG]');
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);

            if (response.ok) {
                const posts: BlogPost[] = await response.json();
                const newPosts = posts.map((post) => ({
                    ...post,
                    author: 'unknown',
                }));
                setPosts(newPosts);
            }
        };

        void fetchData();
    }, []);

    let postForm = null;

    if (showPostFrom) {
        postForm = (
            <section>
                <p>Posts will here</p>
            </section>
        );
    }

    return (
        <>
            <section className="Posts">
                {
                    posts.map((post) => (
                        <MemoedPostCard author={post.author} key={post.id} title={post.title}/>
                    ))
                }
            </section>
            <button onClick={togglePostForm}>New Posts</button>
            {postForm}
        </>
    );
};
export default Blog;