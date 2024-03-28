import Json2Canvas from '../pages/json2canvas';
import LearnD3 from '../pages/learn-d3';

export const ROUTES_OPTIONS = [
  {
    path: 'json2canvas',
    element: <Json2Canvas />,
    name: 'json2canvas',
  },
  {
    path: 'learn-d3',
    element: <LearnD3 />,
    name: 'learn-d3',
  },
];
