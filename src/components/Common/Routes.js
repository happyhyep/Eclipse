import Give from '../../pages/Give';
import Main from '../../pages/Main';
import Recruit from '../../pages/Recruit';
import Timetable from '../../pages/Timetable';
import Give from '../../pages/Give';


const routes = [
    {
        id: 'main',
        path: '/',
        component: Main,
    },
    {
        id: 'timetable',
        path: '/timetable',
        component: Timetable,
    },
    {
        id: 'recruit',
        path: '/recruit',
        component: Recruit,
    },
    {
        id: 'giveit',
        path: '/giveit',
        component: Give,
    },


];

export default routes;