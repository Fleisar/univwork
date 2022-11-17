import Error404 from '../pages/error404';
import Index from '../pages/indexPage';
import Welcome from '../pages/welcome';
import { Navigate } from "react-router";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
	{
		path: '*',
		element: <Error404/>,
	},
	{
		path: '/',
		element: <Navigate to='/game'/>
	},
	{
		path: '/game',
		element: <Index/>
	},
	{
		path: '/welcome',
		element: <Welcome/>,
	},
]);

export default router;
