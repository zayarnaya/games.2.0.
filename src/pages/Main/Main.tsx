import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';
import { MainContentWrapper } from '../../views/layouts/MainContentWrapper/MainContentWrapper';
import { Sidebar } from '../../views/components';
import { menuLinks } from '../../consts/menuLinks';

export const Main: FC = () => {
	return (
		<MainContentWrapper>
			<Sidebar links={menuLinks} />
			<Outlet />
		</MainContentWrapper>
	);
};
