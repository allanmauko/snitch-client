import React from 'react';
import Header from '../../components/header/header';
import Banner from '../../sections/banner';
import About from '../../sections/about';
import Services from '../../sections/services';
import Team from '../../sections/team';
import Footer from '../../sections/footer';
// import UserSignUp from '../userSignUp';

const Page = () => {
  return (
      <div>
        <Header />
        {/* <UserSignUp/> */}
        <Banner />
        <About />
        <Services/>
        <Team/>
        <Footer/>
      </div>
  );
};

export default Page;