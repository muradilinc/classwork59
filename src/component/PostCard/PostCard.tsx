import React, {useEffect} from 'react';
import './PostCard.css';

interface Props {
    title: string;
    author: string;
}

const MemoedPostCard: React.FC<Props> = React.memo( function PostCard({title, author}) {
    useEffect(() =>{
        console.log('[POST]');
    }, []);

    return (
        <article className="PostCard">
            <h1>{title}</h1>
            <div className="Info">
                <div className="Author">{author}</div>
            </div>
        </article>
    );
}, (prevProps, nextProps) => {
    return prevProps.title === nextProps.title && prevProps.author === nextProps.author;
});

export default MemoedPostCard;