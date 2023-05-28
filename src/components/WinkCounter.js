import React from 'react';
import './style.css';
import useWinkCounter from './UseWinkCounter';

function WinkCounter() {
  const { count, incrementCount, isWinking } = useWinkCounter();
  const renderEmoji = (count) => {
    if (count % 2 === 0) {
      return <div className='wink-emoji'>🥰</div>;
    } else {
      return <div className='wink-emoji'>😡</div>;
    }
  };
  return (
    <div>
      <h1>Göz Kırpan Emoji Sayacı</h1>
      <button onClick={incrementCount}>Dene</button>
      <p>Göz kırpan emojiler: {count}</p>
      <div className="wink-container">
        {
            isWinking ? <div>{renderEmoji(count)}</div> : null
        }
      </div>
    </div>
  );
}

export default WinkCounter;