import './Welcome.css';
const Welcome = ({setData, toggle, setToggle, formType}) => {
    return(
        <>
        <div className='welcome'>
            <div className='welcome-title'>
                    <span className='header-primary'>My</span>
                    <span className='header-secondary'>Note</span>
            </div>
            <div className='welcome-description'>
                <div className='description-header'>
                    <span className='header-primary'>Meet your modren</span>
                    <span className='header-secondary'>note taking app</span>
                </div>
                <div className='description-note'>
                    <p>Manage your dialy tasks and workflow in a modren way and boost your efficiency without any efforts .</p>
                </div>
            </div>
            <div className='welcome-authenticate'>
                <span><button className='cta-btn btn' onClick={() => {
                    setData({type:"FORM_TYPE", formType:'signup'});
                    setToggle();
                    }}>{toggle && formType === 'signup' ? "close form" : "Join Now"}</button></span>
                <span><button className='welcome-button-text' onClick={() => {
                    setData({type:"FORM_TYPE", formType:'signin'});
                    setToggle();
                    }}>{toggle && formType === 'signin' ? "close form" :"Already have an account?"}</button></span>  
            </div>
        </div>
        </>
    );
};

export default Welcome;