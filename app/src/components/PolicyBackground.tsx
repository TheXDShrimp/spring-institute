

const Background = ({ className = "" }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden bg-cover bg-lightGreen">
            <div className="absolute top-0 left-0 z-[-2] w-full h-full bg-[url('/images/policyLines.png')]">
            </div>
        </div>
    );
}

export default Background;