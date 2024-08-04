import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SmallCards from '../../Components/SmallCards/SmallCards';
import RecentTask from '../../Components/RecentTask/RecentTask';
import Services from '../../Components/Services/Services';
import Fingertips from '../../Components/Fingertips/Fingertips';
import Video from '../../Components/Video/Video';
import FiverPro from '../../Components/FiverPro/FiverPro';
import UserReview from '../../Components/UserReview/UserReview';
import FiverLogo from '../../Components/FiverLogo/FiverLogo';
import Guides from '../../Components/Guides/Guides';
import JoinFiverr from '../../Components/JoinFiverr/JoinFiverr';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <SmallCards></SmallCards>
            <RecentTask></RecentTask>
            <Services></Services>
            <Fingertips></Fingertips>
            <Video></Video>
            <FiverPro></FiverPro>
            <UserReview></UserReview>
            <FiverLogo></FiverLogo>
            <Guides></Guides>
            <JoinFiverr></JoinFiverr>
        </div>
    );
};

export default HomePage;