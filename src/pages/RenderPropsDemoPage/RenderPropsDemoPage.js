import React from 'react';
import Counter from './Counter/Counter';
import HoverCount from './HoverCount/HoverCount';
import ClickCount from './ClickCount/ClickCount';

const RenderPropsDemoPage = () => {
  return (
    <div>
      <Counter
        render={(count, incrementCount) => (
          <ClickCount count={count} incrementCount={incrementCount} />
        )}
      />
      <hr />
      <Counter
        render={(count, incrementCount) => (
          <HoverCount count={count} incrementCount={incrementCount} />
        )}
      />
      <hr />
    </div>
  );
};

export default RenderPropsDemoPage;
