export default function EmojiVoting({ id, smile, vote,onVote }) {
    return (
        <div>
            <span
                style={{ fontSize: '2rem', cursor: 'pointer' }}
                onClick={() => onVote(id)}
            >
                {smile}
            </span>
            <span> — {vote} голосів</span>
        </div>
    );
}