import React from 'react';
import './style.css';
import useWinkCounter from './UseWinkCounter';

function WinkCounter() {
  const { count, incrementCount, isWinking } = useWinkCounter();
  const renderEmoji = (count) => {
    switch (count) {
      case 1:
        return "😉";
      case 2:
        return "😞";
      default:
        return "😡";
    }
  };

  return (
    <div>
      <h1>Göz Kırpan Emoji Sayacı</h1>
      <button onClick={incrementCount}>Dene</button>
      <p>Göz kırpan emojiler: {count}</p>
      <div className="wink-container">
        {
            isWinking ? <div>{renderEmoji()}</div> : null
        }
      </div>
    </div>
  );
}

export default WinkCounter;