import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNavbar = () => {
    return (
        <div className="space-y-5 mt-6 md:mt-0">
            <SocialLogin />
            <FindUs />
        </div>
    );
};

export default RightNavbar;
