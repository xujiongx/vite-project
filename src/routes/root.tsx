import { Link, Outlet } from 'react-router-dom';
import { ROUTES_OPTIONS } from './const';

export default function Root() {
  return (
    <div className='flex'>
      <div id='sidebar'>
        <nav>
          <ul>
            {ROUTES_OPTIONS.map((item) => (
              <li key={item.path}>
                <Link  to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id='detail' className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
}
