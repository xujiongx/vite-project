import { useState } from 'react';
import { JSONCanvas } from './components/canvas';
import LinePlot from './components/d3'

const content = {
  edges: [
    {
      id: '6fa11ab87f90b8af',
      fromNode: '7efdbbe0c4742315',
      fromSide: 'right',
      toNode: '59e896bc8da20699',
      toSide: 'left',
      fromEnd: '',
      toEnd: '',
    },
  ],
  initialNodes: [
    // {
    //   id: '754a8ef995f366bc',
    //   type: 'group',
    //   position: {
    //     x: -300,
    //     y: -460,
    //   },
    //   dimensions: {
    //     width: 610,
    //     height: 200,
    //   },
    //   data: {
    //     label: 'JSON Canvas',
    //     content: 'JSON Canvas',
    //   },
    // },
    // {
    //   id: '8132d4d894c80022',
    //   type: 'file',
    //   file: 'readme.md',
    //   x: -280,
    //   y: -200,
    //   width: 570,
    //   height: 560,
    //   color: '6',
    // },
    // {
    //   id: '7efdbbe0c4742315',
    //   type: 'file',
    //   file: '_site/logo.svg',
    //   x: -280,
    //   y: -440,
    //   width: 217,
    //   height: 80,
    // },
    {
      id: '7efdbbe0c4742315',
      type: 'text',
      position: {
        x: 40,
        y: -440,
      },
      dimensions: {
        width: 250,
        height: 160,
      },
      data: {
        label: '',
        content:
          'Learn more:\n\n- [Apps](/docs/apps.md)\n- [Spec](spec/1.0.md)\n- [Github](https://github.com/obsidianmd/jsoncanvas)',
      },
    },
    {
      id: '59e896bc8da20699',
      type: 'text',
      position: {
        x: 460,
        y: -440,
      },
      dimensions: {
        width: 250,
        height: 160,
      },
      data: {
        label: '',
        content:
          'Learn more:\n\n- [Apps](/docs/apps.md)\n- [Spec](spec/1.0.md)\n- [Github](https://github.com/obsidianmd/jsoncanvas)',
      },
    },
    // {
    //   id: '0ba565e7f30e0652',
    //   type: 'file',
    //   file: 'spec/1.0.md',
    //   x: 360,
    //   y: -400,
    //   width: 400,
    //   height: 400,
    // },
  ],
};
import * as d3 from 'd3';
function App() {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));
    function onMouseMove(event) {
      const [x, y] = d3.pointer(event);
      setData(data.slice(-200).concat(Math.atan2(x, y)));
    }
  return (
    <div onMouseMove={onMouseMove}>
      <JSONCanvas content={content} />
      {/* <LinePlot data={data} /> */}
    </div>
  );
}

export default App;
