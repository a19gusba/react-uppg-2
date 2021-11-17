function ChatMessage({ data }) {
    return (
        <div className="chat-message">
            <div className="user-info">
                <div className="username">{data.user.username}</div>
                <div className="email"> - {data.user.email}</div>
                <div className="email"> - id: {data.user.id}</div>
            </div>
            <div className="message">
                {data.comment.content}
            </div>
            <div className="like-btn">
                <div className="like-icon-container">
                    <div className="like-icon"></div>
                </div>
                <div className="like-amount">{data.comment.likes}</div>
            </div>
            <div className="date-info">
                {data.comment.date}
            </div>
        </div>
    )
}
