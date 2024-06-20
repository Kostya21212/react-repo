import React, { useState } from 'react';
const EmojiVoting = () => {
    const [emojis, setEmojis] = useState([
        { emoji: "😊", count: 0 },
        { emoji: "😄", count: 0 },
        { emoji: "😍", count: 0 },
        { emoji: "😂", count: 0 }
    ]);

    const [showResults, setShowResults] = useState(false); // State для отображения результатов

    const vote = (index) => {
        const updatedEmojis = [...emojis];
        updatedEmojis[index].count++;
        setEmojis(updatedEmojis);
    };

    const calculateWinner = () => {
        let maxCount = -1;
        let winningEmoji = '';

        emojis.forEach(emojiData => {
            if (emojiData.count > maxCount) {
                maxCount = emojiData.count;
                winningEmoji = emojiData.emoji;
            }
        });

        return winningEmoji;
    };

    const handleShowResults = () => {
        setShowResults(true);
    };

    return (
        <div className='container-fluid bg-primary d-flex flex-column p-5 border border-success-subtle rounded-4' style={{ width: '500px' }}>
            <h1>Emoji Voting</h1>
            <ul className='d-flex flex-row'>
                {emojis.map((emojiData, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        <span className='d-flex flex-column-reverse' style={{ width: '50px', height: '50px', fontSize: '2rem',margin:'0 auto' }}>{emojiData.emoji}</span>
                        <button onClick={() => vote(index)}>Vote</button>
                        <span className='m-2'>Clicks: {emojiData.count}</span>
                    </li>
                ))}
            </ul>
            {/* Показать результаты при клике на кнопку */}
            <button onClick={handleShowResults} style={{ maxWidth: '150px', margin: '0 auto' }}>Show Results</button>
            
            {/* Отображение результатов */}
            {showResults && (
                <div>
                    <h2>Winning Emoji: {calculateWinner()}</h2>
                </div>
            )}
        </div>
    );
};

export default EmojiVoting;
