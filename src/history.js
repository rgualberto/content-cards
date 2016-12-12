import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

export const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
