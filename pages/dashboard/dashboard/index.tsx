import React from 'react';
import { Box } from 'rimble-ui';
import DashboardLayout from '../../layout/DashboardLayout/Layout';
import DashboardContainer from '../../components/Container/DasboardContainer';
import Column from '../../components/Column/Column';
import CustomHeading from '../../components/CustomHeading/CustomHeading';
import CustomButton from '../../components/CustomButton/CustomButton';

function Dashboard(props) {
    return (
        <DashboardLayout>
            {/*Header*/}
            <DashboardContainer>
                <Column width={6 / 12}>
                    <CustomHeading as={'h2'} fontWeight={'500'}>
                        Dashboard
                    </CustomHeading>
                </Column>
                <Column width={6 / 12} textAlign={'right'}>
                    <CustomButton as={'a'} mr={'30px'} fontWeight={400}>
                        Deposit
                    </CustomButton>
                    <CustomButton as={'a'} fontWeight={400}>
                        Redeem
                    </CustomButton>
                </Column>
            </DashboardContainer>
            <CustomHeading as={'h3'} fontWeight={'500'}>
                Tokens
            </CustomHeading>
        </DashboardLayout>
    );
}

export default Dashboard;
