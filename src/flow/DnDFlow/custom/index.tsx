import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
        id="inA"
      />
      <div>
      Selecter
      </div>
    <select name="" id="">
        <option value="">test</option>
    </select>
      <Handle
        type="source"
        position={Position.Bottom}
        id="outA"
        style={{ left: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="outB"
        style={{ right:10 , background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
